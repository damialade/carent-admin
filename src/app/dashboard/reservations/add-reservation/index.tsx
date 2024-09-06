"use client";
import React, { Fragment } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Link from "next/link";
import Back from "@/components/icons/Back";
import { useRouter } from "next/navigation";
import { Row, Col } from "antd";

const AddReservation = () => {
  const router = useRouter();
  const drivers = require("../../drivers/drivers.json");

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3 flex justify-between">
            <div>
              <Link
                href="/dashboard/reservations"
                className="flex items-center space-x-2 text-app-white hover:text-btn-green"
              >
                <Back />
                <p>Reservations</p>
              </Link>
              <p className="text-app-white text-3xl font-extrabold">
                New Reservation
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <div
                onClick={() => {
                  router.push("/dashboard/reservations");
                }}
                className="bg-app-white flex items-center cursor-pointer space-x-6 text-btn-green border border-dotted rounded-xl py-2 px-10"
              >
                <p>Cancel</p>
              </div>
              <div
                onClick={() => {
                  router.push("/dashboard/reservations");
                }}
                className="bg-btn-green flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
              >
                <p>Save Reservation</p>
              </div>
            </div>
          </div>
          {/* Step 1 */}
          <div className="bg-[#363636] max-w-[98%] m-auto my-4 p-4 rounded-xl">
            <div>
              <form>
                <div className="flex justify-between space-x-5">
                  <div className="bg-app-white my-2 py-3 w-[50%] px-6 rounded-lg shadow-2xl">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <p className="text-app-dark text-xl font-extrabold">
                          Customer&apos;s Information
                        </p>
                        <p className="text-light-green text-sm">
                          Please enter renter&apos;s info
                        </p>
                      </div>
                      <p className="text-light-green text-md">Step 1 of 4</p>
                    </div>

                    <Row gutter={[10, 10]}>
                      <Col xs={24} sm={12}>
                        <div className="relative pb-3.5">
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Customer&apos;s Name
                          </label>

                          <input
                            type="text"
                            id="name"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </Col>
                      <Col xs={24} sm={12}>
                        <div className="relative pb-3.5">
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
                      </Col>
                    </Row>

                    <Row gutter={[10, 10]}>
                      <Col xs={24} sm={12}>
                        <div className="relative pb-3.5 ">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Email
                          </label>

                          <input
                            type="email"
                            id="email"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </Col>

                      <Col xs={24} sm={12}>
                        <div className="relative pb-3.5 ">
                          <label
                            htmlFor="dob"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Date of Birth
                          </label>

                          <input
                            type="date"
                            id="dob"
                            max="2006-01-01"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row gutter={[10, 10]}>
                      <Col xs={24} sm={12}>
                        <div className="relative pb-3.5 ">
                          <label
                            htmlFor="sex"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Vehicle Status
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="male" className="text-app-black">
                              Male
                            </option>
                            <option value="female" className="text-app-black">
                              Female
                            </option>
                          </select>
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
                  <div className="bg-app-white my-2 rounded-lg w-[50%]">
                    <div className="flex justify-between items-center py-3 px-6">
                      <div className="space-y-2">
                        <p className="text-app-dark text-xl font-extrabold">
                          Summmary of Charges
                        </p>
                        <p className="text-light-green text-sm">
                          Please enter the charges
                        </p>
                      </div>
                      <p className="text-light-green text-md">Step 2 of 4</p>
                    </div>
                    <div className="px-8 space-y-2 py-4">
                      <div className="flex justify-between">
                        <p className="text-app-grey font-light">Base Rate</p>
                        <input
                          type="text"
                          className="block w-[25%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                      <div className="flex justify-between">
                        <p className="text-app-grey font-light">Discount</p>
                        <p className="font-medium text-app-darkGray">₦4,000</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-app-grey font-light">SubTotal</p>
                        <input
                          type="text"
                          className="block w-[25%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />{" "}
                      </div>
                      <div className="flex justify-between">
                        <p className="text-app-grey font-light">VAT</p>
                        <p className="font-medium text-app-darkGray">₦1,000</p>
                      </div>

                      <hr />
                      <div className="flex justify-between">
                        <p className="text-app-grey font-medium">Grand Total</p>
                        <input
                          type="text"
                          className="block w-[25%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />{" "}
                      </div>
                      <hr />
                      <div className="flex justify-between">
                        <p className="text-app-grey font-normal">
                          Advance Paid
                        </p>
                        <input
                          type="text"
                          className="block w-[25%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />{" "}
                      </div>
                      <div className="flex justify-between">
                        <p className="text-app-grey font-normal">Balance Due</p>
                        <input
                          type="text"
                          className="block w-[25%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />{" "}
                      </div>
                      <div className="flex justify-between">
                        <p className="text-app-grey font-normal">
                          Cancellation Fee
                        </p>
                        <input
                          type="text"
                          className="block w-[25%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p className="text-app-dark text-xl font-extrabold">
                        Rental Information
                      </p>
                      <p className="text-light-green text-sm">
                        Please enter the rental information
                      </p>
                    </div>
                    <p className="text-light-green text-md">Step 3 of 4</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="rTYpe"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Reservation Type
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="" className="text-app-black">
                              Select Reservation Type
                            </option>
                            <option value="phone" className="text-app-black">
                              Phone
                            </option>
                            <option value="walk-in" className="text-app-black">
                              Walk-In
                            </option>
                            <option value="online" className="text-app-black">
                              Online
                            </option>
                          </select>
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="tType"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Travel Type
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="" className="text-app-black">
                              Select Travel Type
                            </option>
                            <option
                              value="intrastate"
                              className="text-app-black"
                            >
                              Intra-State
                            </option>
                            <option
                              value="interstate"
                              className="text-app-black"
                            >
                              Inter-State
                            </option>
                          </select>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="days"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            No. of Days
                          </label>
                          <input
                            type="number"
                            id="days"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="checkinBranch"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Checkin Branch
                          </label>

                          <input
                            type="text"
                            id="checkinBranch"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="checkinDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Checkin Date
                          </label>

                          <input
                            type="date"
                            id="checkinDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="checkoutDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Checkout Date
                          </label>

                          <input
                            type="date"
                            id="checkoutDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="rTYpe"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Available Drivers
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="" className="text-app-black">
                              Select a Driver
                            </option>

                            {drivers?.map((driver: any, i: any) => {
                              return (
                                <Fragment key={i}>
                                  <option
                                    key={driver.id}
                                    value={driver.id}
                                    className="text-app-black"
                                  >
                                    {driver?.status === "Available"
                                      ? driver?.full_name
                                      : null}
                                  </option>
                                </Fragment>
                              );
                            })}
                          </select>
                        </div>
                        <div className="relative w-[50%] pb-3.5"></div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p className="text-app-dark text-xl font-extrabold">
                        Vehicle Information
                      </p>
                      <p className="text-light-green text-sm">
                        Please enter info
                      </p>
                    </div>
                    <p className="text-light-green text-md">Step 4 of 4</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="model"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Vehicle Model
                          </label>

                          <input
                            type="text"
                            id="model"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="type"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Vehicle Type
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="" className="text-app-black">
                              Select Vehicle Type
                            </option>
                            <option value="luxury" className="text-app-black">
                              Luxury
                            </option>
                            <option value="sedan" className="text-app-black">
                              Sedan
                            </option>
                            <option value="minivan" className="text-app-black">
                              MiniVan
                            </option>
                            <option value="suv" className="text-app-black">
                              SUV
                            </option>
                            <option value="4x4" className="text-app-black">
                              4X4
                            </option>
                          </select>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="licenseNo"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            License No.
                          </label>

                          <input
                            type="text"
                            id="licenseNo"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="color"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Vehicle Color{" "}
                          </label>

                          <input
                            type="text"
                            id="color"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
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

export default AddReservation;
