import React, { useState, useEffect } from 'react';

const imageNames = [
  "541466552_122171841014575062_8137509910886669250_n (1).jpg",
  "541466552_122171841014575062_8137509910886669250_n.jpg",
  "541551974_122171840954575062_2235281211348506084_n.jpg",
  "541787504_122171841086575062_8661667036642493150_n.jpg",
  "541922408_122171840888575062_8437285248725132489_n.jpg",
  "541930953_122171841194575062_6637031330136822258_n.jpg",
  "541988968_122171840834575062_2892667730241817577_n.jpg",
  "542592755_122171841164575062_279142242573360183_n (1).jpg",
  "542592755_122171841164575062_279142242573360183_n.jpg",
  "542769701_122171840924575062_9052612660227910069_n.jpg",
  "543009753_122171841122575062_3703718188412781750_n.jpg",
  "558495699_122168403578774370_7620820200303842434_n.jpg",
  "558850552_122168403254774370_6894364014533199948_n.jpg",
  "558972079_122168403764774370_7508278579739724516_n.jpg",
  "559019112_122168403926774370_4017430336640530408_n.jpg",
  "559298912_122168403992774370_6850477036087466367_n.jpg",
  "559906192_122168403518774370_4792516952038564455_n.jpg",
  "560276821_122168403956774370_3607506385082013561_n.jpg",
  "561271309_122168403212774370_4589583056711311080_n.jpg",
  "561678114_122168403974774370_7781320902166572024_n (1).jpg",
  "561678114_122168403974774370_7781320902166572024_n.jpg",
  "581476843_122179460156535187_4865785310003252656_n.jpg",
  "588468447_122176869140774370_2632799570911795755_n.jpg",
  "614645764_34665478186384290_2977820631770794487_n.jpg",
  "614875863_34665469616385147_5731470990571378684_n.jpg",
  "615097308_34665476113051164_53822878776554161_n.jpg",
  "615144837_34665477493051026_3045061054168619373_n.jpg",
  "615148244_34665474006384708_5787689022129149397_n.jpg",
  "615161911_34665478869717555_7903006225869394903_n.jpg",
  "615209019_34665470526385056_8498134415204786924_n.jpg",
  "615264851_34665474736384635_5142261676628827239_n.jpg",
  "615281796_34665475463051229_2029043486508424266_n.jpg",
  "615335381_34665476823051093_3857522075986365356_n.jpg",
  "615369524_34665471849718257_8436563388864360644_n.jpg",
  "615451565_34665473296384779_7980532659189417178_n.jpg",
  "615453967_34665471169718325_7345061234103047593_n.jpg",
  "615826165_34665472573051518_2660919689223964573_n.jpg",
  "615873264_34665479743050801_3179826120338874357_n.jpg",
  "617653807_122117253207077712_5424106809576746114_n.jpg",
  "682340198_122204911520774370_3814831196962444009_n.jpg",
  "682491437_122204911526774370_3780728538221054434_n.jpg",
  "682624133_122204911604774370_7356796850044520255_n.jpg",
  "682960968_122204911586774370_5801994166012120936_n.jpg"
];

// Helper to shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffled = shuffleArray(imageNames);
    
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        shuffled.map((img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.src = `/Gallery/${img}`;
            image.onload = () => {
              const ratio = image.width / image.height;
              let orientation = 'square';
              if (ratio > 1.2) orientation = 'landscape';
              else if (ratio < 0.8) orientation = 'portrait';
              
              resolve({ src: img, orientation });
            };
            image.onerror = () => {
              resolve({ src: img, orientation: 'landscape' });
            };
          });
        })
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);


  return (
    <section id="gallery" className="py-20 bg-nw-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-4">
              Our Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-nw-black">
              Photo Gallery
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-500 max-w-sm text-right hidden md:block">
            Captured moments from our desert trips and scenic routes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px] lg:auto-rows-[300px] grid-flow-dense">
          {images.map((imgObj, index) => {
            let spanClasses = "col-span-1 row-span-1";
            
            if (imgObj.orientation === 'portrait') {
              spanClasses = "md:col-span-1 md:row-span-2";
            } else if (imgObj.orientation === 'landscape') {
              // occasionally make some landscapes extra large
              if (index % 7 === 0) spanClasses = "md:col-span-2 md:row-span-2";
              else spanClasses = "md:col-span-2 md:row-span-1";
            } else {
              spanClasses = "md:col-span-1 md:row-span-1";
            }

            return (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${spanClasses}`}
                onClick={() => setSelectedImage(imgObj.src)}
              >
                <img 
                  src={`/Gallery/${imgObj.src}`} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <img 
            src={`/Gallery/${selectedImage}`} 
            alt="Enlarged gallery view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
