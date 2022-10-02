import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center p-3 px-10 bg-blue-500 text-white'>
            <img className='text-3xl font-bold' src="" alt="ERP Application" />
            <menu>

                <a href="">Home</a>
                <a href="">Sales</a>
                <a href="">Purchase</a>
            </menu>
           
        </nav>
    );
};

export default Header;