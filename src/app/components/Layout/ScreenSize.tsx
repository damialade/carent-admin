import React from "react";
import { AppLogo } from "../atoms/AppLogo";
import { MIN_SCREEN } from "@/utils/constants";

const ScreenSize = ({ children }: any) => {
  return (
    <div className="">
      <div className="res-md:hidden flex flex-col space-y-2 justify-center items-center h-screen">
        <AppLogo />
        <h2 className="text-center p-2 leading-loose ">
          This app only supports screen sizes greater than or equal to{" "}
          {MIN_SCREEN}
          px.
        </h2>
      </div>
      <div className="res-sm:hidden res-md:block">{children}</div>
    </div>
  );
};

export default ScreenSize;
