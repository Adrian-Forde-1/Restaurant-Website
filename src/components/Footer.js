import React from 'react';

const Footer = () => {
  return (
    // Footer
    <footer
      id='contact'
      className='d-flex flex-column align-items-center contact'
    >
      <h3 className='text-center pt-3'>Contact</h3>
      <div className='container mt-2 mb-4'>
        <div className='d-flex justify-content-around'>
          <i className='fab fa-facebook-f red-color'></i>
          <i className='fab fa-twitter red-color'></i>
          <i className='fab fa-instagram red-color'></i>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-start artist'>
        <div>
          Recipe Icon made by
          <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
            Freepik
          </a>
          from
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
        <div>
          Timer Icon made by
          <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
            Freepik
          </a>
          from
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
        <div>
          Fruits and Vegitable Icon made by
          <a
            href='https://www.flaticon.com/authors/nhor-phai'
            title='Nhor Phai'
          >
            Nhor Phai
          </a>
          from
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
