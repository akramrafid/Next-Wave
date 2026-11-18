import React from 'react';

const MessengerCTA = () => {
  return (
    <a
      href="https://www.messenger.com/t/598186176704544"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[78px] right-4 z-40 flex items-center justify-center w-[52px] h-[52px] bg-[linear-gradient(135deg,#0099FF_0%,#0062E3_55%,#623CEA_100%)] text-white rounded-full border border-white/30 shadow-[0_10px_24px_rgba(0,98,227,0.3)] hover:brightness-110 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-200"
      aria-label="Chat with us on Messenger"
      title="Chat on Messenger"
    >
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        className="fill-current"
        fillRule="evenodd"
        clipRule="evenodd"
        aria-hidden="true"
      >
        <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.08.36-.1.55-.06.91.25 1.87.38 2.88.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm5.88 7.51-2.94 4.66c-.46.74-1.46.92-2.16.4l-2.34-1.76a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.19-.69-.64l2.94-4.66c.46-.74 1.46-.92 2.16-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.19.69.64z" />
      </svg>
    </a>
  );
};

export default MessengerCTA;
