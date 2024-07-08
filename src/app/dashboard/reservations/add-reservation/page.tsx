import React, { Fragment } from "react";
import { Metadata } from "next";
import AddReservation from ".";

export const metadata: Metadata = {
  title: "Create-Reservation | Carent-Admin",
};

const AddVehiclePage = () => {
  return (
    <Fragment>
      <AddReservation />
    </Fragment>
  );
};

export default AddVehiclePage;
