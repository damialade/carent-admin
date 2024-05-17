import React, { Fragment } from "react";
import { Metadata } from "next";
import Planner from "./index";

export const metadata: Metadata = {
  title: "Daily-Planner | Carent-Admin",
};

const Home = () => {
  return (
    <Fragment>
      <Planner />
    </Fragment>
  );
};

export default Home;
