import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                <Link to="/">Fintek.</Link>
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link to="/">Home</Link>
                </li>
                <li className='p-4 '>
                    <Link to="/analytics">Company</Link>
                </li>
                <li className='p-4'>
                    <Link to="/cards">Resources</Link>
                </li>
                <li className='p-4'>
                    <Link to="/analytics">About</Link>
                </li>
                <li className='p-4'>
                    <Link to="/newsletter">Contact</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/" onClick={closeNav}>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/analytics" onClick={closeNav}>Company</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/cards" onClick={closeNav}>Resources</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/analytics" onClick={closeNav}>About</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/newsletter" onClick={closeNav}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
