import React, { useState } from 'react';
import './Gallery.css';
import ImageModal from './ImageModal';

const images = [
  { src: '/images/imageA.png', alt: 'Image 1' },
  { src: '/images/imageB.png', alt: 'Image 2' },
  { src: '/images/imageC.png', alt: 'Image 3' },
  { src: '/images/imageD.png', alt: 'Image 4' },
  { src: '/images/imageE.png', alt: 'Image 5' },
  { src: '/images/imageF.png', alt: 'Image 6' },
  { src: '/images/imageG.png', alt: 'Image 7' },
  { src: '/images/imageH.png', alt: 'Image 8' },
  { src: '/images/imageI.png', alt: 'Image 9' },
  { src: '/images/imageJ.png', alt: 'Image 10' },
  { src: '/images/imageK.png', alt: 'Image 11' },
  { src: '/images/imageL.png', alt: 'Image 12' },
  { src: '/images/imageM.png', alt: 'Image 13' },
  { src: '/images/imageN.png', alt: 'Image 14' },
  { src: '/images/imageO.png', alt: 'Image 15' },
  { src: '/images/imageP.png', alt: 'Image 16' },
  { src: '/images/imageQ.png', alt: 'Image 17' },
  { src: '/images/imageR.png', alt: 'Image 18' },
  { src: '/images/imageS.png', alt: 'Image 19' },
  { src: '/images/imageT.png', alt: 'Image 20' },
  { src: '/images/imageU.png', alt: 'Image 21' },
  { src: '/images/imageV.png', alt: 'Image 22' },
  { src: '/images/imageW.png', alt: 'Image 23' },
  { src: '/images/imageX.png', alt: 'Image 24' },
  { src: '/images/imageY.png', alt: 'Image 25' },
  { src: '/images/imageZ.png', alt: 'Image 26' },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalViewMode, setModalViewMode] = useState('grid');
  const [modalStartIndex, setModalStartIndex] = useState(0);

  const displayedImages = showAll ? images : images.slice(0, 5);

  const handleSeeMoreClick = () => {
    setModalViewMode('grid');
    setIsModalOpen(true);
  };

  const handleImageClick = (index) => {
    setModalViewMode('slideshow');
    setModalStartIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">GALLERY</h1>

      <div className="gallery-grid">
        {displayedImages.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="see-more">
          <button className="see-more-button" onClick={handleSeeMoreClick}>
            SEE MORE
            <img src="/images/arrow-right.svg" alt="arrow" />
          </button>
        </div>
      )}

      {isModalOpen && (
        <ImageModal
          images={images}
          onClose={handleCloseModal}
          initialViewMode={modalViewMode}
          initialIndex={modalStartIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
