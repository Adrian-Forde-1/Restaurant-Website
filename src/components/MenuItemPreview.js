import React from 'react';

//Item Images
import GrilledSteakNearSteakKnife from '../Resources/Images/grilled_steak_near_steak_knife.jpg';
import OysterOnBowl from '../Resources/Images/oyster_on_bowl.jpg';
import SushiDish from '../Resources/Images/sushi_dish.jpg';
import BrownOctopusOnPlate from '../Resources/Images/brown_octopus_on_plate.jpg';
import Modal from './Modal';

const MenuItemPreview = props => {
  const item = props.item;
  var itemImg = null;

  // Colors
  const redColor = '#f34235';

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

  const enableBlur = () => {
    console.log('Blur Called');
    const rootElement = document.getElementById('root');
    console.log(rootElement);
    rootElement.style.filter = 'blur(4px)';
    rootElement.blur();
    enableFocus();
  };

  const enableFocus = () => {
    console.log('Focus Called');
    const renderModal = document.getElementById('render-modal');
    renderModal.focus();
  };

  const showMenuItemInfo = () => {
    enableBlur();
    const renderModal = document.getElementById('render-modal');
    const rootElement = document.getElementById('root');
    const container = document.createElement('div');
    const img = document.createElement('img');
    const exit = document.createElement('button');
    const exitNode = document.createElement('i');
    const modalBoday = document.createElement('div');
    const price = document.createElement('div');
    const priceTextNode = document.createTextNode('$' + item.price);

    renderModal.style.background = 'none';
    rootElement.style.pointerEvents = 'none';

    const renderModalChildNodes = renderModal.childNodes;
    if (renderModalChildNodes.length > 0) {
      renderModalChildNodes.forEach(child => {
        if (child.classList.contains('modal')) {
          renderModal.removeChild(child);
        }
      });
    }
    container.style.pointerEvents = 'auto';
    img.src = itemImg;
    img.style.width = '100%';
    img.style.height = '70%';

    exit.style.color = redColor;
    exit.style.position = 'absolute';
    exit.style.right = '0';
    exit.style.marginRight = '30px';
    exit.style.marginTop = '30px';
    exit.style.background = 'none';
    exit.style.border = 'none';

    exitNode.classList.add('fas');
    exitNode.classList.add('fa-window-close');
    exitNode.style.fontSize = '20px';

    exit.appendChild(exitNode);

    price.appendChild(priceTextNode);
    price.style.height = 'auto';
    price.style.width = '75px';
    price.style.padding = '2px 5px';
    price.style.borderRadius = '5px';
    price.style.background = redColor;
    price.style.color = '#202124';
    price.style.fontWeight = 'bold';

    //Container styling
    container.style.width = '70%';

    //Creating the body to hold the name, description and price
    modalBoday.classList.add('modal-body');
    modalBoday.style.backgroundColor = '#202124';
    modalBoday.style.height = '100%';

    //Create Name Element and adding the text node for the element
    const name = document.createElement('h6');
    const nameTextNode = document.createTextNode(item.name);
    name.appendChild(nameTextNode);
    name.style.color = redColor;
    name.style.fontSize = '20px';

    const textSpacer = document.createTextNode('\n');

    //Creating Description Element and adding the text node for the element
    const description = document.createElement('p');
    const descriptionTextNode = document.createTextNode(item.description);
    description.appendChild(descriptionTextNode);
    description.style.color = 'white';
    description.style.fontWeight = 'lighter';

    //Adding the modal class to container
    container.classList.add('modal');
    container.style.zIndex = '10000';
    container.style.borderRadius = '20px';
    container.style.transform = 'translate(20%, 5%)';

    //Adding the name, description, price and spacer to body
    modalBoday.appendChild(name);
    modalBoday.appendChild(textSpacer);
    modalBoday.appendChild(description);
    modalBoday.appendChild(price);

    //Adding the body to the container
    container.appendChild(exit);
    container.appendChild(img);
    container.appendChild(modalBoday);
    console.log(container);

    renderModal.appendChild(container);

    exit.addEventListener('click', () => {
      console.log(renderModal);
      renderModal.removeChild(container);

      rootElement.style.filter = 'blur(0)';
      rootElement.focus();

      rootElement.style.pointerEvents = 'auto';
    });
  };

  // const showMenuScroll = () => {
  //   const renderModal = document.getElementById('render-modal');
  //   const scrollableMenu = document.createElement('div');

  //   //Menu Items
  //   const sushiItem = document.createElement('img');
  //   const steakItem = document.createElement('img');
  //   const octopusItem = document.createElement('img');
  //   const oysterItem = document.createElement('img');
  //   sushiItem.src = SushiDish;
  //   steakItem.src = GrilledSteakNearSteakKnife;
  //   octopusItem.src = BrownOctopusOnPlate;
  //   oysterItem.src = OysterOnBowl;

  //   scrollableMenu.style.height = '70vh';
  //   scrollableMenu.style.width = '10%';
  //   scrollableMenu.style.display = 'flex';
  //   scrollableMenu.style.flexDirection = 'column';
  //   scrollableMenu.style.alignItems = 'center';
  //   scrollableMenu.style.zIndex = '11000';

  //   scrollableMenu.appendChild(sushiItem);
  //   scrollableMenu.appendChild(steakItem);
  //   scrollableMenu.appendChild(octopusItem);
  //   scrollableMenu.appendChild(oysterItem);

  //   renderModal.appendChild(scrollableMenu);
  //   console.log(renderModal);
  // };

  return (
    <div
      className='d-flex mb-2 item-container'
      onClick={() => {
        showMenuItemInfo();
        // showMenuScroll();
      }}
    >
      <div className='mr-4 img-container'>
        <img src={itemImg} alt='' className='img-fluid' />
      </div>
      <div>
        <h6>{item.name}</h6>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemPreview;
