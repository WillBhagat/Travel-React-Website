import React from "react";
import "./Button.cs";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn-outline"];

export const Button = ({
  children,
  type,
  onClick,
  buttonClass,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
};
