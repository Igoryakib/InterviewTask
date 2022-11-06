import React, { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./HomePage.module.scss";
import { IJobItem } from "../../types/interfaces/jobItem/jobItem";
import { getDataArray } from "../../utils/fetchApi";
import JobList from "../../components/JobList/JobList";

const HomePage = () => {
  const [jobs, setJobs] = useState<IJobItem[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getDataArray()
      .then((data) => setJobs(data))
      .catch((err) => {
        throw err;
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className={styles.homePage}>
      {loading ? (
          <MutatingDots
            height="100"
            width="100"
            color="#38415D"
            secondaryColor="#38415D"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
      ) : (
        <JobList listJobs={jobs as IJobItem[]} />
      )}
    </main>
  );
};

export default HomePage;
