import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC= () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-gray-100 z-20'>
            <div className='container p-6 mx-auto lg:flex lg:justify-between lg:items-center'>
                <div className='flex items-center justify-between'>
                    <Link to="/">
                        <img className='w-[30%]' src="/logo.png" alt='' />
                    </Link>
                    <div className='flex lg:hidden'>
                        <button
                            onClick={toggleMenu}
                            type='button'
                            className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                            aria-label='toggle menu'
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' />
                                </svg>
                            ) : (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center gap-8`}>
                    <div className='lg:flex lg:space-x-8 text-center'>
                        <Link to="/home" className='block mt-4 text-gray-900 hover:text-gray-500 lg:mt-0'>
                            Home
                        </Link>
                        <Link to="/builder" className='block mt-4 text-gray-900 hover:text-gray-500 lg:mt-0'>
                            Page 2
                        </Link>
                        <Link to="/pricing" className='block mt-4 text-gray-900 hover:text-gray-500 lg:mt-0'>
                            Page 3
                        </Link>
                    </div>
                    <a className='px-2 py-2 mt-4 text-sm text-center text-white capitalize bg-[#f05e2b] rounded-full lg:mt-0 hover:bg-[#ca7657]  lg:w-auto hidden lg:block' href='#'>
                        NY
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
