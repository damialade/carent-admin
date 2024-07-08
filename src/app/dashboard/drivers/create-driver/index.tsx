"use client";
import React, { Fragment } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Link from "next/link";
import Back from "@/components/icons/Back";
import { useRouter } from "next/navigation";
import { Row, Col } from "antd";

const AddDriver = () => {
  const router = useRouter();
  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3 flex justify-between">
            <div>
              <Link
                href="/dashboard/drivers"
                className="flex items-center space-x-2 text-app-white hover:text-btn-green"
              >
                <Back />
                <p>Drivers</p>
              </Link>
              <p className="text-app-white text-3xl font-extrabold">
                New Driver
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <div
                onClick={() => {
                  router.push("/dashboard/drivers");
                }}
                className="bg-app-white flex items-center cursor-pointer space-x-6 text-btn-green border border-dotted rounded-xl py-2 px-10"
              >
                <p>Cancel</p>
              </div>
              <div
                onClick={() => {
                  router.push("/dashboard/drivers");
                }}
                className="bg-btn-green flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
              >
                <p>Save Driver</p>
              </div>
            </div>
          </div>
          {/* Step 1 */}
          <div className="bg-[#363636] max-w-[98%] m-auto my-4 p-4 rounded-xl">
            <div>
              <form>
                <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p className="text-app-dark text-xl font-extrabold pb-6">
                        Driver's Information
                      </p>
                    </div>
                    <p className="text-light-green text-md">Step 1 of 1</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="dName"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Driver's Name
                          </label>

                          <input
                            type="text"
                            id="dName"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="dLicenseNo"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            License No.
                          </label>

                          <input
                            type="text"
                            id="dLicenseNo"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="dPhoneNumber"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Phone Number
                          </label>

                          <input
                            type="text"
                            id="dPhoneNumber"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="issueDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Issue Date
                          </label>
                          <input
                            type="date"
                            id="issueDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="expDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Expiry Date
                          </label>

                          <input
                            type="date"
                            id="expDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="cImage"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Upload Driver Image
                          </label>

                          <input
                            id="cImage"
                            type="file"
                            multiple
                            className="block text-sm text-app-dark file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-light-green file:text-btn-green hover:file:bg-light-green"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="cImage"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Upload Driver License
                        </label>

                        <input
                          id="cImage"
                          type="file"
                          multiple
                          className="block text-sm text-app-dark file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-light-green file:text-btn-green hover:file:bg-light-green"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
            </div>
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default AddDriver;
