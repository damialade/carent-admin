import React, { Fragment } from "react";
import { Metadata } from "next";
import VehicleDetailsPage from ".";

export const metadata: Metadata = {
  title: "Vehicle-Details | Carent-Admin",
};

const VehicleDPage = () => {
  return (
    <Fragment>
      <VehicleDetailsPage />
    </Fragment>
  );
};

export default VehicleDPage;
