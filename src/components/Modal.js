import React from 'react';

import GrilledSteakNearSteakKnife from '../Resources/Images/grilled_steak_near_steak_knife.jpg';
import OysterOnBowl from '../Resources/Images/oyster_on_bowl.jpg';
import SushiDish from '../Resources/Images/sushi_dish.jpg';
import BrownOctopusOnPlate from '../Resources/Images/brown_octopus_on_plate.jpg';

const Modal = props => {
  console.log('modal called');
  const item = props.item;
  var itemImg = null;

  switch (item.imgSrc) {
    case 'SushiDish':
      itemImg = SushiDish;
      break;
    case 'GrilledSteakNearSteakKnife':
      itemImg = GrilledSteakNearSteakKnife;
      break;
    case 'BrownOctopusOnPlate':
      itemImg = BrownOctopusOnPlate;
      break;
    case 'OysterOnBowl':
      itemImg = OysterOnBowl;
      break;
    default:
      break;
  }

  return (
    <div className='modal'>
      <div className='modal-header'>
        <button className='close-button'>&times;</button>
        <img src={itemImg} alt='' />
      </div>
      <div className='modal-body'>
        {item.name} + "\n" + {item.description}
      </div>
    </div>
  );
};

export default Modal;
