import React from 'react';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = ({ label, rank }) => {
    const ranks = [1, 2, 3, 4, 5];
    return (
        <div className="stars">
            <span className="stars__label">{label}</span>
            <span className="stars__rank">
                {ranks.map(i => (
                    <FontAwesomeIcon icon={i <= rank ? starSolid : starRegular} className={i <= rank ? 'star-active' : ''} />
                ))}
            </span>
        </div>
    );
}

export default Stars;