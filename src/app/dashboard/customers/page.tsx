import React, { Fragment } from "react";
import { Metadata } from "next";
import Customers from "./index";

export const metadata: Metadata = {
  title: "All Customers | Carent-Admin",
};

const CustomerHome = () => {
  return (
    <Fragment>
      <Customers />
    </Fragment>
  );
};

export default CustomerHome;
