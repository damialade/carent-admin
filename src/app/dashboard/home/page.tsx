import React, { Fragment } from "react";
import { Metadata } from "next";
import HomeIndex from "./index";

export const metadata: Metadata = {
  title: "Dashboard | Carent-Admin",
};

const Home = () => {
  return (
    <Fragment>
      <HomeIndex />
    </Fragment>
  );
};

export default Home;
