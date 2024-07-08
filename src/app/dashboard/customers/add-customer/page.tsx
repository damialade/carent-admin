import React, { Fragment } from "react";
import { Metadata } from "next";
import AddCustomer from ".";

export const metadata: Metadata = {
  title: "Add-Customer | Carent-Admin",
};

const AddCustomerPage = () => {
  return (
    <Fragment>
      <AddCustomer />
    </Fragment>
  );
};

export default AddCustomerPage;
