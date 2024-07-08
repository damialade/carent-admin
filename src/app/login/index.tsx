"use client";
import React, { Fragment, useState } from "react";
import { AppLogo } from "@/components/atoms/AppLogo";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const LoginIndex = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Fragment>
      <div className="bg-app-dark w-full h-screen">
        <div>
          <div className="flex flex-wrap items-center justify-center min-h-screen">
            <div className="flex-wrap items-center justify-center w-full max-w-sm">
              <form className="p-8 mx-2 mb-4 bg-dark-grey rounded shadow-lg">
                <div className="mb-7 flex items-center justify-center">
                  <AppLogo />
                </div>
                <div className="text-center space-y-4">
                  <h1 className="text-2xl font-semibold text-app-white">
                    Welcome to Carent!
                  </h1>
                  <p className="text-app-grey font-medium">
                    Login to your account
                  </p>
                  <hr className="h-[1px] bg-app-grey border-0" />
                </div>
                <div className="my-5 form-inputs">
                  <label
                    htmlFor={`userName`}
                    className="block mb-2 text-sm text-app-grey"
                  >
                    Enter your Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 leading-tight text-app-white  rounded shadow-lg bg-app-textGray focus:outline-none focus:shadow-outline"
                    placeholder="Username"
                  />
                </div>

                <div className="my-5 form-inputs">
                  <label
                    htmlFor={`password`}
                    className="block mb-2 text-sm text-app-grey"
                  >
                    Enter your Password
                  </label>
                  <div className="relative">
                    <div>
                      <input
                        type={open === false ? "password" : "text"}
                        className="!pr-14 w-full px-3 py-2  leading-tight text-app-white rounded shadow-lg bg-app-textGray  focus:outline-none focus:shadow-outline"
                        placeholder="Password"
                      />
                    </div>
                    <div className="absolute top-2 right-5">
                      {open === false ? (
                        <EyeFilled
                          onClick={() => setOpen(true)}
                          style={{ color: "#FFF" }}
                        />
                      ) : (
                        <EyeInvisibleFilled
                          onClick={() => setOpen(false)}
                          style={{ color: "#FFF" }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-7 max-w-[75%] m-auto ">
                  <button
                    type="button"
                    onClick={() => {
                      router.push("/dashboard");
                    }}
                    className="bg-btn-green text-lg font-semibold text-app-white w-full p-3 rounded-full flex items-center justify-center space-x-6 shadow-md"
                  >
                    <span>Login</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginIndex;
