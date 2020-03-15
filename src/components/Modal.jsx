import React, { Component } from "react";

import GrilledSteakNearSteakKnife from "../Resources/Images/grilled_steak_near_steak_knife.webp";
import OysterOnBowl from "../Resources/Images/oyster_on_bowl.webp";
import SushiDish from "../Resources/Images/sushi_dish.webp";
import BrownOctopusOnPlate from "../Resources/Images/brown_octopus_on_plate.webp";

const handleClose = () => {
  document.querySelector(".modal-bg").classList.remove("active-modal");
  const modalRoot = document.getElementById("modal-root");
  const element = document.querySelector(".modal-element");

  modalRoot.removeChild(element);
};

class Modal extends Component {
  componentDidMount() {
    document.querySelector(".modal-bg").classList.add("active-modal");
  }
  render() {
    var itemImg = null;

    switch (this.props.item.imgSrc) {
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

    return (
      <div className="modal-bg">
        <div className="animated-modal">
          <img src={itemImg} alt="" className="modal-img img-fluid" />
          <div className="modal-info-section">
            <div className="modal-title">
              <h3>{this.props.item.name}</h3>
            </div>
            <div className="modal-description">
              <p className="muted">{this.props.item.description}</p>
            </div>
            <div className="modal-item-price mt-3">
              ${this.props.item.price}
            </div>
          </div>
          <span onClick={handleClose}>
            <i className="fas fa-window-close modal-close"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Modal;
