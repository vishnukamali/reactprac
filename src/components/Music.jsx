import React from 'react';
import './Music.css';

const albums = [
    { title: 'Trash', image: '/images/alb1.png', link: 'https://orcd.co/bgyo-trash' },
    { title: 'Album 2', image: '/images/alb2.png', link: 'https://orcd.co/gigilbgyo' },
    { title: 'Bulalakaw', image: '/images/alb3.png', link: 'https://orcd.co/bulalakawbgyo' },
    { title: 'Patintero', image: '/images/alb4.png', link: 'https://orcd.co/patinterobgyo' },
    { title: 'Magnet', image: '/images/alb5.png', link: 'https://bgyo.bfan.link/Magnet' },
    { title: 'Tumitigil ang Mundo', image: '/images/alb6.png', link: 'https://bgyo.bfan.link/TumitigilAngMundo' },
    { title: 'BE:US', image: '/images/alb7.png', link: 'https://bgyo.bfan.link/BeUs' },
    { title: 'The Light', image: '/images/alb8.png', link: 'https://bgyo.bfan.link/TheLight' },
    { title: 'NST Street', image: '/images/alb9.png', link: 'https://orcd.co/highstreetost' },
    { title: 'What\'s Wrong with Secretary Kim', image: '/images/alb10.png', link: 'https://orcd.co/WWWSKPHOST' },
    ];

const Music = () => {
    return (
        <div className="music">
            <h1>MUSIC</h1>
            <div className="album-grid">
                {albums.map((album, index) => (
                    <div key={index} className="album-item">
                        <a href={album.link} target="_blank" rel="noopener noreferrer">
                            <img src={album.image} alt={album.title} className="album-image" />
                            <div className="overlay">
                                <p className="albtitle">{album.title}</p>
                                <button className="stream-button">Stream Now</button>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;
