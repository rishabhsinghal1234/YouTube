import React from 'react';
import './SidebarItems.css'
import 'bootstrap/dist/css/bootstrap.css';
function SidebarItem() {
    return (
        <div className="SidebarItem">
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-home fa-1.5x"></div>
                <div className="SidebarItemText">Home</div>
            </div>
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-fire fa-1.5x"></div>
                <div className="SidebarItemText">Trending</div>
            </div>
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-copy fa-1.5x"></div>
                <div className="SidebarItemText">Subscriptions</div>
            </div>
            <hr />
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-folder fa-1.5x"></div>
                <div className="SidebarItemText">Library</div>
            </div>
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-history fa-1.5x"></div>
                <div className="SidebarItemText">History</div>
            </div>
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-clock fa-1.5x"></div>
                <div className="SidebarItemText">Watch Later</div>
            </div>
            <div className="SingleSidebarItem">
                <div className="SidebarIcon fas fa-thumbs-up fa-1.5x"></div>
                <div className="SidebarItemText">Liked Videos</div>
            </div>
        </div>
    );
}

export default SidebarItem;

export var CustomLibrary = (props) => {
    return (
        <div className="SidebarItem">
            <i className="fas fa-home fa-1.5x">Home</i>
        </div>
    );
}

export var Channels = (props) => {
    return (
        <div className="SidebarItem">
            <i className="fas fa-home fa-1.5x">Home</i>
        </div>
    );
}