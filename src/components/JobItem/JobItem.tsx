import React, { FC } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import styles from "./JobItem.module.scss";
import SvgLocation from "../../static/location.svg";
import SvgSaved from "../../static/saved.svg";
import SvgStar from "../../static/star.svg";

interface IJobProps {
  id: string;
  title: string;
  subtitle: string[];
  image: string[];
  address: string;
  createdDate: string;
}

const JobItem: FC<IJobProps> = ({
  id,
  title,
  subtitle,
  image,
  address,
  createdDate,
}) => {
  const dateJob = new Date(createdDate).toDateString();
  const onClickIcon = (event: React.MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLElement;
    target.classList.toggle(styles.filledIcon);
  };
  return (
    <li className={styles.card}>
      <div className={styles.content}>
        <img className={styles.image} src={image[0]} alt="avatar_img" />
        <div className={styles.wrapperText}>
          <Link to={`/${id}`}>
            <h2 className={classnames(styles.title, styles["title--hover"])}>
              {title}
            </h2>
          </Link>
          <h4 className={styles.subtitle}>
            {subtitle.map((item, index) =>
              subtitle.length > 1 ? (
                <span key={index}>{item} • </span>
              ) : (
                <span key={index}>{item}</span>
              )
            )}
          </h4>
          <div className={styles.wrapperAddress}>
            <img src={SvgLocation} alt="icon" />
            <h4 className={classnames(styles.subtitle, styles.address)}>
              {address}
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.rateContainer}>
        <img className={styles.svgStarIcon} src={SvgStar} alt="icon" />
        <img className={styles.svgStarIcon} src={SvgStar} alt="icon" />
        <img className={styles.svgStarIcon} src={SvgStar} alt="icon" />
        <img className={styles.svgStarIcon} src={SvgStar} alt="icon" />
        <img className={styles.svgStarIcon} src={SvgStar} alt="icon" />
      </div>
      <h4 className={classnames(styles.subtitle, styles.dateCard)}>
        Posted {dateJob}
      </h4>
      <img
        onClick={onClickIcon}
        id="save"
        className={styles.saveIcon}
        src={SvgSaved}
        alt="icon"
      />
    </li>
  );
};

export default JobItem;
