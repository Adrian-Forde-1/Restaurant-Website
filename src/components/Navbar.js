import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md d-inline-flex justify-content-center navigation w-100 fixed-top'>
      <Link
        to='/'
        className='navbar-brand text-white text-center pl-md-5 pl-sm-0 Logo'
      >
        Exquis
      </Link>

      <button
        className='navbar-toggler ml-auto'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
      >
        <i className='fas fa-hamburger red-color'></i>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav d-flex justify-content-between pr-5 ml-auto'>
          <li className='nav-item px-md-2 px-lg-4'>
            <a href='#home' className='nav-link text-white home-btn'>
              Home
            </a>
          </li>
          <li className='nav-item px-md-2 px-lg-4'>
            <a href='#menu' className='nav-link text-white menu-btn'>
              Menu
            </a>
          </li>
          <li className='nav-item px-md-2 px-lg-4'>
            <a href='#about' className='nav-link text-white about-btn'>
              About
            </a>
          </li>
          <li className='nav-item px-md-2 px-lg-4'>
            <a href='#contact' className='nav-link text-white contact-btn'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
