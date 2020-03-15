import React from "react";
import ReactDOM from "react-dom";

//Item Images
import GrilledSteakNearSteakKnife from "../Resources/Images/grilled_steak_near_steak_knife.webp";
import OysterOnBowl from "../Resources/Images/oyster_on_bowl.webp";
import SushiDish from "../Resources/Images/sushi_dish.webp";
import BrownOctopusOnPlate from "../Resources/Images/brown_octopus_on_plate.webp";
import Modal from "./Modal";

window.navActive = true;

const MenuItemPreview = props => {
  var itemImg = null;

  switch (props.item.imgSrc) {
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

  const menuItemModal = event => {
    const modalRoot = document.getElementById("modal-root");
    const element = document.createElement("div");
    element.classList.add("modal-element");

    modalRoot.appendChild(element);

    ReactDOM.render(<Modal item={props.item} />, element);
  };

  return (
    <div
      className="d-flex mb-2"
      data-aos="fade-right"
      data-aos-offset="250"
      data-aos-duration="1000"
      data-aos-delay="100"
      onClick={menuItemModal}
    >
      <div className="mr-4 img-container">
        <img src={itemImg} alt="" className="img-fluid" />
      </div>
      <div>
        <h6>{props.item.name}</h6>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemPreview;
