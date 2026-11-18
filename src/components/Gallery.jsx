'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeftIcon, ChevronRightIcon, CloseCircleIcon } from './Icons';

const galleryItems = [
  { file: '541466552_122171841014575062_8137509910886669250_n (1).jpg', alt: 'Luxury bridal and couture editorial photography lookbook' },
  { file: '541466552_122171841014575062_8137509910886669250_n.jpg', alt: 'SultanNur luxury couture visual campaign showcase' },
  { file: '541551974_122171840954575062_2235281211348506084_n.jpg', alt: 'Bridal apparel studio photography and styling session' },
  { file: '541787504_122171841086575062_8661667036642493150_n.jpg', alt: 'Premium retail apparel campaign artwork' },
  { file: '541922408_122171840888575062_8437285248725132489_n.jpg', alt: 'Lifestyle fashion brand shoot direction' },
  { file: '541930953_122171841194575062_6637031330136822258_n.jpg', alt: 'Commercial editorial portrait for fashion brand campaign' },
  { file: '541988968_122171840834575062_2892667730241817577_n.jpg', alt: 'Brand identity lookbook production still' },
  { file: '542592755_122171841164575062_279142242573360183_n (1).jpg', alt: 'Seasonal luxury retail campaign creative' },
  { file: '542592755_122171841164575062_279142242573360183_n.jpg', alt: 'Lamiara visual identity and campaign showcase' },
  { file: '542769701_122171840924575062_9052612660227910069_n.jpg', alt: 'Product styling and campaign art direction' },
  { file: '543009753_122171841122575062_3703718188412781750_n.jpg', alt: 'Healthcare and enterprise multi-channel digital media creative' },
  { file: '558495699_122168403578774370_7620820200303842434_n.jpg', alt: 'Live activation and hospitality brand launch moment' },
  { file: '558850552_122168403254774370_6894364014533199948_n.jpg', alt: 'On-ground event experience and brand staging' },
  { file: '558972079_122168403764774370_7508278579739724516_n.jpg', alt: 'Chattogram live promotional event engagement' },
  { file: '559019112_122168403926774370_4017430336640530408_n.jpg', alt: 'Experiential marketing team on location' },
  { file: '559298912_122168403992774370_6850477036087466367_n.jpg', alt: 'Venue branding and event execution capture' },
  { file: '559906192_122168403518774370_4792516952038564455_n.jpg', alt: 'Hospitality client activation highlights' },
  { file: '560276821_122168403956774370_3607506385082013561_n.jpg', alt: 'On-site event direction and brand coverage' },
  { file: '561271309_122168403212774370_4589583056711311080_n.jpg', alt: 'Audience interaction during integrated brand launch' },
  { file: '561678114_122168403974774370_7781320902166572024_n (1).jpg', alt: 'Live campaign production behind the scenes' },
  { file: '561678114_122168403974774370_7781320902166572024_n.jpg', alt: 'Outdoor brand activation setup and photography' },
  { file: '581476843_122179460156535187_4865785310003252656_n.jpg', alt: 'Commercial studio production and lighting rig' },
  { file: '588468447_122176869140774370_2632799570911795755_n.jpg', alt: 'Wild Lake experiential hospitality launch event' },
  { file: '614645764_34665478186384290_2977820631770794487_n.jpg', alt: 'Executive media and corporate communications showcase' },
  { file: '614875863_34665469616385147_5731470990571378684_n.jpg', alt: 'Next Wave agency team collaboration session' },
  { file: '615097308_34665476113051164_53822878776554161_n.jpg', alt: 'Creative planning and campaign review workshop' },
  { file: '615144837_34665477493051026_3045061054168619373_n.jpg', alt: 'Strategic communications and digital storytelling showcase' },
  { file: '615148244_34665474006384708_5787689022129149397_n.jpg', alt: 'Agency leadership and client briefing event' },
  { file: '615161911_34665478869717555_7903006225869394903_n.jpg', alt: 'Audio-visual filming and director setup' },
  { file: '615209019_34665470526385056_8498134415204786924_n.jpg', alt: 'Brand launch keynote and audience engagement' },
  { file: '615264851_34665474736384635_5142261676628827239_n.jpg', alt: 'Corporate activation signage and display build' },
  { file: '615281796_34665475463051229_2029043486508424266_n.jpg', alt: 'On-stage panel and brand presentation moment' },
  { file: '615335381_34665476823051093_3857522075986365356_n.jpg', alt: 'Public relations and stakeholder briefing session' },
  { file: '615369524_34665471849718257_8436563388864360644_n.jpg', alt: 'Integrated agency production crew in Chattogram' },
  { file: '615451565_34665473296384779_7980532659189417178_n.jpg', alt: 'Hospitality experience and launch photography' },
  { file: '615453967_34665471169718325_7345061234103047593_n.jpg', alt: 'Digital content filming and behind-the-scenes set' },
  { file: '615826165_34665472573051518_2660919689223964573_n.jpg', alt: 'Brand activation booth and visitor engagement' },
  { file: '615873264_34665479743050801_3179826120338874357_n.jpg', alt: 'Executive event coverage and media coordination' },
  { file: '617653807_122117253207077712_5424106809576746114_n.jpg', alt: 'Print, packaging, and visual identity deliverables' },
  { file: '682340198_122204911520774370_3814831196962444009_n.jpg', alt: 'Recent brand campaign showcase and stage visuals' },
  { file: '682491437_122204911526774370_3780728538221054434_n.jpg', alt: 'Commercial photography for retail launch' },
  { file: '682624133_122204911604774370_7356796850044520255_n.jpg', alt: 'Client partnership showcase and production highlight' },
  { file: '682960968_122204911586774370_5801994166012120936_n.jpg', alt: 'Full-spectrum creative campaign highlight in Chattogram' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeBtnRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const hadOpenModalRef = useRef(false);

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

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
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      hadOpenModalRef.current = true;
      const frame = requestAnimationFrame(() => closeBtnRef.current?.focus());
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedIndex(null);
        } else if (e.key === 'ArrowRight') {
          setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryItems.length));
        } else if (e.key === 'ArrowLeft') {
          setSelectedIndex((prev) =>
            prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length
          );
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else if (hadOpenModalRef.current) {
      lastTriggerRef.current?.focus();
    }
  }, [selectedIndex]);

  return (
    <section id="gallery" className="pt-36 pb-20 bg-[#F7F7F7] text-[#262626] min-h-screen border-b border-[#CCCCCC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 pb-8 border-b border-[#CCCCCC] gap-6">
          <h1 className="text-4xl md:text-6xl font-poppins font-semibold tracking-[-0.025em] text-[#262626]">
            Photo Gallery
          </h1>
          <p className="text-[#262626]/75 font-sans max-w-[44ch] text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            Behind-the-scenes moments, campaign launches, and the creative energy that drives Next Wave forward.
          </p>
        </div>

        {/* Gapless Multi-Column Natural-Aspect Masonry (mb-4 keeps top baseline flush across all columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryItems.map((item, index) => (
            <button
              type="button"
              key={item.file}
              className="block w-full mb-4 break-inside-avoid overflow-hidden bg-white border border-[#CCCCCC] hover:border-[#076C96] transition-colors duration-150 cursor-pointer text-left"
              onClick={(e) => {
                lastTriggerRef.current = e.currentTarget;
                setSelectedIndex(index);
              }}
              aria-label={`Enlarge ${item.alt}`}
            >
              <img
                src={`/Gallery/${item.file}`}
                alt={item.alt}
                className="w-full h-auto block hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#262626]/95 p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            ref={closeBtnRef}
            type="button"
            className="absolute top-4 right-4 md:top-8 md:right-8 w-11 h-11 flex items-center justify-center text-white bg-white/15 hover:bg-[#076C96] rounded-[2px] border border-white/25 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Close modal"
          >
            <CloseCircleIcon size={22} />
          </button>

          <button
            type="button"
            className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center text-white bg-white/15 hover:bg-[#076C96] rounded-[2px] border border-white/25 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
            }}
            aria-label="Previous image"
          >
            <ChevronLeftIcon size={22} />
          </button>

          <img
            src={`/Gallery/${selectedItem.file}`}
            alt={selectedItem.alt}
            className="max-w-full max-h-full object-contain border border-white/20"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center text-white bg-white/15 hover:bg-[#076C96] rounded-[2px] border border-white/25 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
            }}
            aria-label="Next image"
          >
            <ChevronRightIcon size={22} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
