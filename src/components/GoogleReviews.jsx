'use client';

import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Mohammad Faisal Alam',
    initials: 'MF',
    avatarColor: '#0E9ED9',
    avatar: '/Google Reviews/Mohammad Faisal Alam.png',
    rating: 5,
    timeAgo: '3 months ago',
    reviewCount: '1 review',
    text: 'NextWave 360 Solutions is a highly professional and reliable digital marketing agency. They offer strategic and well-organized services in Facebook Ads, social media management, branding, content marketing, and digital promotions. The team is friendly, communicative, and delivers work on time. The agency is led by Abdullah Al Kaisar Vaiya, who has over 10 years of experience in the marketing sector. His expertise ensures excellent services, strong support, and a professional working environment. In short, Kaisar Vaiya is a dynamic, all-round marketing specialist who consistently delivers great results for clients. For anyone looking to grow their business online, NextWave 360 Solutions is a trustworthy and highly recommended partner.',
  },
  {
    id: 2,
    name: 'Saraf Sabiha Nila',
    initials: 'SN',
    avatarColor: '#0E9ED9',
    avatar: '/Google Reviews/Saraf Sabiha Nila.png',
    rating: 5,
    timeAgo: '4 months ago',
    reviewCount: '1 review',
    text: 'NextWave is a professional and result-driven digital marketing agency that offers creative and effective marketing solutions. They have a strong understanding of branding, content & digital strategy, they focus on delivering quality results for their clients. The team is skilled, responsive and detail-oriented, making the whole marketing process smooth and efficient. If you\'re looking for a reliable agency to grow your brand and strengthen your online presence, NextWave is a great choice.',
  },
  {
    id: 3,
    name: 'Shahedul Islam',
    initials: 'SI',
    avatarColor: '#262626',
    avatar: '/Google Reviews/Shahedul Islam.png',
    rating: 5,
    timeAgo: '4 months ago',
    reviewCount: '1 review',
    text: 'After five years as a Visualizer, joining NextWave has been an exciting journey! The friendly culture, collaborative environment, and experienced creative team inspire me every day.',
  },
  {
    id: 4,
    name: 'Rina Parvin',
    initials: 'RP',
    avatarColor: '#0E9ED9',
    avatar: null,
    rating: 5,
    timeAgo: '4 months ago',
    reviewCount: '1 review',
    text: 'Best marketing agency in Chittagong.',
  },
  {
    id: 5,
    name: 'Dr. Md. Rafat Mushfiqul Islam',
    initials: 'DR',
    avatarColor: '#262626',
    avatar: '/Google Reviews/Dr. Md. Rafat Mushfiqul Islam.png',
    rating: 5,
    timeAgo: '2 months ago',
    reviewCount: '7 reviews · 17 photos',
    text: 'Highly recommended.',
  },
  {
    id: 6,
    name: 'Sayed Anas Ahamed',
    initials: 'SA',
    avatarColor: '#0E9ED9',
    avatar: '/Google Reviews/Sayed Anas Ahamed.png',
    rating: 5,
    timeAgo: '4 months ago',
    reviewCount: '2 reviews',
    text: 'The most commendable thing is that NextWave works with a combination of data, ideas and impact. Not just reach or likes, NextWave has helped create business growth and long-term value. NextWave is for those who want business growth, want to be in business for the long term and get results.',
  },
  {
    id: 7,
    name: 'Md. Gias Uddin',
    initials: 'GU',
    avatarColor: '#262626',
    avatar: '/Google Reviews/md gias uddin.png',
    badge: 'Local Guide',
    rating: 5,
    timeAgo: '4 months ago',
    reviewCount: '2 reviews · 21 photos',
    text: 'As a Local Guide, I\'ve explored many businesses across Chattogram — and NextWave 360 Solutions genuinely stands out. Their office has a modern, welcoming atmosphere, and the team is incredibly professional and passionate about their work. The quality of their digital marketing output is exceptional: creative, data-driven, and results-oriented. Whether it\'s branding, social media, or ad campaigns, they consistently deliver beyond expectations. A must-visit for any business serious about growing their online presence!',
  },
];

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#FBBC04' : '#CCCCCC'} aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review, isCenter }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 180;
  const displayText = !expanded && isLong ? review.text.slice(0, 180) + '…' : review.text;

  return (
    <div
      className={`bg-white rounded-3xl p-7 flex flex-col gap-3.5 transition-all duration-300 ${
        isCenter
          ? 'border-2 border-[#0E9ED9]/40 shadow-[0_12px_36px_rgba(14,158,217,0.14)] md:scale-[1.02]'
          : 'border border-[#CCCCCC]/80 shadow-sm md:opacity-85'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-poppins font-bold text-sm shrink-0 overflow-hidden border border-[#CCCCCC]/50"
          style={{ background: review.avatar ? 'transparent' : review.avatarColor }}
        >
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.textContent = review.initials;
              }}
            />
          ) : (
            review.initials
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-poppins font-semibold text-sm text-[#262626] truncate">
              {review.name}
            </span>
            {review.badge && (
              <span className="text-[10px] bg-[#E8F6FC] text-[#0E9ED9] rounded-full px-2 py-0.5 font-poppins font-semibold">
                {review.badge}
              </span>
            )}
          </div>
          <p className="text-[11px] text-[#262626]/60 font-sans m-0">{review.reviewCount}</p>
        </div>
        <GoogleLogo />
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= review.rating} />)}
        </div>
        <span className="text-xs text-[#262626]/55 font-sans">{review.timeAgo}</span>
      </div>

      <p className="text-sm text-[#262626]/85 leading-relaxed font-sans flex-1 m-0">
        {displayText}
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="text-[#0E9ED9] font-poppins font-semibold text-xs pl-1 hover:underline"
          >
            {expanded ? 'Show less' : 'More'}
          </button>
        )}
      </p>
    </div>
  );
};

const GoogleReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const total = reviews.length;

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setActiveIndex(i);
    startAuto();
  };

  const prev = () => goTo((activeIndex - 1 + total) % total);
  const next = () => goTo((activeIndex + 1) % total);

  const visible = [
    (activeIndex - 1 + total) % total,
    activeIndex,
    (activeIndex + 1) % total,
  ];

  return (
    <section className="bg-[#F7F7F7] py-24 px-6 sm:px-10 lg:px-14 border-b border-[#CCCCCC]/70 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-poppins font-bold tracking-[0.22em] text-[#0E9ED9] uppercase mb-3">
            What Clients Say
          </p>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-5xl tracking-tight text-[#262626] mb-5">
            Google Reviews
          </h2>

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-2.5 shadow-sm border border-[#CCCCCC]/70">
            <GoogleLogo />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled />)}
            </div>
            <span className="font-poppins font-bold text-lg text-[#262626] tabular-nums">5.0</span>
            <span className="text-xs text-[#262626]/65 font-sans">Based on Google reviews</span>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {visible.map((reviewIdx, slot) => (
              <ReviewCard
                key={reviews[reviewIdx].id}
                review={reviews[reviewIdx]}
                isCenter={slot === 1}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#0E9ED9] text-[#262626] hover:text-white border border-[#CCCCCC] hover:border-transparent flex items-center justify-center transition-colors shadow-sm"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    i === activeIndex ? 'w-7 bg-[#0E9ED9]' : 'w-2 bg-[#CCCCCC]'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#0E9ED9] text-[#262626] hover:text-white border border-[#CCCCCC] hover:border-transparent flex items-center justify-center transition-colors shadow-sm"
            >
              ›
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=NextWave+360+Solutions&query_place_id=ChIJrR_5CcPZrDAR14ceVGgZZ68"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-poppins font-semibold text-[#262626]/70 hover:text-[#0E9ED9] transition-colors"
          >
            <GoogleLogo />
            <span>View all reviews on Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
