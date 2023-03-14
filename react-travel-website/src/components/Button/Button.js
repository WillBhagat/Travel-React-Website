import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonClass,
  buttonSize,
  route,
}) => {
  const checkButtonClass = STYLES.includes(buttonClass)
    ? buttonClass
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={route} className="btn-mobile">
      <button
        className={`btn  ${checkButtonClass} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
