import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Mohammad Faisal Alam',
    initials: 'MF',
    avatarColor: '#4285F4',
    avatar: '/Google Reviews/Mohammad Faisal Alam.png',
    rating: 5,
    timeAgo: '3 months ago',
    reviewCount: '1 review',
    text: 'NextWave 360 Solutions is a highly professional and reliable digital marketing agency. They offer strategic and well-organized services in Facebook Ads, social media management, branding, content marketing, and digital promotions. The team is friendly, communicative, and delivers work on time. The agency is led by Abdullah Al Kaisar Vaiya, who has over 10 years of experience in the marketing sector. His expertise ensures excellent services, strong support, and a professional working environment. In short, Kaisar Vaiya is a dynamic, all-round marketing specialist who consistently delivers great results for clients. For anyone looking to grow their business online, NextWave 360 Solutions is a trustworthy and highly recommended partner 🫶🫶🫶',
  },
  {
    id: 2,
    name: 'Saraf Sabiha Nila',
    initials: 'SN',
    avatarColor: '#E91E63',
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
    avatarColor: '#FF7043',
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
    avatarColor: '#9C27B0',
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
    avatarColor: '#00897B',
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
    avatarColor: '#1565C0',
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
    avatarColor: '#F57C00',
    avatar: '/Google Reviews/md gias uddin.png',
    badge: 'Local Guide',
    rating: 5,
    timeAgo: '4 months ago',
    reviewCount: '2 reviews · 21 photos',
    text: 'As a Local Guide, I\'ve explored many businesses across Chattogram — and NextWave 360 Solutions genuinely stands out. Their office has a modern, welcoming atmosphere, and the team is incredibly professional and passionate about their work. The quality of their digital marketing output is exceptional: creative, data-driven, and results-oriented. Whether it\'s branding, social media, or ad campaigns, they consistently deliver beyond expectations. A must-visit for any business serious about growing their online presence!',
  },
];

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#FBBC04' : '#e0e0e0'} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      className={`google-review-card ${isCenter ? 'center' : ''}`}
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: isCenter
          ? '0 8px 40px rgba(14,158,217,0.18), 0 2px 8px rgba(0,0,0,0.08)'
          : '0 4px 20px rgba(0,0,0,0.07)',
        border: isCenter ? '1.5px solid rgba(14,158,217,0.25)' : '1.5px solid #f0f0f0',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: isCenter ? 'scale(1.03)' : 'scale(0.97)',
        opacity: isCenter ? 1 : 0.75,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: review.avatar ? 'transparent' : review.avatarColor,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: '15px',
          flexShrink: 0, fontFamily: "'Poppins', sans-serif",
          letterSpacing: '0.5px', overflow: 'hidden',
          border: review.avatar ? '2px solid #f0f0f0' : 'none',
        }}>
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.textContent = review.initials; }}
            />
          ) : (
            review.initials
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 600,
              fontSize: '14px', color: '#1a1a2e', whiteSpace: 'nowrap',
            }}>{review.name}</span>
            {review.badge && (
              <span style={{
                fontSize: '10px', background: '#E8F5E9', color: '#2E7D32',
                borderRadius: '20px', padding: '1px 8px', fontWeight: 600,
                display: 'inline-flex', alignItems: 'center', gap: '3px',
              }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="#2E7D32"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Local Guide
              </span>
            )}
          </div>
          <p style={{ fontSize: '11px', color: '#9e9e9e', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            {review.reviewCount}
          </p>
        </div>
        <GoogleLogo />
      </div>

      {/* Stars + date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= review.rating} />)}
        </div>
        <span style={{ fontSize: '12px', color: '#bdbdbd', fontFamily: "'Inter', sans-serif" }}>{review.timeAgo}</span>
      </div>

      {/* Review text */}
      <p style={{
        fontSize: '13.5px', color: '#444', lineHeight: 1.65,
        margin: 0, fontFamily: "'Inter', sans-serif", flex: 1,
      }}>
        {displayText}
        {isLong && (
          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              background: 'none', border: 'none', color: '#0E9ED9',
              cursor: 'pointer', fontSize: '12px', fontWeight: 600,
              padding: '0 0 0 4px', fontFamily: "'Inter', sans-serif",
            }}
          >
            {expanded ? ' Show less' : ' More'}
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
      setActiveIndex(prev => (prev + 1) % total);
    }, 4000);
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

  // Show 3 cards: prev, active, next
  const getVisible = () => {
    const p = (activeIndex - 1 + total) % total;
    const n = (activeIndex + 1) % total;
    return [p, activeIndex, n];
  };
  const visible = getVisible();

  return (
    <section style={{
      background: 'linear-gradient(135deg, #f8fbff 0%, #f0f7ff 50%, #f8f0ff 100%)',
      padding: '100px 0',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontSize: '12px', letterSpacing: '0.2em', color: '#9e9e9e',
            fontFamily: "'Inter', sans-serif", textTransform: 'uppercase',
            marginBottom: '12px',
          }}>/ what clients say /</p>

          <h2 style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-1.5px',
            color: '#1a1a2e', marginBottom: '16px', lineHeight: 1.1,
          }}>
            Google Reviews
          </h2>

          {/* Overall rating badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: '#fff', borderRadius: '50px', padding: '10px 24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0',
          }}>
            <GoogleLogo />
            <div style={{ display: 'flex', gap: '3px' }}>
              {[1,2,3,4,5].map(i => <StarIcon key={i} filled />)}
            </div>
            <span style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 700,
              fontSize: '18px', color: '#1a1a2e',
            }}>5.0</span>
            <span style={{
              fontSize: '13px', color: '#9e9e9e',
              fontFamily: "'Inter', sans-serif",
            }}>Based on 7 Google reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
            alignItems: 'center',
          }}>
            {visible.map((reviewIdx, slot) => (
              <ReviewCard
                key={reviews[reviewIdx].id}
                review={reviews[reviewIdx]}
                isCenter={slot === 1}
              />
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous review"
            style={{
              position: 'absolute', top: '50%', left: '-24px',
              transform: 'translateY(-50%)',
              width: '44px', height: '44px', borderRadius: '50%',
              background: '#fff', border: '1.5px solid #e0e0e0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 10,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0E9ED9'; e.currentTarget.style.borderColor = '#0E9ED9'; e.currentTarget.querySelector('svg').style.stroke = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.querySelector('svg').style.stroke = '#555'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next review"
            style={{
              position: 'absolute', top: '50%', right: '-24px',
              transform: 'translateY(-50%)',
              width: '44px', height: '44px', borderRadius: '50%',
              background: '#fff', border: '1.5px solid #e0e0e0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 10,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0E9ED9'; e.currentTarget.style.borderColor = '#0E9ED9'; e.currentTarget.querySelector('svg').style.stroke = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.querySelector('svg').style.stroke = '#555'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: i === activeIndex ? '28px' : '8px',
                height: '8px', borderRadius: '4px',
                background: i === activeIndex ? '#0E9ED9' : '#d0d0d0',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Google attribution */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://maps.google.com/maps?q=NextWave+360+Solutions+Chattogram"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '13px', color: '#9e9e9e', textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#0E9ED9'}
            onMouseLeave={e => e.currentTarget.style.color = '#9e9e9e'}
          >
            <GoogleLogo />
            View all reviews on Google Maps
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;
