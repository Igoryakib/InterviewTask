import React, { FC } from "react";
import { buttons } from "../../types/enums/button";
import styles from "./Button.module.scss";

interface IButtonProps {
  type: buttons;
  text: string;
}

const Button: FC<IButtonProps> = ({ type, text }) => {
  const onClickBtn = () => {
    alert('Applied job');
  };

  return (
    <button onClick={onClickBtn} className={styles.button} type={type}>
      {text}
    </button>
  );
};

export default Button;
