import React from 'react';
import './Events.css';

const events = [
    {
        date: { month: 'Aug', day: '24' },
        title: '626 Night Market',
        location: 'Sta Anita Park - Arcadia, CA',
        link: 'https://www.626nightmarket.com/'  // Link for the first event
    },
    {
        date: { month: 'Sep', day: '01' },
        title: 'Fiesta Filipino (F2X The Legacy)',
        location: 'Calgary Olympic Plaza, Canada',
        link: 'https://www.facebook.com/FiestaFilipinoYYC?mibextid=cr9u03'  
    },
    {
        date: { month: 'Oct', day: '12' },
        title: 'FLP Festival',
        location: 'San Diego, CA',
        link: 'https://bgyo.abs-cbn.com/'  
    },
    {
        date: { month: 'Oct', day: '19' },
        title: 'Friendship Games',
        location: 'Fullerton, CA',
        link: 'https://bgyo.abs-cbn.com/'  
    }

];

const Events = () => {
    return (
        <div className="events-container">
            <h2 className="events-title">EVENTS</h2>
            <div className="events-list">
                {events.map((event, index) => (
                    <div key={index} className="event"> {/* Use key here instead of in event-item */}
                        

                        <div className="event-date">
                            <span className="event-month">{event.date.month}</span>
                            <span className="event-day">{event.date.day}</span>
                        </div>
                        <div className="event-item">
                        <div className="event-graybox"></div>
                            <div className="event-details">
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-location">{event.location}</p>
                            </div>
                            <div className="event-link">
                                <a href={event.link} className="details-link" target="_blank" rel="noopener noreferrer">
                                    Details &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
