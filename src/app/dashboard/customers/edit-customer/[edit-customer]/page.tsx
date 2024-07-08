import React, { Fragment } from "react";
import { Metadata } from "next";
import EditCustomer from ".";

export const metadata: Metadata = {
  title: "Edit-Customer | Carent-Admin",
};

const EditCustomerPage = () => {
  return (
    <Fragment>
      <EditCustomer />
    </Fragment>
  );
};

export default EditCustomerPage;
