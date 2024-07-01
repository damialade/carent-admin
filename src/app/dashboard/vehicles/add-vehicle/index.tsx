"use client";
import React, { Fragment } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Link from "next/link";
import Back from "@/components/icons/Back";
import { useRouter } from "next/navigation";
import { Row, Col } from "antd";
import { useForm, useFieldArray } from "react-hook-form";
import { addVehicleInit } from "@/utils/schema";

const AddVehicle = () => {
  const {
    register,
    watch,
    control,
    formState: { errors, isSubmitted },
  } = useForm({
    defaultValues: addVehicleInit,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "vehicles",
  });
  const vehicles = watch("vehicles");

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
                New Vehicle
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
                <p>Save Vehicle</p>
              </div>
            </div>
          </div>
          {/* Step 1 */}
          <div className="bg-[#363636] max-w-[98%] m-auto my-4 p-4 rounded-xl">
            <div>
              <form>
                {!vehicles.length ? (
                  <p className="mb-3.5 text-xl font-bold text-app-white">
                    Please add at least one vehicle
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
                              Identification
                            </p>
                            <p className="text-light-green text-sm">
                              Please enter the vehicle info
                            </p>
                          </div>
                          <p className="text-light-green text-md">
                            Step 1 of 3
                          </p>
                        </div>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="vehicleName"
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                                htmlFor="state"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                State of License Issue
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
                                htmlFor="vImage"
                                className="block mb-2 text-sm font-medium text-gray-900 "
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
                              Classification
                            </p>
                            <p className="text-light-green text-sm">
                              Please enter the vehicle classification
                            </p>
                          </div>
                          <p className="text-light-green text-md">
                            Step 2 of 3
                          </p>
                        </div>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="status"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Status
                              </label>

                              <input
                                type="text"
                                id="status"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="fType"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Fuel Type
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
                                htmlFor="ownership"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Ownership
                              </label>

                              <input
                                type="text"
                                id="ownership"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>

                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5 ">
                              <label
                                htmlFor="eType"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Engine Type
                              </label>

                              <input
                                type="text"
                                id="eType"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="bg-app-white my-2 py-3 px-6 rounded-lg shadow-2xl">
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                            <p className="text-app-dark text-xl font-extrabold">
                              Additional Details
                            </p>
                            <p className="text-light-green text-sm">
                              Please enter additional info
                            </p>
                          </div>
                          <p className="text-light-green text-md">
                            Step 3 of 3
                          </p>
                        </div>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="color"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Color
                              </label>

                              <input
                                type="text"
                                id="color"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="bType"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Body Type
                              </label>

                              <input
                                type="text"
                                id="bType"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5 ">
                              <label
                                htmlFor="transmission"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Transmission
                              </label>

                              <input
                                type="text"
                                id="transmission"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>

                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5 ">
                              <label
                                htmlFor="mileage"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Mileage
                              </label>

                              <input
                                type="text"
                                id="mileage"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="insuranceAmount"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Insurance Amount
                              </label>

                              <input
                                type="text"
                                id="insuranceAmount"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="insuranceComp"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                Insurance Company
                              </label>

                              <input
                                type="text"
                                id="insuranceComp"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row gutter={[10, 10]}>
                          <Col xs={24} sm={12} key={field.id}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="licenseIssueDate"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                License Issue Date
                              </label>

                              <input
                                type="date"
                                id="licenseIssueDate"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="relative pb-3.5">
                              <label
                                htmlFor="licenseExpDate"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                              >
                                License Expiry Date
                              </label>

                              <input
                                type="date"
                                id="licenseExpDate"
                                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
                              />
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
                  onClick={() => append({ ...addVehicleInit.vehicles[0] })}
                >
                  Add Another Vehicle
                </button>
              </form>
            </div>
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default AddVehicle;
