"use client";
import WithSideBar from "@/components/Layout/WithSideBar";
import React, { Fragment } from "react";
import type { NextPage } from "next";
import DbCards from "@/modules/DbCards";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import RateTable from "@/components/molecules/RateTable";
import RenderMap from "@/components/molecules/RenderMap";

const earnings = [
  {
    name: "Jan",
    previous: 4000,
    total: 2400,
  },
  {
    name: "Feb",
    previous: 3000,
    total: 1398,
  },
  {
    name: "Mar",
    previous: 2000,
    total: 9800,
  },
  {
    name: "Apr",
    previous: 2780,
    total: 3908,
  },
  {
    name: "May",
    previous: 1890,
    total: 4800,
  },
  {
    name: "Jun",
    previous: 2390,
    total: 3800,
  },
  {
    name: "Jul",
    previous: 3600,
    total: 8500,
  },
  {
    name: "Aug",
    previous: 3900,
    total: 4700,
  },
  {
    name: "Sep",
    previous: 3490,
    total: 4300,
  },
  {
    name: "Oct",
    previous: 1900,
    total: 2300,
  },
  {
    name: "Nov",
    previous: 1490,
    total: 2400,
  },
  {
    name: "Dec",
    previous: 2400,
    total: 4300,
  },
];

const vehicle = [
  { name: "Available", value: 12 },
  { name: "Rented", value: 19 },
  { name: "Accident", value: 5 },
  { name: "In Repair", value: 9 },
  { name: "In Service", value: 7 },
];
const COLORS = ["#CB39FF", "#0CB4A0", "#FF3D60", "#413DFF", "#6987D3"];

const DBHome: NextPage = () => {
  return (
    <Fragment>
      <WithSideBar>
        <div className="space-y-6 mb-12">
          <div className="px-3">
            <p className="text-app-white text-3xl font-extrabold">Dashboard</p>
          </div>
          <DbCards />
          <div className="flex space-x-10 max-w-[88%] mx-4">
            {/* Earning Summary */}
            <div className="px-2 h-[550px] rounded-lg py-6 bg-bg-hover w-[60%]">
              <div style={{ width: "100%", height: 350 }}>
                <p className="px-8 py-4 font-bold text-2xl text-web-lightGray">
                  Earning Summary
                </p>
                <div className="flex items-center justify-end space-x-8 px-8 py-4">
                  <div className="flex items-center space-x-3">
                    <button className="rounded-full bg-[#CB39FF] h-4 w-4"></button>
                    <button className="font-normal text-app-gray border-0">
                      Previous
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="rounded-full bg-[#62B2FD] h-4 w-4"></button>
                    <button className="font-normal text-app-gray border-0">
                      Total
                    </button>
                  </div>
                </div>
                <ResponsiveContainer>
                  <AreaChart
                    data={earnings}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="total"
                      stroke="#62B2FD"
                      fill="#62B2FD"
                    />
                    <Area
                      type="monotone"
                      dataKey="previous"
                      stroke="#CB39FF"
                      fill="#CB39FF"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* Vehicle Status */}
            <div className="h-[550px] rounded-lg py-6 bg-bg-hover w-[40%]">
              <p className="px-8 py-4 font-bold text-2xl text-web-lightGray">
                Vehicle Status
              </p>

              <div className="flex px-8 py-2">
                <select
                  name="cars"
                  className="rounded-lg px-2 outline outline-1 outline-slate-500"
                >
                  <option value="">Select a vehicle type</option>
                  <option value="luxury">Luxury</option>
                  <option value="sedan">Sedan</option>
                  <option value="minivan">MiniVan</option>
                  <option value="suv">SUV</option>
                  <option value="4x4">4X4</option>
                </select>
              </div>
              <div className="flex px-8 py-5">
                <div className="flex items-center space-x-6">
                  <button className="rounded-full bg-[#CB39FF] h-4 w-4"></button>
                  <button className="font-normal text-app-gray border-0">
                    Available
                  </button>
                  <button className="rounded-full h-8 w-8">12</button>
                </div>
              </div>
              <div className="flex px-8 py-5">
                <div className="flex items-center space-x-8">
                  <button className="rounded-full bg-[#0CB4A0] h-4 w-4"></button>
                  <button className="font-normal text-app-gray border-0">
                    Rented
                  </button>
                  <button className="rounded-full h-8 w-8">19</button>
                </div>
              </div>
              <div className="flex px-8 py-5">
                <div className="flex items-center space-x-7">
                  <button className="rounded-full bg-[#FF3D60] h-4 w-4"></button>
                  <button className="font-normal text-app-gray border-0">
                    Accident
                  </button>
                  <button className="rounded-full h-8 w-8">5</button>
                </div>
              </div>
              <div className="flex px-8 py-5">
                <div className="flex items-center space-x-7">
                  <button className="rounded-full bg-[#413DFF] h-4 w-4"></button>
                  <button className="font-normal text-app-gray border-0">
                    In Repair
                  </button>
                  <button className="rounded-full h-8 w-8">9</button>
                </div>
              </div>
              <div className="flex px-8 py-5">
                <div className="flex items-center space-x-6">
                  <button className="rounded-full bg-[#6987D3] h-4 w-4"></button>
                  <button className="font-normal text-app-gray border-0">
                    In Service
                  </button>
                  <button className="rounded-full h-8 w-8">7</button>
                </div>
              </div>

              <div className="relative -top-[380px] left-44">
                <PieChart width={400} height={400}>
                  <Pie
                    data={vehicle}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {vehicle.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
                <div className="-mt-[244px] ml-[77px]">
                  <button className="rounded-full border-0 bg-white shadow-2xl text-app-dark font-bold text-lg h-24 w-24">
                    42
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 max-w-[88%] mx-4">
            {/* Rate Summary */}
            <div className="px-2 h-[450px] rounded-lg py-6 bg-bg-hover w-[60%]">
              <p className="px-8 py-4 font-bold text-2xl text-web-lightGray">
                Rate Summary
              </p>
              <div className="flex justify-between">
                <div className="px-8">
                  <p className="py-1 font-medium text-lg text-web-lightGray">
                    Locations
                  </p>
                  <select
                    name="locations"
                    className="rounded-lg px-4 outline outline-1 outline-slate-500"
                  >
                    <option value="">Select a Location</option>
                    <option value="lagosisland">Lagos Island</option>
                    <option value="lagosmainland">Lagos Mainland</option>
                    <option value="epe">Epe</option>
                    <option value="ikorodu">Ikorodu</option>
                    <option value="interstate">Interstate</option>
                  </select>
                </div>
                <div className="px-8">
                  <p className="py-1 font-medium text-lg text-web-lightGray">
                    Rate Type
                  </p>
                  <select
                    name="rate"
                    className="rounded-lg px-4 outline outline-1 outline-slate-500"
                  >
                    <option value="">Select a rate type</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <RateTable />
            </div>
            {/* Map */}
            <div className="px-2 h-[450px] rounded-lg py-6 bg-bg-hover w-[40%]">
              <p className="px-8 py-4 font-bold text-2xl text-web-lightGray">
                Vehicle Locator
              </p>
              <RenderMap />
            </div>
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default DBHome;
