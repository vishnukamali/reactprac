import React, { useState } from 'react';
import './Artists.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const photos = [
  { 
    id: 1, 
    src: '/images/artist1.png',
    title:'GELO',
    description: 'Gelo is known to make waves with his viral dance moves and visual charm. Born to perform, he is part of a major dance crew, and is set to make his acting debut in an upcoming series “The Four Bad Boys & Me.” Outside of performing, Gelo is also passionate about cooking.' },

  { 
    id: 2, 
    src: '/images/artist2.png',
    title:'NATE',
    description: 'Determined and overflowing with energy, Nate gets the vibes going. He’s loved dancing since he was a kid in his hometown Chicago, joining various competitions and performances. Apart from busting moves, Nate loves working out and playing mobile and console games.' },
  { 
    id: 3, 
    src: '/images/artist3.png',
    title:'AKIRA', 
    description: 'The Filipino-Japanese member has penned lyrics for BGYO songs such as “Kundiman” as well as “Mahal Na Kita,” soundtrack for a series he also stars in, “Bola-Bola.” A natural actor with a soothing voice to boot, Akira is reprising his role as lead Rovic in the stage musical rerun of “Tabing Ilog” this 2024.' },
  { 
    id: 4, 
    src: '/images/artist4.png', 
    title:'JL', 
    description: 'JL’s wit can bring the room to laughter whether on- or off-cam. But when it’s time to sing, his vocals can break a heart or two. He played lead as Rovic in the stage musical “Tabing Ilog.” JL likes to collect shoes and is on a mission to help his dad retire with ease. '},
  { 
    id: 5, 
    src: '/images/artist5.png', 
    title:'MIKKI',
    description: 'Having an artistic eye, Mikki has also had a hand in creative aspects of the group’s music. He even designed the calligraphic titles for “The Baddest” and “Patintero.” He has a strong sense of fashion and style, and is an avid fan of anime.' },
];

const defaultGroupImage = {
  src: '/images/about.png',
  title:'BGYO',
  description: 'BGYO, composed of Gelo, Akira, JL, Mikki, and Nate, have solidified their place as the next Filipino music export to watch with their undeniable talent, passion, and dedication to their craft. Their name stands for Becoming the change, Going further, You and I, Originally Filipino. Following their 2021 debut, they’ve established a loyal fanbase spanning domestic and international markets and have charted at #1 in territories such as Singapore, Hong Kong, Saudi Arabia, and UAE.'
};

const Artists = () => {
  const [currentImage, setCurrentImage] = useState(defaultGroupImage);
  const [profileImages, setProfileImages] = useState(photos);

  const handleImageClick = (photo) => {
    // Swap the current image with the clicked profile image
    const newGroupImage = { ...photo };
    const updatedProfileImages = profileImages.map((img) =>
      img.id === photo.id ? { ...currentImage, id: photo.id } : img
    );

    // Update the states to reflect the swap
    setCurrentImage(newGroupImage);
    setProfileImages(updatedProfileImages);
  };

  return (
    <div className="artists-container">
      {/* Left Column: Text Section */}
      <div className="artists-text">
        <h1>{currentImage.title}</h1>
        <p>{currentImage.description}</p>
        
        <div className="social-icons">
          Follow Us : 
          <a href="https://www.instagram.com/bgyo_ph" target='blank'><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/BGYO.PH?mibextid=LQQJ4d" target='blank'><i className="fab fa-facebook"></i></a>
          <a href="https://www.tiktok.com/@bgyo_ph?lang=en" target='blank'><i className="fab fa-tiktok"></i></a>
          <a href="https://x.com/bgyo_ph" target='blank'><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      {/* Center Column: Main Image */}
      <div className="artists-images">
        <img src={currentImage.src} alt="Current Display" className="group-image" />
      </div>

      {/* Right Column: Profile Images */}
      <div className="profile-images">
        {profileImages.map((photo, index) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={`Profile ${index + 1}`}
            className={`profile float${index + 1}`}
            onClick={() => handleImageClick(photo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Artists;
