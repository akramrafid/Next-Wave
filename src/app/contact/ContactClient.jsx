'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AlertIcon,
  ArrowUpRightIcon,
  ChatCallIcon,
  ChevronDownIcon,
  GlobalIcon,
  MailIcon,
  MapPointIcon,
  PhoneIcon,
  RestartIcon,
  SendIcon,
} from '@/components/Icons';
import {
  COOKIE_CHANGE_EVENT,
  readCookieConsent,
  saveCookieConsent,
} from '@/components/CookieConsent';

const serviceOptions = [
  'Strategy & Planning',
  'Creative & Brand Design',
  'Digital & Performance Marketing',
  'Production & Activation',
  'PR & Corporate Communications',
  'Integrated 360 Partnership',
];

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: 'Strategy & Planning',
  message: '',
  consent: false,
};

const ContactClient = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [mapApproved, setMapApproved] = useState(false);

  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const consentRef = useRef(null);

  useEffect(() => {
    try {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
      ScrollTrigger.clearScrollMemory();
    } catch (e) {}
    try {
      document.querySelectorAll('.pin-spacer').forEach((el) => {
        const child = el.children[0];
        if (child) {
          child.removeAttribute('style');
          el.parentNode?.insertBefore(child, el);
        }
        el.remove();
      });
    } catch (e) {}
    window.scrollTo(0, 0);

    setMapApproved(readCookieConsent() === 'all');
    const onConsentChange = (e) => {
      if (e.detail === 'all') setMapApproved(true);
      else if (e.detail === 'essential') setMapApproved(false);
    };
    window.addEventListener(COOKIE_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CHANGE_EVENT, onConsentChange);
  }, []);

  const hasDirtyInput =
    Boolean(
      formData.name ||
        formData.company ||
        formData.email ||
        formData.phone ||
        formData.message ||
        formData.consent ||
        formData.service !== 'Strategy & Planning'
    );

  const handleClearForm = () => {
    setFormData(INITIAL_FORM);
    setFieldErrors({});
    setSubmitError('');
    nameRef.current?.focus();
  };

  const validateFields = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.company.trim()) errs.company = 'Please enter your organisation name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work email address.';
    }
    if (!formData.phone.trim()) errs.phone = 'Please enter a phone or WhatsApp number.';
    if (!formData.message.trim()) errs.message = 'Please outline your project objectives.';
    if (!formData.consent) {
      errs.consent = 'Please confirm consent so we can process and respond to your enquiry.';
    }
    return errs;
  };

  const focusFirstError = (errs) => {
    const order = [
      ['name', nameRef],
      ['company', companyRef],
      ['email', emailRef],
      ['phone', phoneRef],
      ['message', messageRef],
      ['consent', consentRef],
    ];
    for (const [key, ref] of order) {
      if (errs[key] && ref.current) {
        ref.current.focus();
        break;
      }
    }
  };

  const updateField = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const errs = validateFields();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      setSubmitError('Please review and complete the highlighted required fields below.');
      focusFirstError(errs);
      return;
    }

    setFieldErrors({});
    setSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Could not submit enquiry. Please try again.');
      }
      setReceipt({
        id: data.id,
        name: formData.name,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      });
    } catch (err) {
      setSubmitError(
        err.message ||
          'Unable to submit enquiry. Please contact info.nextwaves@gmail.com directly.'
      );
    } finally {
      setSending(false);
    }
  };

  const whatsAppHandoffUrl = receipt
    ? `https://wa.me/8801711204614?text=${encodeURIComponent(
        `Hello Next Wave (${receipt.id}), I am ${receipt.name} from ${receipt.company} regarding ${receipt.service}: ${receipt.message}`
      )}`
    : 'https://wa.me/8801711204614';

  return (
    <div className="bg-[#F7F7F7] text-[#262626] min-h-screen pt-36 pb-24 font-sans border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#CCCCCC]">
          <h1 className="font-poppins font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#262626] tracking-[-0.025em] leading-[1.05]">
            Let&apos;s Talk.
          </h1>
          <p className="text-[#262626]/75 text-sm sm:text-base font-sans leading-relaxed max-w-[46ch] [text-wrap:pretty]">
            Tell us about your brand objectives, business challenges or expansion plans, and our senior leadership team will initiate the strategic dialogue.
          </p>
        </div>

        {/* Two-Column Architectural Contact Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-[#CCCCCC] bg-white mb-12">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 border-r border-b border-[#CCCCCC] flex flex-col justify-between bg-[#F7F7F7]">
            <div className="p-8 sm:p-10 bg-white flex-1">
              <h2 className="font-poppins font-semibold text-2xl text-[#262626] tracking-[-0.015em] mb-3">
                NextWave 360 Solutions
              </h2>
              <p className="text-[#262626]/75 text-sm leading-relaxed mb-8 max-w-[40ch]">
                Headquartered in Chattogram, serving ambitious corporate clients, national retail leaders, and global enterprise ventures.
              </p>

              <div className="divide-y divide-[#CCCCCC] border-t border-b border-[#CCCCCC]">
                <div className="py-5 flex items-start gap-4">
                  <MapPointIcon size={20} className="text-[#076C96] mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold text-xs uppercase tracking-[0.12em] text-[#262626]/75 mb-1">
                      Headquarters
                    </h3>
                    <p className="text-[#262626] text-sm leading-relaxed font-medium">
                      Ali Bhaban, Shahid Abdul Halim,<br />
                      11 Mohammad Ali Road, Chattogram 4203, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <MailIcon size={20} className="text-[#076C96] mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold text-xs uppercase tracking-[0.12em] text-[#262626]/75 mb-1">
                      Direct Email
                    </h3>
                    <a
                      href="mailto:info.nextwaves@gmail.com"
                      className="text-[#262626] hover:text-[#076C96] text-sm font-semibold transition-colors"
                    >
                      info.nextwaves@gmail.com
                    </a>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <PhoneIcon size={20} className="text-[#076C96] mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold text-xs uppercase tracking-[0.12em] text-[#262626]/75 mb-1">
                      Phone / WhatsApp
                    </h3>
                    <a
                      href="tel:+8801711204614"
                      className="text-[#262626] hover:text-[#076C96] text-sm font-semibold transition-colors"
                    >
                      +880 1711-204614
                    </a>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <GlobalIcon size={20} className="text-[#076C96] mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold text-xs uppercase tracking-[0.12em] text-[#262626]/75 mb-1">
                      Digital Domain
                    </h3>
                    <p className="text-[#076C96] text-sm font-poppins font-semibold">
                      nextwaves.agency
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#262626] text-white p-8 border-t border-[#CCCCCC]">
              <p className="text-xs sm:text-sm text-[#F7F7F7]/90 leading-relaxed">
                All client enquiries are reviewed directly by agency strategy leadership within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7 border-r border-b border-[#CCCCCC] p-8 sm:p-12 bg-white">
            <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-[#262626] tracking-[-0.015em] mb-2">
              Start a Conversation
            </h2>
            <p className="text-[#262626]/75 text-sm mb-8">
              Please complete the details below to initiate your strategic consultation. Fields marked with * are required.
            </p>

            {receipt ? (
              <div
                className="flex flex-col items-center justify-center py-12 gap-5 text-center border border-[#CCCCCC] bg-[#F7F7F7] p-8"
                role="status"
              >
                <SendIcon size={36} className="text-[#076C96]" />
                <div>
                  <h3 className="font-poppins font-semibold text-[#262626] text-2xl mb-1">
                    Enquiry Recorded ({receipt.id})
                  </h3>
                  <p className="text-[#262626]/80 text-sm max-w-md leading-relaxed">
                    Thank you, {receipt.name}. Your consultation request has been logged for review by our team, or you may forward it immediately via WhatsApp.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsAppHandoffUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#12803E] hover:bg-[#0F6932] text-white px-5 min-h-[48px] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors"
                  >
                    <ChatCallIcon size={17} />
                    <span>Continue on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setReceipt(null);
                      setFormData(INITIAL_FORM);
                      setFieldErrors({});
                      setSubmitError('');
                    }}
                    className="px-5 min-h-[48px] border border-[#CCCCCC] bg-white hover:border-[#262626] text-xs font-poppins font-semibold uppercase tracking-[0.12em] text-[#262626] transition-colors rounded-[2px]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {submitError && (
                  <div
                    role="alert"
                    className="p-4 border border-[#B91C1C] bg-[#FEF2F2] text-[#991B1B] text-sm font-sans flex items-start gap-3 rounded-[2px]"
                  >
                    <AlertIcon size={19} className="mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-poppins uppercase tracking-[0.1em] text-[#262626] font-semibold"
                    >
                      Name *
                    </label>
                    <input
                      ref={nameRef}
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.name ? 'true' : undefined}
                      aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className={`w-full bg-[#F7F7F7] border rounded-[2px] px-4 py-3.5 text-base sm:text-sm text-[#262626] placeholder:text-[#666666] focus:outline-none focus:border-[#076C96] focus:bg-white transition-colors min-h-[48px] ${
                        fieldErrors.name ? 'border-[#B91C1C]' : 'border-[#CCCCCC]'
                      }`}
                    />
                    {fieldErrors.name && (
                      <p id="contact-name-error" className="text-xs text-[#991B1B] font-sans">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-poppins uppercase tracking-[0.1em] text-[#262626] font-semibold"
                    >
                      Company *
                    </label>
                    <input
                      ref={companyRef}
                      id="contact-company"
                      name="company"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.company ? 'true' : undefined}
                      aria-describedby={fieldErrors.company ? 'contact-company-error' : undefined}
                      autoComplete="organization"
                      placeholder="Organization name"
                      value={formData.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className={`w-full bg-[#F7F7F7] border rounded-[2px] px-4 py-3.5 text-base sm:text-sm text-[#262626] placeholder:text-[#666666] focus:outline-none focus:border-[#076C96] focus:bg-white transition-colors min-h-[48px] ${
                        fieldErrors.company ? 'border-[#B91C1C]' : 'border-[#CCCCCC]'
                      }`}
                    />
                    {fieldErrors.company && (
                      <p id="contact-company-error" className="text-xs text-[#991B1B] font-sans">
                        {fieldErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-poppins uppercase tracking-[0.1em] text-[#262626] font-semibold"
                    >
                      Email *
                    </label>
                    <input
                      ref={emailRef}
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.email ? 'true' : undefined}
                      aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                      autoComplete="email"
                      placeholder="work@company.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full bg-[#F7F7F7] border rounded-[2px] px-4 py-3.5 text-base sm:text-sm text-[#262626] placeholder:text-[#666666] focus:outline-none focus:border-[#076C96] focus:bg-white transition-colors min-h-[48px] ${
                        fieldErrors.email ? 'border-[#B91C1C]' : 'border-[#CCCCCC]'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="contact-email-error" className="text-xs text-[#991B1B] font-sans">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-poppins uppercase tracking-[0.1em] text-[#262626] font-semibold"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      ref={phoneRef}
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      aria-required="true"
                      aria-invalid={fieldErrors.phone ? 'true' : undefined}
                      aria-describedby={fieldErrors.phone ? 'contact-phone-error' : undefined}
                      autoComplete="tel"
                      placeholder="+880 1..."
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full bg-[#F7F7F7] border rounded-[2px] px-4 py-3.5 text-base sm:text-sm text-[#262626] placeholder:text-[#666666] focus:outline-none focus:border-[#076C96] focus:bg-white transition-colors min-h-[48px] ${
                        fieldErrors.phone ? 'border-[#B91C1C]' : 'border-[#CCCCCC]'
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p id="contact-phone-error" className="text-xs text-[#991B1B] font-sans">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-poppins uppercase tracking-[0.1em] text-[#262626] font-semibold"
                  >
                    Primary Capability Required
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => updateField('service', e.target.value)}
                      className="w-full appearance-none bg-[#F7F7F7] border border-[#CCCCCC] rounded-[2px] pl-4 pr-11 py-3.5 text-base sm:text-sm text-[#262626] focus:outline-none focus:border-[#076C96] focus:bg-white transition-colors min-h-[48px] cursor-pointer"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-white text-[#262626]">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#262626]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-poppins uppercase tracking-[0.1em] text-[#262626] font-semibold"
                  >
                    Project Overview &amp; Objectives *
                  </label>
                  <textarea
                    ref={messageRef}
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    aria-invalid={fieldErrors.message ? 'true' : undefined}
                    aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                    rows={5}
                    placeholder="Please outline your objectives, timeline, budget parameters or challenges..."
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={`w-full bg-[#F7F7F7] border rounded-[2px] p-4 text-base sm:text-sm text-[#262626] placeholder:text-[#666666] focus:outline-none focus:border-[#076C96] focus:bg-white transition-colors resize-none ${
                      fieldErrors.message ? 'border-[#B91C1C]' : 'border-[#CCCCCC]'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="contact-message-error" className="text-xs text-[#991B1B] font-sans">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Explicit Form Consent */}
                <div
                  className={`p-4 border bg-[#F7F7F7] rounded-[2px] ${
                    fieldErrors.consent ? 'border-[#B91C1C]' : 'border-[#CCCCCC]'
                  }`}
                >
                  <label
                    htmlFor="contact-consent"
                    className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-[#262626]/85 leading-relaxed"
                  >
                    <input
                      ref={consentRef}
                      id="contact-consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => updateField('consent', e.target.checked)}
                      aria-required="true"
                      aria-invalid={fieldErrors.consent ? 'true' : undefined}
                      aria-describedby={fieldErrors.consent ? 'contact-consent-error' : undefined}
                      className="mt-1 h-4 w-4 shrink-0 accent-[#076C96] rounded-[2px] cursor-pointer"
                    />
                    <span>
                      I consent to Next Wave storing and processing my contact details and project brief in accordance with the{' '}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#076C96] hover:text-[#262626] font-semibold underline underline-offset-4"
                      >
                        Privacy Policy
                      </Link>
                      . *
                    </span>
                  </label>
                  {fieldErrors.consent && (
                    <p id="contact-consent-error" className="text-xs text-[#991B1B] font-sans mt-2 pl-7">
                      {fieldErrors.consent}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={handleClearForm}
                    disabled={!hasDirtyInput || sending}
                    className="inline-flex items-center justify-center gap-2 border border-[#CCCCCC] hover:border-[#262626] disabled:opacity-45 disabled:hover:border-[#CCCCCC] bg-white hover:bg-[#F7F7F7] text-[#262626] px-6 py-4 rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors duration-150 min-h-[50px] sm:w-auto shrink-0"
                  >
                    <RestartIcon size={17} />
                    <span>Clear Form</span>
                  </button>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex-1 bg-[#262626] hover:bg-[#076C96] disabled:opacity-60 text-white py-4 px-6 rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors duration-150 flex items-center justify-center gap-2 min-h-[50px]"
                  >
                    {sending ? (
                      <span>Sending Enquiry…</span>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <ArrowUpRightIcon size={17} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Consent-Gated Lazy Google Maps Frame */}
        <div className="w-full min-h-[380px] md:min-h-[440px] border border-[#CCCCCC] bg-white overflow-hidden">
          {mapApproved ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.47!2d91.8232174!3d22.3579668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9c309f91fad%3A0xaf671968541e87d7!2sNextWave%20360%20Solutions!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="440"
              loading="lazy"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[380px] md:h-[440px]"
              title="NextWave 360 Solutions Location"
            />
          ) : (
            <div className="h-[380px] md:h-[440px] bg-[#F7F7F7] p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-5">
              <MapPointIcon size={36} className="text-[#076C96]" />
              <div className="max-w-lg space-y-2">
                <h2 className="font-poppins font-semibold text-xl sm:text-2xl text-[#262626] tracking-[-0.015em]">
                  NextWave 360 Solutions · Chattogram Office
                </h2>
                <p className="text-sm text-[#262626]/80 font-sans leading-relaxed">
                  Ali Bhaban, Shahid Abdul Halim, 11 Mohammad Ali Road, Chattogram 4203, Bangladesh.
                </p>
                <p className="text-xs text-[#262626]/70 font-sans leading-relaxed">
                  This interactive map is hosted by Google Maps and may set Google cookies when loaded.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    saveCookieConsent('all');
                    setMapApproved(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#262626] hover:bg-[#076C96] text-white px-6 min-h-[48px] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors"
                >
                  <span>Load Interactive Map</span>
                </button>
                <a
                  href="https://maps.google.com/?q=NextWave+360+Solutions+Chattogram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#CCCCCC] hover:border-[#262626] bg-white text-[#262626] px-6 min-h-[48px] rounded-[2px] font-poppins font-semibold text-xs uppercase tracking-[0.12em] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRightIcon size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
