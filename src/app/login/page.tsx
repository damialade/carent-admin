import React, { Fragment } from "react";
import { Metadata } from "next";
import LoginIndex from "./index";

export const metadata: Metadata = {
  title: "Login | Carent-Admin",
};

const Login = () => {
  return (
    <Fragment>
      <LoginIndex />
    </Fragment>
  );
};

export default Login;
