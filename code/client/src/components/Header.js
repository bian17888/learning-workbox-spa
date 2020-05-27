import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
    <header>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li className="profile-icon"><img src={"/images/icon/icon.svg"} alt="profile icon" /></li>
        </ul>
    </header>
    );
}

export default Header;