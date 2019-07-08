import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarItem = ({ to, name, icon, showTitle = true }) => {
    return (
        <li className="sidebar-item">
            <Link to={to}>
                <span title={name} className="sidebar-item__icon"><FontAwesomeIcon icon={icon} /></span>
                {showTitle ? <span className="sidebar-item__title">{name}</span> : null}
            </Link>
        </li>
    );
}

export default SidebarItem;