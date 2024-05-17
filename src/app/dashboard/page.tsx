import React, { Fragment } from "react";
import { Metadata } from "next";
import DBHome from "./index";

export const metadata: Metadata = {
  title: "Dashboard | Carent-Admin",
};

const Home = () => {
  return (
    <Fragment>
      <DBHome />
    </Fragment>
  );
};

export default Home;
