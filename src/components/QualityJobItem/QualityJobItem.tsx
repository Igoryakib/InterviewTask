import React, { FC } from "react";
import classNames from "classnames";
import { quality } from "../../types/enums/quality";
import styles from "./QualityJobItem.module.scss";

interface IQualityProps {
  text: string;
  typeQuality: quality;
}

const QualityJobItem: FC<IQualityProps> = ({ text, typeQuality }) => {
  const activeClassName = (type: string) => {
    return classNames(styles.container, {
      [styles.blueContainer]: type === quality.BLUE,
      [styles.yellowContainer]: type === quality.YELLOW,
    });
  };
  return <li className={activeClassName(typeQuality)}>{text}</li>;
};

export default QualityJobItem;
