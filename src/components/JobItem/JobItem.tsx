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
  return (
    <Link to={`/${id}`}>
      <li className={styles.card}>
        <div className={styles.content}>
          <img className={styles.image} src={image[0]} alt="avatar_img" />
          <div className={styles.wrapperText}>
            <h2 className={styles.title}>{title}</h2>
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
          <img src={SvgStar} alt="icon" />
          <img src={SvgStar} alt="icon" />
          <img src={SvgStar} alt="icon" />
          <img src={SvgStar} alt="icon" />
          <img src={SvgStar} alt="icon" />
        </div>
        <h4 className={classnames(styles.subtitle, styles.dateCard)}>
          Posted {dateJob}
        </h4>
        <img className={styles.saveIcon} src={SvgSaved} alt="icon" />
      </li>
    </Link>
  );
};

export default JobItem;
