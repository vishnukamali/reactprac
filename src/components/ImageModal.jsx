import React, { useState, useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ images, onClose, initialViewMode = 'grid', initialIndex = 0 }) => {
  const [viewMode, setViewMode] = useState(initialViewMode); // "grid" or "slideshow"
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setViewMode(initialViewMode);
    setCurrentIndex(initialIndex);
  }, [initialViewMode, initialIndex]);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setViewMode('slideshow');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Gallery</h2>
          <div className="view-toggle-container">
            <button onClick={() => setViewMode('grid')} className={`view-toggle ${viewMode === 'grid' ? 'active' : ''}`}>Grid View</button>
            <button onClick={() => setViewMode('slideshow')} className={`view-toggle ${viewMode === 'slideshow' ? 'active' : ''}`}>Slideshow</button>
          </div>
          <button className="close-button" onClick={onClose}>Close X</button>
        </div>

        {viewMode === 'grid' ? (
          <div className="modal-gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="modal-gallery-item" onClick={() => handleImageClick(index)}>
                <img src={image.src} alt={image.alt} className="modal-gallery-image" />
              </div>
            ))}
          </div>
        ) : (
          <div className="modal-slideshow">
            <button onClick={handlePrev} className="arrow-button left-arrow"> <img src="/images/arrow-left.svg" alt="Left arrow" /></button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slideshow-image" />
            <button onClick={handleNext} className="arrow-button right-arrow"> <img src="/images/arrow-right.svg" alt="Right arrow" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
