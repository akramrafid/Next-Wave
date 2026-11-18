import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MailIcon, MapPointIcon, PhoneIcon } from './Icons';

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
];

export default function LegalPage({
  activeHref,
  title,
  summary,
  effectiveDate = 'November 18, 2026',
  sections = [],
  afterSections = null,
}) {
  return (
    <div className="bg-[#F7F7F7] text-[#262626] min-h-screen pt-36 pb-24 font-sans border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Legal Sibling Route Navigation */}
        <nav
          aria-label="Legal documents"
          className="inline-flex flex-wrap border-t border-l border-[#CCCCCC] bg-white mb-10"
        >
          {legalLinks.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`min-h-[44px] px-5 py-3 border-r border-b border-[#CCCCCC] font-poppins text-xs font-semibold uppercase tracking-[0.12em] flex items-center transition-colors ${
                  isActive
                    ? 'bg-[#262626] text-white'
                    : 'bg-white hover:bg-[#F7F7F7] text-[#262626]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#CCCCCC]">
          <div>
            <h1 className="font-poppins font-semibold text-4xl sm:text-5xl md:text-6xl text-[#262626] tracking-[-0.025em] leading-[1.06] mb-3">
              {title}
            </h1>
            <p className="font-poppins text-xs font-medium uppercase tracking-[0.14em] text-[#076C96]">
              Effective Date: {effectiveDate} · NextWave 360 Solutions
            </p>
          </div>
          <p className="text-[#262626]/80 text-sm sm:text-base font-sans leading-relaxed max-w-[44ch] [text-wrap:pretty]">
            {summary}
          </p>
        </div>

        {/* 4:8 Architectural Read Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#CCCCCC] bg-white">
          {/* Left Sticky Index & Controller Rail */}
          <aside className="lg:col-span-4 bg-[#F7F7F7] lg:border-r lg:border-[#CCCCCC] border-b lg:border-b-0 flex flex-col justify-between">
            <div>
              <div className="px-6 sm:px-8 py-5 border-b border-[#CCCCCC] bg-white">
                <h2 className="font-poppins font-semibold text-xs uppercase tracking-[0.14em] text-[#262626]">
                  Sections
                </h2>
              </div>
              <nav aria-label="Page section index" className="divide-y divide-[#CCCCCC]">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="min-h-[48px] px-6 sm:px-8 py-3.5 flex items-center justify-between gap-3 text-sm font-sans font-medium text-[#262626] hover:bg-white hover:text-[#076C96] transition-colors"
                  >
                    <span>{sec.heading}</span>
                    <ArrowRightIcon size={15} className="text-[#076C96]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-6 sm:p-8 border-t border-[#CCCCCC] bg-[#262626] text-white space-y-4">
              <h2 className="font-poppins font-semibold text-xs uppercase tracking-[0.14em] text-[#0E9ED9]">
                Data &amp; Legal Contact
              </h2>
              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                NextWave 360 Solutions (Next Wave)
              </p>
              <div className="flex items-start gap-2.5 text-xs text-[#F7F7F7]">
                <MapPointIcon size={17} className="text-[#0E9ED9] mt-0.5" />
                <span>Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F7F7F7]">
                <MailIcon size={17} className="text-[#0E9ED9]" />
                <a href="mailto:info.nextwaves@gmail.com" className="hover:text-[#0E9ED9] transition-colors">
                  info.nextwaves@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F7F7F7]">
                <PhoneIcon size={17} className="text-[#0E9ED9]" />
                <a href="tel:+8801711204614" className="hover:text-[#0E9ED9] transition-colors">
                  +880 1711-204614
                </a>
              </div>
            </div>
          </aside>

          {/* Right Document Prose */}
          <div className="lg:col-span-8 divide-y divide-[#CCCCCC]">
            {sections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 p-7 sm:p-10 lg:px-14 lg:py-11"
              >
                <h2 className="font-poppins font-semibold text-xl sm:text-2xl text-[#262626] tracking-[-0.015em] mb-4">
                  {sec.heading}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#262626]/85 leading-relaxed max-w-[66ch] [text-wrap:pretty]">
                  {sec.paragraphs?.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-2.5 pt-1">
                      {sec.bullets.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#076C96] shrink-0 mt-2.5" aria-hidden="true" />
                          <span>
                            {item.label && <strong className="font-semibold text-[#262626]">{item.label}: </strong>}
                            {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {afterSections && (
              <div className="p-7 sm:p-10 lg:px-14 lg:py-11">
                {afterSections}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
