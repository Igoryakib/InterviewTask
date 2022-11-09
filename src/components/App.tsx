import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { path } from "../types/enums/paths";

const HomePage = lazy(
  () => import("../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const JobDetailsPage = lazy(
  () =>
    import(
      "../pages/JobDetailsPage/JobDetailPage" /* webpackChunkName: "detail-page" */
    )
);

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loader">
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
          </div>
        }
      >
        <Routes>
          <Route path={path.HOME} element={<HomePage />} />
          <Route path={path.DETAIL} element={<JobDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
