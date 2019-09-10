import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItems';

function Sidebar(props) {
    return (
        <div className="Sidebar">
            <div className="sidebarItems">
                <SidebarItem />
            </div>
        </div>
    );
}

export default Sidebar;