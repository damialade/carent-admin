import React, { Fragment } from "react";
import { Metadata } from "next";
import ReservationDetailsPage from ".";

export const metadata: Metadata = {
  title: "Reservation-Details | Carent-Admin",
};

const ReservationDPage = () => {
  return (
    <Fragment>
      <ReservationDetailsPage />
    </Fragment>
  );
};

export default ReservationDPage;
