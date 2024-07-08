import React, { Fragment } from "react";
import { Metadata } from "next";
import Reports from "./index";

export const metadata: Metadata = {
  title: "Reports | Carent-Admin",
};

const ReportHome = () => {
  return (
    <Fragment>
      <Reports />
    </Fragment>
  );
};

export default ReportHome;
