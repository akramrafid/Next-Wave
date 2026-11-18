'use client';

import React, { useEffect, useState } from 'react';
import { COOKIE_CHANGE_EVENT, COOKIE_OPEN_EVENT, readCookieConsent, saveCookieConsent } from './CookieConsent';

export default function CookieResetButton() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(readCookieConsent());
    const onChange = (e) => setStatus(e.detail || readCookieConsent());
    window.addEventListener(COOKIE_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CHANGE_EVENT, onChange);
  }, []);

  const label =
    status === 'all'
      ? 'Current preference: All cookies & third-party embeds enabled.'
      : status === 'essential'
      ? 'Current preference: Essential only (third-party maps blocked until clicked).'
      : 'Current preference: No choice recorded yet.';

  return (
    <div className="mt-6 p-5 bg-[#F7F7F7] border border-[#CCCCCC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-xs sm:text-sm font-sans text-[#262626]" role="status">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
        <button
          type="button"
          onClick={() => saveCookieConsent('essential')}
          className="min-h-[44px] px-4 py-2 bg-white hover:bg-[#F7F7F7] border border-[#CCCCCC] hover:border-[#262626] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.1em] text-[#262626] transition-colors"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={() => saveCookieConsent('all')}
          className="min-h-[44px] px-4 py-2 bg-[#076C96] hover:bg-[#055475] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.1em] text-white transition-colors"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(COOKIE_OPEN_EVENT))}
          className="min-h-[44px] px-4 py-2 bg-[#262626] hover:bg-[#076C96] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.1em] text-white transition-colors"
        >
          Open Preferences
        </button>
      </div>
    </div>
  );
}
