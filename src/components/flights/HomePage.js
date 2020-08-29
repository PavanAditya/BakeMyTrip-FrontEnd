import React from 'react';
import '../../styles/HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
            <div className="home-page">
                <div className="mobile-options-area"></div>
                <div className="top-div">
                    <div className="booking-area">
                        <div className="options-area"></div>
                    </div>
                </div>
                <div>
                    <Link to="flights">Flights</Link>
                </div>
            </div>
        </div>
    )
}
