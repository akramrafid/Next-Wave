// Curated NextWave client & partner logos optically normalized to uniform visible artwork size
export const CLIENT_LOGOS = [
  { name: "Asset 1.png", alt: "Aspiring Global Alliance", size: { width: 115, height: 37 } },
  { name: "Asset 2.png", alt: "Aspiring Bangladesh", size: { width: 110, height: 38 } },
  { name: "Asset 3.png", alt: "OpportuNet Bangladesh", size: { width: 129, height: 33 } },
  { name: "Asset 4.png", alt: "Amazeballs", size: { width: 58, height: 58 } },
  { name: "Asset 5.png", alt: "Link Up", size: { width: 120, height: 35 } },
  { name: "Asset 6.png", alt: "Rotary Club of Chittagong South", size: { width: 133, height: 32 } },
  { name: "Asset 7.png", alt: "SultanNur Luxury Couture", size: { width: 97, height: 43 } },
  { name: "Asset 8.png", alt: "Al Zaytoon", size: { width: 85, height: 50 } },
  { name: "Asset 9.png", alt: "CAAS AOTS", size: { width: 94, height: 45 } },
  { name: "Asset 10.png", alt: "Pahar Samudra", size: { width: 120, height: 36 } },
  { name: "Asset 11.png", alt: "Dainik Purbatara", size: { width: 103, height: 41 } },
  { name: "Asset 14.png", alt: "Umar Education Group", size: { width: 100, height: 54 } },
  { name: "Asset 15.png", alt: "Hult Prize USTC", size: { width: 111, height: 43 } },
  { name: "Asset 16.png", alt: "Sunnah Hijamah Avenue", size: { width: 73, height: 73 } },
  { name: "Asset 17.png", alt: "Holistic Dental & Lifestyle Centre", size: { width: 58, height: 58 } },
  { name: "Asset 18.png", alt: "BCB", size: { width: 87, height: 87 } },
  { name: "Asset 19.png", alt: "Al Abrar Hajj Kafela", size: { width: 77, height: 77 } },
  { name: "Asset 20.png", alt: "Lamiara Jewellery & Accessories", size: { width: 58, height: 58 }, roundedBadge: true },
  { name: "Asset 21.png", alt: "Rays", size: { width: 69, height: 69 } },
  { name: "Asset 24.png", alt: "Eden Restaurant & Kids Zone", size: { width: 81, height: 81 } },
  { name: "Asset 26.png", alt: "Fresh Frozen Food", size: { width: 96, height: 96 } },
  { name: "Asset 27.png", alt: "Foodie Frame", size: { width: 59, height: 58 } },
  { name: "Asset 28.png", alt: "Mubasshira's Home Food", size: { width: 96, height: 96 } },
  { name: "Asset 30.png", alt: "Protibha", size: { width: 68, height: 68 } },
  { name: "Asset 31.png", alt: "Caravan", size: { width: 164, height: 63 } },
  { name: "Asset 32.png", alt: "Kidzee", size: { width: 100, height: 42 }, roundedBadge: true },
  { name: "Asset 33.png", alt: "Homey & More", size: { width: 122, height: 51 }, invertToLight: true },
  { name: "Asset 34.png", alt: "Wild Lake Eco Resort", size: { width: 101, height: 42 } },
  { name: "Asset 35.png", alt: "Sukun", size: { width: 100, height: 42 }, invertToLight: true },
  { name: "Asset 36.png", alt: "The Chocolate Chips by Tahameem", size: { width: 58, height: 58 } },
  { name: "Asset 37.png", alt: "Desh Craft", size: { width: 81, height: 81 } },
  { name: "Asset 38.png", alt: "Noor Hijab Boutique", size: { width: 82, height: 82 } },
  { name: "Asset 39.png", alt: "Bagdad", size: { width: 90, height: 47 } },
  { name: "Layer 5\u00A0Image.png", alt: "Maizbhandari Academy", size: { width: 142, height: 30 } },
];

// Founder's prior executive experience brands (strictly attributed separately)
export const FOUNDER_EXPERIENCE_LOGOS = [
  { name: "BSRM.png", alt: "BSRM — Building a Safer Nation", size: { width: 175, maxWidth: "100%", height: "auto" }, blendMultiply: true, spanTwoOnMobile: true },
  { name: "Asset 22.png", alt: "Bridal Muse by Tahsin", size: { width: 87, height: 55 } },
  { name: "Asset 23.png", alt: "Beacon Bangladesh", size: { width: 67, height: 73 } },
  { name: "Asset 25.png", alt: "Frozen Master", size: { width: 90, height: 67 } },
  { name: "Asset 21.png", alt: "Rays", size: { width: 69, height: 69 } },
];

export function clientLogoSrc(filename) {
  return `/Client's Logo/${encodeURIComponent(filename)}`;
}

export function clientLogoStyle(logo) {
  if (logo.invertToLight) {
    return {
      ...logo.size,
      filter: 'invert(1) hue-rotate(180deg) brightness(1.04) contrast(1.08)',
    };
  }
  return logo.size;
}
