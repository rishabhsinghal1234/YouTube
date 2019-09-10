import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';
import SideBar from './Sidebar'
import VideoCategories from './VideoCategories';
import './index.css';


function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="DisplayItems">
                <div className="Sidebar"> <SideBar /></div>
                <div className="VideoCategories">
                    <div className="Videos"><VideoCategories /></div>
                    <div className="Videos"><VideoCategories /></div>
                    <div className="Videos"><VideoCategories /></div>
                </div>
            </div>
        </div>
    );
}


ReactDOM.render(<HomePage />, document.getElementById('root'));
