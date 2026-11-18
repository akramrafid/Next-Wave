import { NextResponse } from 'next/server';

const GEMINI_MODELS = ['gemini-3.5-flash-lite', 'gemini-3.5-flash'];

function toGeminiParts(content) {
  if (typeof content === 'string') {
    return content ? [{ text: content }] : [];
  }
  if (!Array.isArray(content)) return [];

  const parts = [];
  for (const item of content) {
    if (item?.type === 'text' && item.text) {
      parts.push({ text: item.text });
    } else if (item?.type === 'image_url' && item.image_url?.url) {
      const match = /^data:([^;]+);base64,(.+)$/.exec(item.image_url.url);
      if (match) {
        parts.push({ inlineData: { mimeType: match[1], data: match[2] } });
      }
    }
  }
  return parts;
}

export async function POST(req) {
  try {
    const { messages = [] } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: { message: 'GEMINI_API_KEY is not configured on the server.' } },
        { status: 500 }
      );
    }

    const systemTexts = [];
    const contents = [];

    for (const msg of messages) {
      if (msg?.role === 'system') {
        if (typeof msg.content === 'string' && msg.content) {
          systemTexts.push(msg.content);
        }
        continue;
      }

      const parts = toGeminiParts(msg?.content);
      if (parts.length > 0) {
        contents.push({
          role: msg?.role === 'assistant' ? 'model' : 'user',
          parts,
        });
      }
    }

    const payload = {
      contents,
      generationConfig: {
        maxOutputTokens: 1500,
        thinkingConfig: { thinkingLevel: 'MINIMAL' },
      },
    };

    if (systemTexts.length > 0) {
      payload.systemInstruction = {
        parts: [{ text: systemTexts.join('\n\n') }],
      };
    }

    let response;
    let data;
    for (const model of GEMINI_MODELS) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify(payload),
        }
      );

      data = await response.json();
      if (response.ok || (response.status !== 429 && response.status !== 503)) {
        break;
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: { message: data.error?.message || response.statusText || 'Gemini API error' } },
        { status: response.status }
      );
    }

    const replyText = (data.candidates?.[0]?.content?.parts || [])
      .filter((p) => !p.thought && typeof p.text === 'string')
      .map((p) => p.text)
      .join('');

    if (!replyText) {
      const reason =
        data.promptFeedback?.blockReason ||
        data.candidates?.[0]?.finishReason ||
        'Empty response from Gemini API';
      return NextResponse.json(
        { error: { message: `No response generated (${reason}).` } },
        { status: 502 }
      );
    }

    return NextResponse.json({
      choices: [{ message: { role: 'assistant', content: replyText } }],
    });
  } catch (error) {
    console.error('Chat API route error:', error);
    return NextResponse.json(
      { error: { message: error.message || 'Internal server error' } },
      { status: 500 }
    );
  }
}
