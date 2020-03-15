import React, { useState, useEffect } from "react";

//Item Images
import GrilledSteakNearSteakKnife from "../Resources/Images/grilled_steak_near_steak_knife.webp";
import OysterOnBowl from "../Resources/Images/oyster_on_bowl.webp";
import SushiDish from "../Resources/Images/sushi_dish.webp";
import BrownOctopusOnPlate from "../Resources/Images/brown_octopus_on_plate.webp";

window.navActive = true;

const MenuItemPreview = props => {
  const [modalWidth, setModalWidth] = useState();
  const [modalXTranslate, setModalXTranslate] = useState();
  const [menuItemCanBeRendered, setMenuItemCanBeRendered] = useState(false);

  useEffect(() => {
    var windowWidth = window.innerWidth;
    if (windowWidth > 700) {
      menuItemLargeMQ = false;
      menuItemSmallMQ = true;
      setModalWidth(50);
      setModalXTranslate(50);
    }

    if (windowWidth <= 700) {
      menuItemLargeMQ = true;
      menuItemSmallMQ = false;
      setModalWidth(80);
      setModalXTranslate(12);
    }
  }, []);

  useEffect(() => {
    if (menuItemCanBeRendered) showMenuItemInfo();
  }, [menuItemCanBeRendered]);

  useEffect(() => {
    if (menuItemCanBeRendered) {
      const renderModal = document.getElementById("render-modal");
      const container = document.querySelectorAll(".menu-item-container");
      container.forEach(contain => renderModal.removeChild(contain));
      // renderModal.removeChild(container);
      showMenuItemInfo();
    }
  }, [modalWidth, modalXTranslate]);

  window.addEventListener("resize", () => {
    // var currentWindowMaxWidth = window.matchMedia('(max-width: 700px)');
    // var currentWindowMinWidth = window.matchMedia('(min-width: 701px)');
    // if (currentWindowMaxWidth.matches) {
    //   setModalWidth(80);
    //   setModalXTranslate(15);
    // }

    // if (currentWindowMinWidth.matches) {
    //   setModalWidth(50);
    //   setModalXTranslate(50);
    // }
    // if (menuItemCanBeRendered) {
    //   if (currentWindowMaxWidth.matches) {
    //     const container = document.querySelector('.menu-item-container');
    //     container.style.width = '80%';
    //     container.style.transform = 'translate(15%, 10%)';
    //   }

    //   if (currentWindowMinWidth.matches) {
    //     const container = document.querySelector('.menu-item-container');
    //     container.style.width = '50%';
    //     container.style.transform = 'translate(50%, 10%)';
    //   }
    // }
    var windowWidth = window.innerWidth;
    if (windowWidth > 700) {
      if (menuItemLargeMQ === false) {
        menuItemLargeMQ = true;
        menuItemSmallMQ = false;
        setModalWidth(50);
        setModalXTranslate(50);
      }
    } else if (windowWidth <= 700) {
      if (menuItemSmallMQ === false) {
        menuItemLargeMQ = false;
        menuItemSmallMQ = true;
        setModalWidth(80);
        setModalXTranslate(12);
      }
    }
  });

  const item = props.item;
  const redColor = "#f34235";
  var itemImg = null;
  var menuItemSmallMQ = false;
  var menuItemLargeMQ = false;

  // Colors

  switch (item.imgSrc) {
    case "SushiDish":
      itemImg = SushiDish;
      break;
    case "GrilledSteakNearSteakKnife":
      itemImg = GrilledSteakNearSteakKnife;
      break;
    case "BrownOctopusOnPlate":
      itemImg = BrownOctopusOnPlate;
      break;
    case "OysterOnBowl":
      itemImg = OysterOnBowl;
      break;
    default:
      break;
  }

  const enableBlur = () => {
    const rootElement = document.getElementById("root");

    rootElement.style.filter = "blur(15px)";
    rootElement.blur();
    enableFocus();
  };

  const enableFocus = () => {
    const renderModal = document.getElementById("render-modal");
    renderModal.focus();
  };

  const showMenuItemInfo = () => {
    if (menuItemCanBeRendered) {
      enableBlur();
      const renderModal = document.getElementById("render-modal");
      const rootElement = document.getElementById("root");
      const container = document.createElement("div");
      const img = document.createElement("img");
      const exit = document.createElement("button");
      const exitNode = document.createElement("i");
      const modalBody = document.createElement("div");
      const price = document.createElement("div");
      const priceTextNode = document.createTextNode("$" + item.price);
      const imgContainer = document.createElement("div");

      renderModal.style.background = "none";
      rootElement.style.pointerEvents = "none";

      const renderModalChildNodes = renderModal.childNodes;
      if (renderModalChildNodes.length > 0) {
        renderModalChildNodes.forEach(child => {
          if (child.classList.contains("modal")) {
            renderModal.removeChild(child);
          }
        });
      }
      img.src = itemImg;
      img.style.width = "100%";
      img.style.height = "100%";
      imgContainer.style.height = "100%";
      imgContainer.appendChild(img);

      exit.style.color = redColor;
      exit.style.position = "absolute";
      exit.style.right = "0";
      exit.style.marginRight = "30px";
      exit.style.marginTop = "30px";
      exit.style.background = "none";
      exit.style.border = "none";

      exitNode.classList.add("fas");
      exitNode.classList.add("fa-window-close");
      exitNode.style.fontSize = "20px";

      exit.appendChild(exitNode);

      price.appendChild(priceTextNode);
      price.style.height = "auto";
      price.style.width = "75px";
      price.style.padding = "2px 5px";
      price.style.borderRadius = "5px";
      price.style.background = redColor;
      price.style.color = "#202124";
      price.style.marginTop = "10px";
      price.style.fontWeight = "bold";

      //Creating the body to hold the name, description and price
      modalBody.classList.add("modal-body");
      modalBody.style.backgroundColor = "#202124";
      modalBody.style.minHeight = "80%";

      //Create Name Element and adding the text node for the element
      const name = document.createElement("h6");
      const nameTextNode = document.createTextNode(item.name);
      name.appendChild(nameTextNode);
      name.style.color = redColor;
      name.style.fontSize = "20px";

      const textSpacer = document.createTextNode("\n");

      //Creating Description Element and adding the text node for the element
      const description = document.createElement("p");
      const descriptionTextNode = document.createTextNode(item.description);
      description.appendChild(descriptionTextNode);
      description.style.color = "white";
      description.style.fontWeight = "lighter";
      description.style.marginTop = "10px";

      //Container styling
      container.style.pointerEvents = "auto";
      container.style.width = `${modalWidth}%`;
      container.style.minWidth = `${modalWidth}%`;
      container.style.height = "50vh";
      container.style.zIndex = "8000";
      container.style.borderRadius = "20px";
      container.style.transform = `translate(${modalXTranslate}%, 10%)`;
      container.style.position = "fixed";
      container.classList.add("menu-item-container");

      //Adding the name, description, price and spacer to body
      modalBody.appendChild(name);
      modalBody.appendChild(textSpacer);
      modalBody.appendChild(description);
      modalBody.appendChild(price);

      //Adding the body to the container
      container.appendChild(exit);
      container.appendChild(imgContainer);
      container.appendChild(modalBody);

      const tester = document.createElement("div");
      tester.style.width = "80%";
      tester.style.height = "80vh";
      tester.style.background = "blue";

      renderModal.appendChild(container);

      exit.addEventListener("click", () => {
        setMenuItemCanBeRendered(false);
        renderModal.removeChild(container);
        // const navigationBar = document.querySelector('.navigation');
        // navigationBar.style.position = 'fixed';

        rootElement.style.filter = "blur(0)";
        rootElement.focus();

        rootElement.style.pointerEvents = "auto";
      });
    }
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
  // };

  return (
    <div
      className="d-flex mb-2"
      data-aos="fade-right"
      data-aos-offset="250"
      data-aos-duration="1000"
      data-aos-delay="100"
      onClick={() => {
        setMenuItemCanBeRendered(true);
        // showMenuScroll();
      }}
    >
      <div className="mr-4 img-container">
        <img src={itemImg} alt="" className="img-fluid" />
      </div>
      <div>
        <h6>{item.name}</h6>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemPreview;
