import React, { Fragment } from "react";
import { Metadata } from "next";
import CustomerDetailsPage from ".";

export const metadata: Metadata = {
  title: "Customer-Details | Carent-Admin",
};

const VehicleDPage = () => {
  return (
    <Fragment>
      <CustomerDetailsPage />
    </Fragment>
  );
};

export default VehicleDPage;
