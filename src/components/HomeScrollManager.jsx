'use client';

import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Handles anchor hash scrolling and GSAP ScrollTrigger cleanup on HomePage unmount. */
export default function HomeScrollManager() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      try {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
        ScrollTrigger.clearScrollMemory();
      } catch {}

      try {
        document.querySelectorAll('.pin-spacer').forEach((el) => {
          const child = el.children[0];
          if (child) {
            child.removeAttribute('style');
            el.parentNode?.insertBefore(child, el);
          }
          el.remove();
        });
      } catch {}
    };
  }, []);

  return null;
}
