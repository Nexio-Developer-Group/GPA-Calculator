import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const NavigationButton = ({ onClick }) => {
  return (
    <button className="btn btn-outline-dark mb-3" onClick={onClick}>
      <BsArrowLeft /> Back
    </button>
  );
};

export default NavigationButton;
