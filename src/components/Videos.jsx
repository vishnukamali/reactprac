import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Videos.css';
import VideoCarousel from './VideoCarousel';

const videos = [
  'X0tc4yJLiJM', 
  '2EA-nTXU0Qc',
  'yvJGrFZ-vL0',
];

const videos1 = [
  { id: "X0tc4yJLiJM", title: "Bulalakaw | Performance Video" },
  { id: "2EA-nTXU0Qc", title: "Gigil | Performance Video" },
  { id: "yvJGrFZ-vL0", title: "Uuwian | Performance Video" },
];


const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <h2 className="heading">VIDEOS</h2>
      <VideoCarousel videos={videos1} />

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerVariants}
        className="testimonial-container"
      >
        {testimonials.map(({ id, text }) => (
          <motion.div
            key={id}
            className="testimonial"
            variants={staggerVariants}
          >
            {text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Videos;
