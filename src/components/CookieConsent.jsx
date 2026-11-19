'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CloseCircleIcon, CookieIcon } from './Icons';

export const COOKIE_STORAGE_KEY = 'nw_cookie_consent';
export const COOKIE_CHANGE_EVENT = 'nw-cookie-consent-change';
export const COOKIE_OPEN_EVENT = 'nw-open-cookie-banner';

export function readCookieConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const val = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    return val === 'all' || val === 'essential' ? val : null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(choice) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, choice);
  } catch {}
  window.dispatchEvent(new CustomEvent(COOKIE_CHANGE_EVENT, { detail: choice }));
}

export function CookiePreferencesTrigger({ className = '' }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_OPEN_EVENT))}
      className={className}
    >
      Cookie Preferences
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = readCookieConsent();
    if (!current) {
      setVisible(true);
    }

    const onOpen = () => setVisible(true);
    const onChange = (e) => {
      if (e.detail === 'all' || e.detail === 'essential') {
        setVisible(false);
      }
    };

    window.addEventListener(COOKIE_OPEN_EVENT, onOpen);
    window.addEventListener(COOKIE_CHANGE_EVENT, onChange);
    return () => {
      window.removeEventListener(COOKIE_OPEN_EVENT, onOpen);
      window.removeEventListener(COOKIE_CHANGE_EVENT, onChange);
    };
  }, []);

  if (!visible) return null;

  const choose = (mode) => {
    saveCookieConsent(mode);
    setVisible(false);
  };

  return (
    <aside
      role="region"
      aria-label="Cookie and third-party embed preferences"
      className="fixed bottom-4 left-4 right-[80px] sm:right-auto sm:w-[25rem] z-40 bg-[#262626] text-white border border-white/25 rounded-[2px] shadow-xl p-5"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <CookieIcon size={19} className="text-[#0E9ED9]" />
          <h2 className="font-poppins font-semibold text-sm tracking-[-0.01em] text-white">
            Cookies &amp; Third-Party Embeds
          </h2>
        </div>

        <button
          type="button"
          onClick={() => choose('essential')}
          aria-label="Use essential settings and close banner"
          className="w-8 h-8 -mt-1 -mr-1 flex items-center justify-center text-[#CCCCCC] hover:text-white rounded-[2px] transition-colors"
        >
          <CloseCircleIcon size={18} />
        </button>
      </div>

      <p className="font-sans text-xs text-[#CCCCCC] leading-relaxed mb-4">
        Next Wave uses no first-party advertising trackers. Selecting Essential Only pauses external third-party embeds (Behance previews and Google Maps).{' '}
        <Link
          href="/cookie-policy"
          className="text-[#0E9ED9] hover:text-white underline underline-offset-4 font-medium transition-colors"
        >
          Cookie Policy
        </Link>
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => choose('essential')}
          className="min-h-[44px] px-3 py-2.5 rounded-[2px] border border-white/30 hover:border-white hover:bg-white/10 text-white font-poppins font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={() => choose('all')}
          className="min-h-[44px] px-3 py-2.5 rounded-[2px] bg-[#076C96] hover:bg-[#055475] text-white font-poppins font-semibold text-xs uppercase tracking-[0.1em] transition-colors"
        >
          Accept All
        </button>
      </div>
    </aside>
  );
}
