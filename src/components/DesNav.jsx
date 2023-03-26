import React from 'react';
import { FaUser, FaShoppingCart, FaShoppingBag, FaHome, FaSearch } from 'react-icons/fa';

const DesNavbar = () => {
  const hendeldark = () =>{
    document.getElementById("mainElement").classList.toggle("dark")
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 dark:bg-gray-800  p-6 " id='nav-menus'>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <button onClick={hendeldark} className=" sm:block hidden mr-6  text-gray-300  hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
        </button>
        <FaShoppingBag className="text-3xl" />
        <span className="font-semibold text-xl tracking-tight ml-2">ADJ LTD</span>
      </div>

      <div className="mt-1 lg:mt-0 ml-3 mr-5">
          <div className="relative text-gray-300">
            <input type="search" name="search" placeholder="Search" className="bg-gray-500 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:bg-white focus:text-gray-900" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch className="text-gray-500" />
            </button>
            
          </div>
        </div>

      <div className="block lg:hidden">
        <button onClick={hendeldark} className=" sm:hidden  flex items-center px-3 py-2  text-gray-500  hover:text-white hover:border-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
        </button>
        
      </div>
   
      <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto sm:hidden ml-20">
        <div className="text-sm lg:flex-grow">

          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white ml-7">
            Shop <FaShoppingBag className="inline-block ml-1" />
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white ml-7">
            Home <FaHome className="inline-block ml-1" />
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white ml-7">
            Account <FaUser className="inline-block ml-1" />
          </a>
          
        </div>
        <div>
          <a href="#responsive-header" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
            Cart <FaShoppingCart className="inline-block ml-1" />
          </a>
        </div>
        <div className="mt-4 lg:mt-0 block sm:hidden">
          <div className="relative dark:bg-gray-400 text-gray-600">
            <input type="search" name="search" placeholder="Search" className="bg-gray-800  h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:bg-white focus:text-gray-900" />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch className="text-gray-500" />
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DesNavbar;
