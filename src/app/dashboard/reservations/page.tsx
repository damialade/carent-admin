import React, { Fragment } from "react";
import { Metadata } from "next";
import Reservations from "./index";

export const metadata: Metadata = {
  title: "Reservations | Carent-Admin",
};

const ReservationHome = () => {
  return (
    <Fragment>
      <Reservations />
    </Fragment>
  );
};

export default ReservationHome;
