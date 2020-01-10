import React from 'react';

//Item Images
import GrilledSteakNearSteakKnife from '../Resources/Images/grilled_steak_near_steak_knife.jpg';
import OysterOnBowl from '../Resources/Images/oyster_on_bowl.jpg';
import SushiDish from '../Resources/Images/sushi_dish.jpg';
import BrownOctopusOnPlate from '../Resources/Images/brown_octopus_on_plate.jpg';

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
    rootElement.style.filter = 'blur(15px)';
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
    const modalBody = document.createElement('div');
    const price = document.createElement('div');
    const priceTextNode = document.createTextNode('$' + item.price);
    const imgContainer = document.createElement('div');

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
    img.src = itemImg;
    img.style.width = '100%';
    img.style.height = '100%';
    imgContainer.style.height = '100%';
    imgContainer.appendChild(img);

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
    price.style.marginTop = '10px';
    price.style.fontWeight = 'bold';

    //Creating the body to hold the name, description and price
    modalBody.classList.add('modal-body');
    modalBody.style.backgroundColor = '#202124';
    modalBody.style.height = '80%';

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
    description.style.marginTop = '10px';

    //Container styling
    container.style.pointerEvents = 'auto';
    container.style.width = '60%';
    container.style.minWidth = '60%';
    container.style.height = '50vh';
    container.style.zIndex = '100000';
    container.style.borderRadius = '20px';
    container.style.transform = 'translate(30%, 10%)';
    container.style.position = 'fixed';
    container.classList.add('menu-item-container');

    //Adding the name, description, price and spacer to body
    modalBody.appendChild(name);
    modalBody.appendChild(textSpacer);
    modalBody.appendChild(description);
    modalBody.appendChild(price);

    //Adding the body to the container
    container.appendChild(exit);
    container.appendChild(imgContainer);
    container.appendChild(modalBody);

    const tester = document.createElement('div');
    tester.style.width = '80%';
    tester.style.height = '80vh';
    tester.style.background = 'blue';

    renderModal.appendChild(container);
    console.log(renderModal);
    // console.log(rootElement);

    // renderModal.childNodes.forEach(child => {
    //   if (child == container) console.log('Match');
    //   else console.log('No Match');
    // });

    exit.addEventListener('click', () => {
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
