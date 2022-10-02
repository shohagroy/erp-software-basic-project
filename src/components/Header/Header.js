import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/sales'>Sales</Link>
            <Link to='/purchase'>Purchase</Link>
            <Link to='/itemInventory'>Item Management</Link>
        </div>
    );
};

export default Header;