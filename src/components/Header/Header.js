import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav>
           <div className='flex justify-between items-center py-2 px-10'>
                <img className='text-3xl font-bold' src="" alt="ERP Inventory" />
                <div className=''>
                    <Link className='p-3 m-3 hover:text-orange-100'>Dashbord</Link>
                    <Link className='p-3 m-3 hover:text-orange-100'>Preferences</Link>
                    <Link className='p-3 m-3 hover:text-orange-100'>Profile</Link>
                    <Link className='p-3 m-3 hover:text-orange-100'>Help</Link>
                    <Link className='p-3 m-3 hover:text-orange-100'>Logout</Link>
                </div>
                
           </div>

           <div className='bg-black text-white py-4'>
                <Link className='bg-gray-50 text-black py-2 px-3 my-2 border-2 border-black' to='/Sales'>Sales</Link>
                <Link className='bg-gray-50 text-black py-2 px-3 my-2 border-2 border-black' to='/purchase'>Purchase</Link>
                <Link className='bg-gray-50 text-black py-2 px-3 my-2 border-2 border-black' to='/inventory'>Inventory</Link>
            </div>
            
            
        </nav>
    );
};

export default Header;