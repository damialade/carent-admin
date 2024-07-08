import React, { Fragment } from "react";
import { Metadata } from "next";
import Drivers from "./index";

export const metadata: Metadata = {
  title: "Drivers | Carent-Admin",
};

const DriverHome = () => {
  return (
    <Fragment>
      <Drivers />
    </Fragment>
  );
};

export default DriverHome;
