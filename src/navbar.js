import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [nav, setNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Business', path: '/business' },
    { id: 3, text: 'Entertainment', path: '/entertainment' },
    { id: 4, text: 'Health', path: '/health' },
    { id: 5, text: 'Science', path: '/science' },
    { id: 6, text: 'Sports', path: '/sports' },
    { id: 7, text: 'Technology', path: '/technology' }
  ];

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 text-black'>
        <NavLink to='/'><h1 className='text-3xl font-bold text-black p-6'>NewsNow</h1></NavLink>

        <input
          type='search'
          className='relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
          value={searchQuery}
          onChange={handleSearch}
          placeholder='Search'
          aria-label='Search'
          aria-describedby='button-addon2'
        />

        <span className='input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200' id='basic-addon2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
            <path fillRule='evenodd' d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z' clipRule='evenodd' />
          </svg>
        </span>

        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black ${location.pathname === item.path ? 'underline' : ''}`}
            >
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-black m-4'>News</h1>

        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 ${location.pathname === item.path ? 'underline' : ''}`}
          >
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
