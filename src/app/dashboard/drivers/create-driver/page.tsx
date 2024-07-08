import React, { Fragment } from "react";
import { Metadata } from "next";
import AddDriver from ".";

export const metadata: Metadata = {
  title: "Add Driver | Carent-Admin",
};

const DriverHome = () => {
  return (
    <Fragment>
      <AddDriver />
    </Fragment>
  );
};

export default DriverHome;
