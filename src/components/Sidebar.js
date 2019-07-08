import React, { Component } from 'react';
import { faAngleRight, faAngleLeft, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.svg';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {

    state = {
        collapsed: false
    }

    collapse = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        const { collapsed } = this.state;
        const isCollapsed = collapsed ? ' sidebar--collapsed' : '';
        const toggleIcon = collapsed ? faAngleRight : faAngleLeft;
        
        return (
            <div className={'sidebar' + isCollapsed}>
                <div className="sidebar__header">
                    <div className="sidebar__logo">
                        <img src={logo} alt="HostGatos" />
                    </div>
                    <div className="sidebar__collapse" onClick={this.collapse}>
                        <FontAwesomeIcon icon={toggleIcon} />
                    </div>
                </div>
                <ul className="sidebar__nav">
                    <SidebarItem name="Breeds" icon={faPaw} to="/" showTitle={!collapsed} />
                    <SidebarItem name="Feedback" icon={faCommentAlt} to="/feedback" showTitle={!collapsed} />
                </ul>
            </div>
        );
    }
}

export default Sidebar;