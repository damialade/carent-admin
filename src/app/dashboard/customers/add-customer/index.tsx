"use client";
import React, { Fragment } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Link from "next/link";
import Back from "@/components/icons/Back";
import { useRouter } from "next/navigation";
import { Row, Col } from "antd";
import { useForm, useFieldArray } from "react-hook-form";
import { customerInit } from "@/utils/schema";

const AddCustomer = () => {
  const { watch, control } = useForm({
    defaultValues: customerInit,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "customers",
  });
  const customers = watch("customers");

  const router = useRouter();
  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3 flex justify-between">
            <div>
              <Link
                href="/dashboard/customers"
                className="flex items-center space-x-2 text-app-white hover:text-btn-green"
              >
                <Back />
                <p>Customers</p>
              </Link>
              <p className="text-app-white text-3xl font-extrabold">
                New Customer(s)
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <div
                onClick={() => {
                  router.push("/dashboard/customers");
                }}
                className="bg-app-white flex items-center cursor-pointer space-x-6 text-btn-green border border-dotted rounded-xl py-2 px-10"
              >
                <p>Cancel</p>
              </div>
              <div
                onClick={() => {
                  router.push("/dashboard/customers");
                }}
                className="bg-btn-green flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
              >
                <p>Save Customer</p>
              </div>
            </div>
          </div>
          {/* Step 1 */}
          <div className="bg-[#363636] max-w-[98%] m-auto my-4 p-4 rounded-xl">
            <div>
              <form>
                {!customers?.length ? (
                  <p className="mb-3.5 text-xl font-bold text-app-white">
                    Please add at least one customer
                  </p>
                ) : null}
                {fields.map((field, index) => {
                  return (
                    <>
                      <button
                        onClick={() => remove(index)}
                        type="button"
                        className="text-light-green bg-transparent hover:bg-light-green hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center my-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                            <p className="text-app-dark text-xl font-extrabold">
                              Personal Information
                            </p>
                            <p className="text-light-green text-sm">
                              Please enter the customer info
                            </p>
                          </div>
                          <p className="text-light-green text-md">
                            Step 1 of 2
                          </p>
                        </div>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="flex space-x-8">
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="customerName"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Full Name
                                </label>

                                <input
                                  type="text"
                                  id="customerName"
                                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="email"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Email
                                </label>

                                <input
                                  type="text"
                                  id="email"
                                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex space-x-8">
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="dob"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Date of Birth
                                </label>

                                <input
                                  type="date"
                                  id="dob"
                                  className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="status"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Status
                                </label>

                                <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                                  <option value="" className="text-app-black">
                                    Status
                                  </option>
                                  <option
                                    value="active"
                                    className="text-app-black"
                                  >
                                    Active
                                  </option>
                                  <option
                                    value="inactive"
                                    className="text-app-black"
                                  >
                                    Inactive
                                  </option>
                                </select>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="flex space-x-8">
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="phone"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Phone Number
                                </label>

                                <input
                                  type="text"
                                  id="phone"
                                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="licenseNo"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  License No
                                </label>

                                <input
                                  type="text"
                                  id="licenseNo"
                                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex space-x-8">
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="emergency"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Emergency Contact
                                </label>

                                <input
                                  type="text"
                                  id="emergency"
                                  className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="eName"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  Emergency Contact Name
                                </label>

                                <input
                                  type="text"
                                  id="eName"
                                  className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative  pb-3.5">
                              <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-bold text-gray-900 "
                              >
                                Full Address
                              </label>

                              <input
                                type="text"
                                id="address"
                                className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5 ">
                              <label
                                htmlFor="cImage"
                                className="block mb-2 text-sm font-bold text-gray-900 "
                              >
                                Upload Customer Images
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

                      <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                            <p className="text-app-dark text-xl font-extrabold">
                              License & Insurance
                            </p>
                            <p className="text-light-green text-sm">
                              Please enter additional info
                            </p>
                          </div>
                          <p className="text-light-green text-md">
                            Step 2 of 2
                          </p>
                        </div>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative  pb-3.5">
                              <label
                                htmlFor="insuranceComp"
                                className="block mb-2 text-sm font-bold text-gray-900 "
                              >
                                Insurance Company
                              </label>

                              <input
                                type="text"
                                id="insuranceComp"
                                className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative  pb-3.5">
                              <label
                                htmlFor="policy"
                                className="block mb-2 text-sm font-bold text-gray-900 "
                              >
                                Insurance Policy
                              </label>

                              <input
                                type="text"
                                id="policy"
                                className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="flex space-x-8">
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="state"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  License Issue State
                                </label>

                                <input
                                  type="text"
                                  id="state"
                                  className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="country"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  License Issue Country
                                </label>

                                <input
                                  type="text"
                                  id="country"
                                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex space-x-8">
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="licenseStartDate"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  License Start Date
                                </label>

                                <input
                                  type="date"
                                  id="licenseStartDate"
                                  className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                              <div className="relative w-[50%] pb-3.5">
                                <label
                                  htmlFor="licenseExp"
                                  className="block mb-2 text-sm font-bold text-gray-900 "
                                >
                                  License Expiry Date
                                </label>

                                <input
                                  type="text"
                                  id="licenseExp"
                                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </>
                  );
                })}

                <button
                  type="button"
                  className="p-2 my-2 rounded-xl text-sm text-white bg-btn-green"
                  onClick={() => append({ ...customerInit.customers[0] })}
                >
                  Add Another Customer
                </button>
              </form>
            </div>
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default AddCustomer;
