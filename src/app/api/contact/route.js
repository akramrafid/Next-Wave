import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || '').trim();
    const company = String(body?.company || '').trim();
    const email = String(body?.email || '').trim();
    const phone = String(body?.phone || '').trim();
    const service = String(body?.service || 'Strategy & Planning').trim();
    const message = String(body?.message || '').trim();
    const consent = body?.consent === true;

    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please complete all required fields before submitting.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: 'Please confirm consent to process your consultation enquiry.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid work email address.' },
        { status: 400 }
      );
    }

    const enquiryId = `NW-${Date.now().toString(36).toUpperCase()}`;
    const receivedAt = new Date().toISOString();
    const record = {
      id: enquiryId,
      receivedAt,
      consentAcceptedAt: receivedAt,
      name,
      company,
      email,
      phone,
      service,
      message,
    };

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const hookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });
      if (!hookRes.ok) {
        return NextResponse.json(
          { error: 'Enquiry delivery service returned an error. Please use WhatsApp or email directly.' },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true, id: enquiryId, channel: 'webhook' }, { status: 201 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, 'enquiries.ndjson'),
      `${JSON.stringify(record)}\n`,
      'utf8'
    );

    return NextResponse.json({ ok: true, id: enquiryId, channel: 'recorded' }, { status: 201 });
  } catch (err) {
    console.error('Contact enquiry error:', err);
    return NextResponse.json(
      { error: 'Unable to submit enquiry right now. Please reach us directly at info.nextwaves@gmail.com or WhatsApp.' },
      { status: 500 }
    );
  }
}
