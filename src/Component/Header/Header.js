import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><a href="/post">Home</a></li>
                <li><a href="/devloper">Devloper</a></li>
                <li><a href="/others">Others</a></li>
            </ul>
          </div>
    );
};

export default Header;