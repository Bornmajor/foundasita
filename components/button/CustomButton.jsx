"use client";

import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./CustomButton.module.css";

const CustomButton = ({ textButton = "Button", variant = "primary", href= "#",style = null }) => {
  return (
    <Button className={[styles.button,style]} href={href} target="_blank"  >
      {textButton}
    </Button>
  );
};

export default CustomButton;
