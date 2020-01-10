import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NutsAndIngredients from '../Resources/Images/Nuts_and_Ingredients.jpg';
import OystersOnCeramicPlate from '../Resources/Images/oysters_on_ceramic_plate.jpg';
import GrilledSteakNearSteakKnife from '../Resources/Images/grilled_steak_near_steak_knife.jpg';
import OysterOnBowl from '../Resources/Images/oyster_on_bowl.jpg';
import RecipePicture from '../Resources/Images/recipePicture.png';
import TimerIcon from '../Resources/Images/timerIcon.png';
import SushiDish from '../Resources/Images/sushi_dish.jpg';
import FruitsAndVegetables from '../Resources/Images/fruits-and-vegetables.png';
import BrownOctopusOnPlate from '../Resources/Images/brown_octopus_on_plate.jpg';
// import Modal from './Modal';

import uuid from 'uuid/v1';

import MenuItemPreview from './MenuItemPreview';
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lunchItems: [
        {
          name: 'Sushi',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '70',
          imgSrc: 'SushiDish',
          itemKey: 'SushiLunch'
        },
        {
          name: 'Steak',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '90',
          imgSrc: 'GrilledSteakNearSteakKnife',
          itemKey: 'SteakLunch'
        },
        {
          name: 'Octopus',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '50',
          imgSrc: 'BrownOctopusOnPlate',
          itemKey: 'BrownOctopusLunch'
        },
        {
          name: 'Oysters',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '65',
          imgSrc: 'OysterOnBowl',
          itemKey: 'OysterLunch'
        }
      ],

      dinnerItems: [
        {
          name: 'Sushi',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '70',
          imgSrc: 'SushiDish',
          itemKey: 'SushiDinner'
        },
        {
          name: 'Steak',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '90',
          imgSrc: 'GrilledSteakNearSteakKnife',
          itemKey: 'SteakDinner'
        },
        {
          name: 'Octopus',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '50',
          imgSrc: 'BrownOctopusOnPlate',
          itemKey: 'BrownOctopusDinner'
        },
        {
          name: 'Oysters',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Reprehenderit illo, numquam dolorem quisquam impeditassumenda dolorum deleniti earum qui at.',
          price: '65',
          imgSrc: 'OysterOnBowl',
          itemKey: 'OysterDinner'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <header id='home'>
          <div className='container-fluid p-0'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img
                    className='d-block w-100 img-fluid'
                    src={NutsAndIngredients}
                    alt='First slide'
                  />
                  <div className='carousel-caption d-md-block welcome-text'>
                    <h1>
                      Welcome to <span className='Logo'>Exquis</span>
                    </h1>
                    <p className='mb-4'>
                      Cuisine like you've never tasted before
                    </p>
                    <Link to='#' className='btn'>
                      Make Reservation
                    </Link>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100 img-fluid'
                    src={OystersOnCeramicPlate}
                    alt='Second slide'
                  />
                  <div className='carousel-caption d-md-block welcome-text'>
                    <h1>
                      <span className='Logo'>Quality</span> Comes First
                    </h1>
                    <p className='mb-4'>Made With Precision And Care</p>
                    <Link to='#' className='btn'>
                      Make Reservation
                    </Link>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100 img-fluid'
                    src={GrilledSteakNearSteakKnife}
                    alt='Third slide'
                  />
                  <div className='carousel-caption d-md-block welcome-text'>
                    <h1>
                      <span className='Logo'>Fresh</span> Ingredients
                    </h1>
                    <p className='mb-4'>Savory And Impactful Flavors</p>
                    <Link to='#' className='btn'>
                      Make Reservation
                    </Link>
                  </div>
                </div>
              </div>
              <a
                href='#carouselExampleIndicators'
                className='carousel-control-prev'
                role='button'
                data-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                href='#carouselExampleIndicators'
                className='carousel-control-next'
                role='button'
                data-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
        </header>
        {/* Daily Special */}
        <section id='menu'>
          <div className='container-fluid p-0'>
            <div className='jumbotron h-auto daily-special mb-0'>
              <h2 className='text-center mt-0 d-block'>Dialy Special</h2>
              <div className='row px-2 py-2 h-auto'>
                <div className='col-12 col-md-6 col-lg-3 daily-item'>
                  <img src={SushiDish} alt='' className='img-fluid img' />
                  <span className='badge badge-danger'>$70</span>
                </div>
                <div className='col-12 col-md-6 col-lg-3  daily-item'>
                  <img src={OysterOnBowl} alt='' className='img-fluid img' />
                  <span className='badge badge-danger'>$65</span>
                </div>
                <div className='col-12 col-md-6 col-lg-3  daily-item'>
                  <img
                    src={BrownOctopusOnPlate}
                    alt=''
                    className='img-fluid img'
                  />
                  <span className='badge badge-danger'>$50</span>
                </div>
                <div className='col-12 col-md-6 col-lg-3  daily-item'>
                  <img
                    src={GrilledSteakNearSteakKnife}
                    alt=''
                    className='img-fluid img'
                  />
                  <span className='badge badge-danger'>$90</span>
                </div>
              </div>
            </div>
          </div>
          <section className='menu-section d-flex justify-content-center'>
            <div className='container-fluid'>
              <div className='container'>
                <h2 className='text-center text-white pt-5 display-4 mb-5'>
                  Menu
                </h2>
                <div className=' mb-5'>
                  <h4>Lunch</h4>
                  <hr className='mb-5' />
                  <div className='lunch-items'>
                    {this.state.lunchItems.map(item => {
                      return <MenuItemPreview item={item} key={item.itemKey} />;
                    })}
                  </div>
                </div>
                <div className='mb-5'>
                  <h4>Dinner</h4>
                  <hr className='mb-5' />
                  <div className='dinner-items'>
                    {this.state.dinnerItems.map(item => {
                      return <MenuItemPreview item={item} key={item.itemKey} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Menu Items */}

        {/* About */}
        <section className='about' id='about'>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h2 className='text-center pt-5 mb-5'>About Us</h2>
            <div className='d-flex mb-5'>
              <div className='about-img-container'>
                <img src={FruitsAndVegetables} alt='' className='img-fluid' />
              </div>
              <div>
                <h4>
                  <span className='red-color'>Quality</span> Over Quantity
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  beatae.
                </p>
              </div>
            </div>

            <div className='d-flex mb-5'>
              <div className='about-img-container'>
                <img src={TimerIcon} alt='' className='img-fluid' />
              </div>
              <div>
                <h4>
                  <span className='red-color'>Quick</span> Service
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  beatae.
                </p>
              </div>
            </div>
            <div className='d-flex mb-5'>
              <div className='about-img-container'>
                <img src={RecipePicture} alt='' className='img-fluid' />
              </div>
              <div>
                <h4>
                  <span className='red-color'>Recipes</span> From Around The
                  Globe
                </h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  beatae.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
