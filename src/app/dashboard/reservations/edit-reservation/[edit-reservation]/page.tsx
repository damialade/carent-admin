import React, { Fragment } from "react";
import { Metadata } from "next";
import EditReservation from ".";

export const metadata: Metadata = {
  title: "Edit-Reservation | Carent-Admin",
};

const ReservationEDPage = () => {
  return (
    <Fragment>
      <EditReservation />
    </Fragment>
  );
};

export default ReservationEDPage;
