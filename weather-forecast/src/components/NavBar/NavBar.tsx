import React from 'react';
import './NavBar.scss';

export default function () {
  return (
    <>
        <div className="filter" />
        <div className="nav-bar">
            <div className="logo section">
                <img className="apple" src={require("../../resources/images/apple.png")} />
            </div>
    
            <div className="finder section">
                Finder
            </div>
    
            <div className="file section">
                File
            </div>
    
            <div className="edit section">
                Edit
            </div>
    
            <div className="view section">
                View
            </div>
            <div className="go section">
                Go
            </div>
    
            <div className="windows section">
                Window
            </div>
    
            <div className="help section">
                Help
            </div>
        </div>
    </>
  );
}
