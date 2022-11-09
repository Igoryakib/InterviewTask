import classNames from "classnames";
import React, { FC } from "react";
import styles from "./AdditionalInfoList.module.scss";

interface IListProps {
  title: string;
  children?: React.ReactNode | React.ReactChild;
  margin?: boolean;
}

const AdditionalInfoList: FC<IListProps> = ({ title, children, margin }) => {
  return (
    <div
      className={
        margin
          ? classNames(styles.wrapperList, styles["wrapperList--margin"])
          : styles.wrapperList
      }
    >
      <h4 className={styles.subtitleSection}>{title}</h4>
      {children}
    </div>
  );
};

export default AdditionalInfoList;
