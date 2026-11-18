import { NextResponse } from 'next/server';

const GEMINI_MODELS = ['gemini-3-flash-preview', 'gemini-3.5-flash-lite', 'gemini-3.1-flash-lite'];

const NEXTWAVE_SYSTEM_PROMPT = `You are Next Wave Assistant, the official assistant for Next Wave (NextWave 360 Solutions) on nextwaves.agency.
Answer concisely (under 70 words unless detailed breakdown requested), in the same language as the user (English or Bengali/বাংলা). Use plain text only—no Markdown asterisks (* or **).
Stick strictly to Next Wave website facts and real marketing guidance; never invent fake metrics, ROI figures, or unverified claims.

Next Wave Facts:
- Identity: Marketing & advertising agency founded in 2025 in Chattogram, Bangladesh ("Marketing That Moves Business Forward").
- Founder & CEO: Abdullah Al Kaisar (10+ years marketing leadership; prior executive background includes BSRM, Bridal Muse by Tahsin, Beacon Bangladesh, Frozen Master, and Rays—kept separate from agency clients).
- Approach: Strategy (commercial & audience insight), Emotion (creative & brand resonance), Execution (omni-channel delivery).
- The 360 Spectrum (Services):
  1. Strategy (Brand Strategy, Communication Planning, Campaign Design, Media Strategy)
  2. Creative & Design (Brand Identity, Graphic Design, Copywriting, Audio-Visual, Content, Packaging)
  3. Digital & Performance (Social Media, Paid Campaigns, SEO, Web Design, Performance Marketing)
  4. Production & Activation (Event Management, OVC & TVC, Photography, Experiential & BTL Campaigns)
  5. PR & Communications (Corporate Affairs, CSR & Advocacy, Reputation Management, Crisis Communication)
- Industries: Retail & Consumer, Education, Hospitality & Lifestyle, Corporate & B2B, Real Estate, Healthcare & Pharma, Technology & SaaS, Emerging Ventures. Works with 34+ client brands (portfolio at /gallery).
- Indicative Media Rates: Dollar rate ৳155/$, minimum spend $30, estimated cost per follower $0.10–$0.20 (subject to campaign consultation).
- Contact: Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203, Bangladesh | Email: info.nextwaves@gmail.com | Phone/WhatsApp: +880 1711-204614 | Consultation form: /contact (replied within 24 business hours).`;

function isBengaliQuery(text) {
  return /[\u0980-\u09FF]|\b(koto|taka|kothay|apnara|apnader|lagbe|korbo|thakbe)\b/i.test(text);
}

function matchWebsiteFastReply(messages) {
  if (!Array.isArray(messages) || messages.length === 0) return null;
  const last = messages[messages.length - 1];
  if (last?.role !== 'user' || typeof last.content !== 'string') return null;

  const q = last.content.trim();
  if (!q || q.length > 80) return null;
  const lower = q.toLowerCase();
  const bn = isBengaliQuery(q);

  if (/dollar\s*rate.*\bminimum|\bminimum.*dollar\s*rate|^(how much is|what is).*(dollar\s*rate|minimum.*spend)|^(dollar\s*rate|minimum\s*dollar\s*spends?)\??$/i.test(lower)) {
    return bn
      ? 'Next Wave-এর মিডিয়া বায়িং ডলার রেট ৳155 প্রতি ডলার এবং ন্যূনতম অ্যাড স্পেন্ড $30। কাস্টম বাজেটের জন্য +880 1711-204614 (WhatsApp) বা /contact পেজে যোগাযোগ করতে পারেন।'
      : 'Our indicative media-buying dollar rate is ৳155 per dollar, with a minimum campaign spend of $30. Final campaign budgets are confirmed during consultation via /contact or WhatsApp (+880 1711-204614).';
  }

  if (/(min|minimum).*(follower|cost)|follower.*(min|minimum)|^(per\s+dollar\s+cost.*follower|cost\s+per\s+follower)\??$/i.test(lower)) {
    return bn
      ? 'আমাদের ন্যূনতম ক্যাম্পেইন খরচ $30 (৳155/ডলার রেটে) এবং প্রতি ডলারে অনুমানিক ফলোয়ার কস্ট $0.10 থেকে $0.20 (টার্গেটিং ভেদে পরিবর্তিত হয়)।'
      : 'Our minimum spend is $30 (at ৳155 per dollar), and estimated follower cost ranges from $0.10 to $0.20 per dollar depending on audience targeting and creative.';
  }

  if (/^(what|which)\s+(services|capabilities)\s+does\s+next\s*wave\s+offer\??$|^what\s+services\s+do\s+you\s+(offer|provide)\??$/i.test(lower)) {
    return bn
      ? 'Next Wave ৫টি মূল সার্ভিস পিলারে কাজ করে: Strategy, Creative & Design, Digital & Performance, Production & Activation এবং PR & Communications।'
      : 'Next Wave delivers 360-degree marketing across five pillars: Strategy (brand & media planning), Creative & Design (identity, copywriting, packaging, AV), Digital & Performance (SEO, social, paid media, web), Production & Activation (events, OVC/TVC, photography), and PR & Communications.';
  }

  if (/^(office\s*(address|location)|office\s*&\s*founder\s*info|where\s+is\s+(next\s*wave|your\s*office)\s+located|who\s+is\s+(the\s+)?founder(\s+of\s+next\s*wave)?)\??$/i.test(lower)) {
    return bn
      ? 'NextWave 360 Solutions-এর প্রতিষ্ঠাতা ও সিইও আবদুল্লাহ আল কায়সার। অফিস: আলী ভবন, শহীদ আবদুল হালিম, ১১ মোহাম্মদ আলী রোড, চট্টগ্রাম ৪২০৩। ইমেইল: info.nextwaves@gmail.com | WhatsApp: +880 1711-204614।'
      : 'Next Wave (NextWave 360 Solutions) was founded in 2025 by Abdullah Al Kaisar (10+ years of marketing leadership). Our office is at Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203, Bangladesh. Email info.nextwaves@gmail.com or WhatsApp +880 1711-204614.';
  }

  return null;
}

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

function buildGeminiPayload(messages) {
  const recentMessages = Array.isArray(messages)
    ? messages.filter((m) => m?.role !== 'system').slice(-8)
    : [];

  const contents = [];
  for (const msg of recentMessages) {
    const parts = toGeminiParts(msg?.content);
    if (parts.length > 0) {
      contents.push({
        role: msg?.role === 'assistant' ? 'model' : 'user',
        parts,
      });
    }
  }

  return {
    systemInstruction: {
      parts: [{ text: NEXTWAVE_SYSTEM_PROMPT }],
    },
    contents,
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 220,
      thinkingConfig: { thinkingLevel: 'MINIMAL' },
    },
  };
}

function extractChunkText(chunkJson) {
  const parts = chunkJson?.candidates?.[0]?.content?.parts || [];
  return parts
    .filter((p) => !p.thought && typeof p.text === 'string')
    .map((p) => p.text)
    .join('');
}

async function callUpstream(endpointSuffix, payload, apiKey) {
  let lastRes;
  let lastData = {};

  for (const model of GEMINI_MODELS) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:${endpointSuffix}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        }
      );

      if (response.ok) {
        return { response, data: null };
      }

      lastRes = response;
      try {
        lastData = await response.json();
      } catch {
        lastData = {};
      }
      if (response.status !== 429 && response.status !== 503 && response.status !== 404) {
        break;
      }
    } catch (err) {
      lastRes = null;
      lastData = { error: { message: err?.name === 'AbortError' ? 'Upstream model timeout' : err?.message } };
    } finally {
      clearTimeout(timer);
    }
  }

  return { response: lastRes, data: lastData };
}

export async function POST(req) {
  try {
    const { messages = [], stream = false } = await req.json();

    const fastReply = matchWebsiteFastReply(messages);
    if (fastReply) {
      if (stream) {
        return new Response(fastReply, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-cache, no-transform',
          },
        });
      }
      return NextResponse.json({
        choices: [{ message: { role: 'assistant', content: fastReply } }],
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: { message: 'GEMINI_API_KEY is not configured on the server.' } },
        { status: 500 }
      );
    }

    const payload = buildGeminiPayload(messages);
    if (payload.contents.length === 0) {
      return NextResponse.json(
        { error: { message: 'Message content is required.' } },
        { status: 400 }
      );
    }

    if (stream) {
      const { response, data } = await callUpstream('streamGenerateContent?alt=sse', payload, apiKey);
      if (!response || !response.ok || !response.body) {
        return NextResponse.json(
          { error: { message: data?.error?.message || response?.statusText || 'Gemini API error' } },
          { status: response?.status || 502 }
        );
      }

      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      const textStream = new ReadableStream({
        async start(controller) {
          const reader = response.body.getReader();
          let buffer = '';
          try {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split(/\r?\n/);
              buffer = lines.pop() || '';

              for (const line of lines) {
                if (!line.startsWith('data: ')) continue;
                const jsonStr = line.slice(6).trim();
                if (!jsonStr || jsonStr === '[DONE]') continue;
                try {
                  const parsed = JSON.parse(jsonStr);
                  const chunkText = extractChunkText(parsed);
                  if (chunkText) {
                    controller.enqueue(encoder.encode(chunkText));
                  }
                } catch {}
              }
            }
            if (buffer.startsWith('data: ')) {
              const jsonStr = buffer.slice(6).trim();
              if (jsonStr && jsonStr !== '[DONE]') {
                try {
                  const parsed = JSON.parse(jsonStr);
                  const chunkText = extractChunkText(parsed);
                  if (chunkText) controller.enqueue(encoder.encode(chunkText));
                } catch {}
              }
            }
          } catch (err) {
            controller.error(err);
          } finally {
            controller.close();
          }
        },
      });

      return new Response(textStream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
        },
      });
    }

    const { response, data: errData } = await callUpstream('generateContent', payload, apiKey);
    if (!response || !response.ok) {
      return NextResponse.json(
        { error: { message: errData?.error?.message || response?.statusText || 'Gemini API error' } },
        { status: response?.status || 502 }
      );
    }

    const data = await response.json();
    const replyText = extractChunkText(data);
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
