import React, {FC} from "react";
import styles from './Header.module.scss';
import classnames from 'classnames';

interface IHeader {
    title: string;
    children?: React.ReactNode | React.ReactChild;
    style?: string;
}

const Header: FC<IHeader> = ({ children, title, style }) => {
  return (
    <header className={classnames(styles.header, style)}>
      <h2 className={styles.headerTitle}>{title}</h2>
      {children}
    </header>
  );
};

export default Header;