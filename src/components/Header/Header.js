import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <img src="" alt="ERP Inventory" />

            <div>
                <Link to='/Sales'>Sales</Link>
                <Link to='/purchase'>Purchase</Link>
                <Link to='/inventory'>Inventory</Link>
            </div>
            
            
        </nav>
    );
};

export default Header;