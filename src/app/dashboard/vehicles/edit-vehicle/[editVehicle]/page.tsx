import React, { Fragment } from "react";
import { Metadata } from "next";
import EditVehicle from ".";

export const metadata: Metadata = {
  title: "Edit-Vehicle | Carent-Admin",
};

const VehicleEDPage = () => {
  return (
    <Fragment>
      <EditVehicle />
    </Fragment>
  );
};

export default VehicleEDPage;
