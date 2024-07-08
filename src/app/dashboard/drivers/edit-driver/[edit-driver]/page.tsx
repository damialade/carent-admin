import React, { Fragment } from "react";
import { Metadata } from "next";
import EditDriver from ".";
export const metadata: Metadata = {
  title: "Edit Driver | Carent-Admin",
};

const DriverHome = () => {
  return (
    <Fragment>
      <EditDriver />
    </Fragment>
  );
};

export default DriverHome;
