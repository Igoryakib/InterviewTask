import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useParams, useNavigate } from "react-router-dom";
import classnames from "classnames";
import styles from "./JobDetailsPage.module.scss";
import SvgSaved from "../../static/saved.svg";
import SvgShare from "../../static/share.svg";
import SvgArrow from '../../static/Arrow.svg';

// Utils & types
import { buttons } from "../../types/enums/button";
import { IJobItem } from "../../types/interfaces/jobItem/jobItem";
import { getDataArray } from "../../utils/fetchApi";

// Components
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import AdditionalInfoList from "../../components/AdditionalInfoList/AdditionalInfoList";
import QualityJobItem from "../../components/QualityJobItem/QualityJobItem";
import { quality } from "../../types/enums/quality";

const JobDetailsPage = () => {
  const [job, setJob] = useState<IJobItem>();
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();
  const navigate = useNavigate();
  const date = new Date(job?.createdAt as string).toDateString();
  const onClickReturnButton = () => {
    navigate(-1);
  };
  useEffect(() => {
    setLoading(true);
    getDataArray()
      .then((data) => {
        setJob(data.find((item) => item.id === params.id));
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.detailPage}>
      <section className={styles.sectionMainPart}>
        <Header title="Job Details">
          <div className={styles.wrapperAdditionalInfo}>
            <div className={styles.wrapperSubtitle}>
              <img src={SvgSaved} alt="icon" />
              <span className={styles.headerSubtitle}>Save to my list</span>
            </div>
            <div
              className={classnames(
                styles.wrapperSubtitle,
                styles.wrapperSubtitleShare
              )}
            >
              <img src={SvgShare} alt="icon" />
              <span className={styles.headerSubtitle}>Share</span>
            </div>
          </div>
        </Header>
        <Button type={buttons.BUTTON} text="apply now" />
        <div className={styles.wrapperSectionTitle}>
          <h2 className={styles.titleSection}>{job?.title}</h2>
          <div>
            <h4
              className={classnames(
                styles.titleSection,
                styles.titleSectionSalary
              )}
            >
              &#8364; {job?.salary}
            </h4>
            <h5
              className={classnames(
                styles.subtitleSection,
                styles.titleSectionAddress
              )}
            >
              {job?.address}
            </h5>
          </div>
        </div>
        <h4 className={styles.subtitleSection}>Posted {date}</h4>
        <p
          className={classnames(
            styles.subtitleSection,
            styles.descriptionSection
          )}
        >
          {job?.description}
        </p>
        <h4 className={classnames(styles.titleSection, styles.titleSectionJob)}>
          Responsibilities
        </h4>
        <p
          className={classnames(
            styles.subtitleSection,
            styles.descriptionSection
          )}
        >
          {job?.description}
        </p>
        <h4 className={classnames(styles.titleSection, styles.titleSectionJob)}>
          Compensation & Benefits:
        </h4>
        <h4
          className={classnames(styles.subtitleSection, styles.sectionListItem)}
        >
          Our physicians enjoy a wide range of benefits, including:
        </h4>
        <ul className={styles.sectionList}>
          {job?.benefits.map((item, index) => (
            <li
              key={index}
              className={classnames(
                styles.subtitleSection,
                styles.sectionListItem
              )}
            >
              {item}
            </li>
          ))}
        </ul>
        <Button type={buttons.BUTTON} text="apply now" />
        <Header style={styles.additionalHeader} title="Additional info" />
        <AdditionalInfoList title="Employment type">
          <ul className={styles.QualitiesJob}>
            {job?.employment_type.map((item, index) => (
              <QualityJobItem
                key={index}
                text={item}
                typeQuality={quality.BLUE}
              />
            ))}
          </ul>
        </AdditionalInfoList>
        <AdditionalInfoList title="Benefits" margin>
          <ul className={styles.QualitiesJob}>
            {job?.benefits.map((item, index) => (
              <QualityJobItem
                key={index}
                text={item}
                typeQuality={quality.YELLOW}
              />
            ))}
          </ul>
        </AdditionalInfoList>
        <Header style={styles.additionalHeader} title="Attached images" />
        <ul className={styles.additionalListImg}>
          {job?.pictures.map((item, index) => (
            <li key={index}>
              <img
                className={styles.additionalListImgItem}
                src={item}
                alt="image"
              />
            </li>
          ))}
        </ul>
        <button
          onClick={onClickReturnButton}
          className={styles.returnBtn}
          type="button"
        >
          <img src={SvgArrow} alt="Icon" />
          <span className={styles.returnBtnText}>return to job board</span>
        </button>
      </section>
    </main>
  );
};

export default JobDetailsPage;
