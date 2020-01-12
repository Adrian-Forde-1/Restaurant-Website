import React from 'react';
import { Link } from 'react-router-dom';

window.navActive = true;

function Navbar() {
  var navAnimsActive = window.navActive;

  function navBarDarken() {
    var menuSection = document.querySelector('#menu');
    var navBar = document.querySelector('.navigation');
    var menuSectionPos = menuSection.getBoundingClientRect().top;
    // var screenPostion = window.innerHeight;

    if (menuSectionPos <= 50) {
      navBar.classList.add('nav-darken');
    } else if (menuSectionPos > 50) {
      navBar.classList.remove('nav-darken');
    }
  }

  function whichSection() {
    var homeSection = document.querySelector('#home');
    var menuSection = document.querySelector('#menu');
    var aboutSection = document.querySelector('#about');
    var contactSection = document.querySelector('#contact');
    var homeSectionPosBot = homeSection.getBoundingClientRect().bottom;
    var menuSectionPosTop = menuSection.getBoundingClientRect().top;
    var menuSectionPosBot = menuSection.getBoundingClientRect().bottom;
    var aboutSectionPosTop = aboutSection.getBoundingClientRect().top;
    var aboutSectionPosBot = aboutSection.getBoundingClientRect().bottom;
    var contactSectionPosTop = contactSection.getBoundingClientRect().top;
    // var contactSectionPosBot = contactSection.getBoundingClientRect().bottom;

    if (homeSectionPosBot > 0) {
      document.querySelector('.home-btn').classList.add('currently');
    } else {
      document.querySelector('.home-btn').classList.remove('currently');
    }

    if (menuSectionPosTop < 1 && menuSectionPosBot > 1) {
      document.querySelector('.menu-btn').classList.add('currently');
    } else {
      document.querySelector('.menu-btn').classList.remove('currently');
    }

    if (aboutSectionPosTop < 1 && aboutSectionPosBot > 1) {
      document.querySelector('.about-btn').classList.add('currently');
    } else {
      document.querySelector('.about-btn').classList.remove('currently');
    }

    if (contactSectionPosTop + 100 <= window.innerHeight) {
      document.querySelector('.contact-btn').classList.add('currently');
      document.querySelector('.about-btn').classList.remove('currently');
    } else {
      document.querySelector('.contact-btn').classList.remove('currently');
    }
  }

  window.addEventListener('scroll', () => {
    if (navAnimsActive === true) {
      navBarDarken();
      whichSection();
    }
  });

  // whichSection();
  return (
    <nav className='navbar navbar-expand-md d-inline-flex justify-content-center navigation w-100'>
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
        alt='Navigation Button'
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

export default Navbar;
