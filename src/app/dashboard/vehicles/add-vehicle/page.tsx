import React, { Fragment } from "react";
import { Metadata } from "next";
import AddVehicle from ".";

export const metadata: Metadata = {
  title: "Add-Vehicle | Carent-Admin",
};

const AddVehiclePage = () => {
  return (
    <Fragment>
      <AddVehicle />
    </Fragment>
  );
};

export default AddVehiclePage;
