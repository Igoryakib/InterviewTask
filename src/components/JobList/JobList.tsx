import React, { FC } from "react";
import { IJobItem } from "../../types/interfaces/jobItem";
import styles from "./JobList.module.scss";

import JobItem from "../JobItem/JobItem";

interface IListProps {
  listJobs: IJobItem[];
}

const JobList: FC<IListProps> = ({ listJobs }) => {
  return (
    <ul className={styles.jobsList}>
      {listJobs?.map((item: IJobItem) => {
        return (
          <JobItem
            createdDate={item?.createdAt}
            key={item?.id}
            title={item?.title}
            id={item?.id}
            address={item?.address}
            subtitle={item?.employment_type}
            image={item?.pictures}
          />
        );
      })}
    </ul>
  );
};

export default JobList;
