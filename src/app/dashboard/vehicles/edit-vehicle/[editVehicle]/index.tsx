"use client";
import React, { Fragment } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Link from "next/link";
import Back from "@/components/icons/Back";
import { useRouter } from "next/navigation";
import { Row, Col } from "antd";
import { useForm } from "react-hook-form";
import { vehicleInit } from "@/utils/schema";

const EditVehicle = () => {
  let vehicleData = require("../../vehicle.json");

  const { register } = useForm({
    defaultValues: vehicleData || vehicleInit,
  });

  const router = useRouter();
  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3 flex justify-between">
            <div>
              <Link
                href="/dashboard/vehicles"
                className="flex items-center space-x-2 text-app-white hover:text-btn-green"
              >
                <Back />
                <p>Vehicles</p>
              </Link>
              <p className="text-app-white text-3xl font-extrabold">
                Edit Vehicle
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <div
                onClick={() => {
                  router.push("/dashboard/vehicles");
                }}
                className="bg-app-white flex items-center cursor-pointer space-x-6 text-btn-green border border-dotted rounded-xl py-2 px-10"
              >
                <p>Cancel</p>
              </div>
              <div
                onClick={() => {
                  router.push("/dashboard/vehicles");
                }}
                className="bg-btn-green flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
              >
                <p>Update Vehicle</p>
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
                      <p className="text-app-dark text-xl font-extrabold">
                        Identification
                      </p>
                      <p className="text-light-green text-sm">
                        Please enter the vehicle info
                      </p>
                    </div>
                    <p className="text-light-green text-md">Step 1 of 4</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5">
                        <label
                          htmlFor="vehicleName"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Vehicle Name
                        </label>

                        <input
                          type="text"
                          id="vehicleName"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5">
                        <label
                          htmlFor="vin"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          VIN
                        </label>

                        <input
                          type="text"
                          id="vin"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="license"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          License Plate
                        </label>

                        <input
                          type="text"
                          id="license"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>

                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="vType"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Vehicle Type
                        </label>

                        <input
                          type="text"
                          id="vType"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="year"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Year
                        </label>

                        <input
                          type="text"
                          id="year"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>

                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
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
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="make"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Vehicle Make
                        </label>

                        <input
                          id="make"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>

                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="mileage"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Mileage
                        </label>

                        <input
                          id="state"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="status"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Vehicle Status
                        </label>

                        <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                          <option value="available" className="text-app-black">
                            Available
                          </option>
                          <option value="in-service" className="text-app-black">
                            In-Service
                          </option>
                          <option value="rented" className="text-app-black">
                            Rented
                          </option>
                          <option value="accidented" className="text-app-black">
                            Accidented
                          </option>
                        </select>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="vImage"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Upload Vehicle Images
                        </label>

                        <input
                          id="vImage"
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
                        General Information
                      </p>
                      <p className="text-light-green text-sm">
                        Please enter the vehicle classification
                      </p>
                    </div>
                    <p className="text-light-green text-md">Step 2 of 4</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="doors"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Doors
                          </label>

                          <input
                            type="text"
                            id="doors"
                            className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="tank"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Tank Size
                          </label>

                          <input
                            type="text"
                            id="tank"
                            className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="cylinders"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Cylinders
                          </label>

                          <input
                            type="text"
                            id="cylinders"
                            className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="fTYpe"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Fuel Type
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="petrol" className="text-app-black">
                              Petrol
                            </option>
                            <option value="diesel" className="text-app-black">
                              Diesel
                            </option>
                            <option value="electric" className="text-app-black">
                              Electric
                            </option>
                            <option value="gasoline" className="text-app-black">
                              Gasoline
                            </option>
                          </select>
                        </div>
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="eType"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Engine Type
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="onetotwo" className="text-app-black">
                              1.0 - 2.0-litre engines
                            </option>
                            <option
                              value="twotothree"
                              className="text-app-black"
                            >
                              2.0 - 3.0-litre engines
                            </option>
                            <option
                              value="threeplus"
                              className="text-app-black"
                            >
                              3.0-litre+ engines
                            </option>
                          </select>
                        </div>
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="transmission"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Transmission
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="manual" className="text-app-black">
                              Manual
                            </option>
                            <option
                              value="automatic"
                              className="text-app-black"
                            >
                              Automatic
                            </option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="color"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Color
                          </label>

                          <input
                            type="text"
                            id="color"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="odometer"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Odometer
                          </label>

                          <input
                            type="text"
                            id="odometer"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5 ">
                        <label
                          htmlFor="vOptions"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Vehicle Options
                        </label>
                        <div className="flex space-x-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="text-btn-green rounded-md accent-btn-green ring-app-green"
                            />
                            <p className="font-medium text-app-darkGray">
                              GPS Tracker
                            </p>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              className="text-btn-green rounded-md accent-btn-green ring-app-green"
                            />
                            <p className="font-medium text-app-darkGray">
                              X Box
                            </p>
                          </div>
                        </div>
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
                    <p className="text-light-green text-md">Step 3 of 4</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="insuranceComp"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Insurance Company
                          </label>

                          <input
                            type="text"
                            id="insuranceComp"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="insuranceAmount"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Insurance Amount
                          </label>

                          <input
                            type="text"
                            id="insuranceAmount"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="insuranceIssueDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Insurance Issue Date
                          </label>

                          <input
                            type="date"
                            id="insuranceIssueDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="insuranceDuration"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Insurance Duration
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="" className="text-app-black">
                              Insurance Duration
                            </option>
                            <option value="three" className="text-app-black">
                              3 months
                            </option>
                            <option value="six" className="text-app-black">
                              6 months
                            </option>
                            <option value="twelve" className="text-app-black">
                              12 months
                            </option>
                            <option value="eighteen" className="text-app-black">
                              18 months
                            </option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="insuranceExp"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Insurance Expiry
                          </label>

                          <input
                            type="date"
                            id="insuranceExp"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="licenseIssueDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            License Issue Date
                          </label>

                          <input
                            type="date"
                            id="licenseIssueDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="licenseExpDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            License Expiry Date
                          </label>

                          <input
                            type="text"
                            id="licenseExpDate"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="issuingState"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            License Issuing State
                          </label>

                          <input
                            type="text"
                            id="issuingState"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5">
                        <label
                          htmlFor="roadTax"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Road Tax Expiry
                        </label>

                        <input
                          type="date"
                          id="roadTax"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="relative pb-3.5">
                        <label
                          htmlFor="issueBody"
                          className="block mb-2 text-sm font-bold text-gray-900 "
                        >
                          Issuing Body
                        </label>

                        <input
                          type="text"
                          id="issuingBody"
                          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <p className="text-app-dark text-xl font-extrabold pb-6">
                        Ownership
                      </p>
                    </div>
                    <p className="text-light-green text-md">Step 4 of 4</p>
                  </div>

                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="leaseComp"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Leasing Company
                          </label>

                          <input
                            type="text"
                            id="leaseComp"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="leaseAmt"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Lease Amount
                          </label>

                          <input
                            type="text"
                            id="leaseAmt"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="leaseExp"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Lease Expiry Date
                          </label>

                          <input
                            type="date"
                            id="leaseExp"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="leaseTerm"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Lease Term
                          </label>

                          <select className="w-full h-fit px-3 py-2 leading-tight placeholder-white text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
                            <option value="" className="text-app-black">
                              Lease Term
                            </option>
                            <option value="three" className="text-app-black">
                              3 months
                            </option>
                            <option value="six" className="text-app-black">
                              6 months
                            </option>
                            <option value="twelve" className="text-app-black">
                              12 months
                            </option>
                            <option value="eighteen" className="text-app-black">
                              18 months
                            </option>
                          </select>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[10, 10]}>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="deposit"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Deposit
                          </label>

                          <input
                            type="text"
                            id="deposit"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="serviceDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            In-Service Date
                          </label>

                          <input
                            type="date"
                            id="serviceDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[33%] pb-3.5">
                          <label
                            htmlFor="purchaseDate"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Purchase Date
                          </label>

                          <input
                            type="date"
                            id="purchaseDate"
                            className="block p-2 w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} sm={12}>
                      <div className="flex space-x-8">
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="depreciation"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Depreciation
                          </label>

                          <input
                            type="text"
                            id="depreciation"
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                          />
                        </div>
                        <div className="relative w-[50%] pb-3.5">
                          <label
                            htmlFor="interest"
                            className="block mb-2 text-sm font-bold text-gray-900 "
                          >
                            Interest
                          </label>

                          <input
                            type="text"
                            id="interest"
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

export default EditVehicle;
