import React from 'react';
import { Link } from 'react-router-dom';

const ReservationNavbar = () => {
  return (
    <nav className='navbar navbar-expand-md d-inline-flex justify-content-center navigation w-100 fixed-top position-fixed p-0'>
      <Link to='/' className='navbar-brand text-white text-center Logo'>
        Exquis
      </Link>
    </nav>
  );
};

export default ReservationNavbar;
