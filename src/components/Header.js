import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../assets/images/avatar.png';

const Header = ({ pageTitle }) => {
    return (
        <div className="header">
            <div className="header__title">
                <span>{pageTitle}</span>
            </div>
            <div className="header__user-option">
                <div className="user-avatar">
                    <img src={avatar} alt="Avatar" />
                </div>
                <span><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>
        </div>
    );
}

export default Header;

