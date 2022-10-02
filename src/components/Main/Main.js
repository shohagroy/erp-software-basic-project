import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';



const Main = () => {

    return (
        <div>
            <div className='bg-red-400'>
                <Header/>
            </div>
            <div className='bg-lime-300 h-[80vh]'>
                <Outlet/>
            </div>
            <div className='bg-black text-white h-[10vh]'>
                <Footer/>
            </div>
        </div>
    );
};

export default Main;