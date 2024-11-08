import React, { Fragment } from "react";
import { Metadata } from "next";
import Scheduler from "./index";

export const metadata: Metadata = {
  title: "Scheduler | Carent-Admin",
};

const SchedulerHome = () => {
  return (
    <Fragment>
      <Scheduler />
    </Fragment>
  );
};

export default SchedulerHome;
