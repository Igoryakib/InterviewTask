import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./JobDetailsPage.module.scss";
import { IJobItem } from "../../types/interfaces/jobItem/jobItem";
import { getDataArray } from "../../utils/fetchApi";
import SvgSaved from '../../static/saved.svg';
import SvgShare from '../../static/share.svg';
import classnames from 'classnames';

const JobDetailsPage = () => {
  const [job, setJob] = useState<IJobItem>();
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();
  const date = new Date(job?.createdAt as string).toDateString();
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
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>Job Details</h2>
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
        </header>
        <button type="button" className={styles.headerButton}>
          apply now
        </button>
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
        <h4></h4>
      </section>
    </main>
  );
};

export default JobDetailsPage;
