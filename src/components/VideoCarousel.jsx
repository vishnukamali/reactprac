import React, { useState } from "react";
import "./VideoCarousel.css";

const VideoCarousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setDirection("next");
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("prev");
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-content">
          {videos.map((video, index) => {
            const isCurrent = index === currentIndex;
            const isPrevious = index === currentIndex - 1;
            const isNext = index === currentIndex + 1;

            // Determine the appropriate animation classes
            let classNames = "carousel-item";
            if (isCurrent) classNames += " current";
            else if (isNext && direction === "next") classNames += " enter-right";
            else if (isPrevious && direction === "prev") classNames += " enter-left";
            else if (isCurrent && direction === "next") classNames += " exit-left";
            else if (isCurrent && direction === "prev") classNames += " exit-right";

            // Define transform style dynamically based on item position
            const transformStyle = isCurrent
              ? "translateZ(0px) rotateY(0deg)"
              : isNext
              ? "translateZ(-200px) rotateY(15deg)"
              : isPrevious
              ? "translateZ(-200px) rotateY(-15deg)"
              : "translateZ(-200px)";

            return (
              <div
                key={index}
                className={classNames}
                style={{
                  transform: transformStyle,
                  opacity: isCurrent ? 1 : 0.5,
                }}
              >
                {isCurrent && (
                  <>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      height={600}
                      width={1070}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className={`video-title-bar ${classNames.replace("carousel-item", "")}`}>
                      {video.title}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="carousel-button left"
        >
          <img src="/images/arrow-left.svg" alt="Left arrow" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === videos.length - 1}
          className="carousel-button right"
        >
          <img src="/images/arrow-right.svg" alt="Right arrow" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
