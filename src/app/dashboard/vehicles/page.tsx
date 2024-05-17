import React, { Fragment } from "react";
import { Metadata } from "next";
import Vehicle from "./index";

export const metadata: Metadata = {
  title: "Vehicles | Carent-Admin",
};

const VehicleHome = () => {
  return (
    <Fragment>
      <Vehicle />
    </Fragment>
  );
};

export default VehicleHome;
