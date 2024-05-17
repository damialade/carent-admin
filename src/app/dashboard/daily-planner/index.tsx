//@ts-nocheck
"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Zoom from "./zoom";

const Planner = () => {
  const [config, setConfig] = useState({
    startDate: "2024-05-01",
    days: 31,
    scale: "Day",
    timeHeaders: [{ groupBy: "Month" }, { groupBy: "Day", format: "d" }],
    cellWidthSpec: "Auto",
    cellWidth: 50,
    durationBarVisible: false,
    treeEnabled: true,
    rowHeaderColumns: [
      { name: "Car" },
      { name: "Seats", display: "seats", width: 50 },
      { name: "Doors", display: "doors", width: 50 },
      { name: "Transmission", display: "transmission", width: 90 },
    ],
    onEventMoved: (args) => {
      console.log(
        "Event moved: ",
        args.e.data.id,
        args.newStart,
        args.newEnd,
        args.newResource
      );
      getScheduler().message("Event moved: " + args.e.data.text);
    },
    onEventResized: (args) => {
      console.log(
        "Event resized: ",
        args.e.data.id,
        args.newStart,
        args.newEnd
      );
      getScheduler().message("Event resized: " + args.e.data.text);
    },
    onTimeRangeSelected: (args) => {
      DayPilot.Modal.prompt("New event name", "Event").then((modal) => {
        getScheduler().clearSelection();
        if (!modal.result) {
          return;
        }
        getScheduler().events.add({
          id: DayPilot.guid(),
          text: modal.result,
          start: args.start,
          end: args.end,
          resource: args.resource,
        });
      });
    },
    onBeforeEventRender: (args) => {
      if (!args.data.backColor) {
        args.data.backColor = "#93c47d";
      }
      args.data.borderColor = "darker";
      args.data.fontColor = "white";

      args.data.areas = [];
      if (args.data.locked) {
        args.data.areas.push({
          right: 4,
          top: 8,
          height: 18,
          width: 18,
          symbol: "icons/daypilot.svg#padlock",
          fontColor: "white",
        });
      } else if (args.data.plus) {
        args.data.areas.push({
          right: 4,
          top: 8,
          height: 18,
          width: 18,
          symbol: "icons/daypilot.svg#plus-4",
          fontColor: "white",
        });
      }
    },
  });

  const schedulerRef = useRef();

  const getScheduler = () => schedulerRef.current.control;

  const zoomChange = (args) => {
    switch (args.level) {
      case "month":
        setConfig({
          ...config,
          startDate: DayPilot.Date.today().firstDayOfMonth(),
          days: DayPilot.Date.today().daysInMonth(),
          scale: "Day",
        });
        break;
      case "week":
        setConfig({
          ...config,
          startDate: DayPilot.Date.today().firstDayOfWeek(),
          days: 7,
          scale: "Day",
        });
        break;
      default:
        throw new Error("Invalid zoom level");
    }
  };

  const cellWidthChange = (ev) => {
    const checked = ev.target.checked;
    setConfig((prevConfig) => ({
      ...prevConfig,
      cellWidthSpec: checked ? "Auto" : "Fixed",
    }));
  };

  const loadData = (args) => {
    const resources = [
      {
        name: "Convertible",
        id: "G2",
        expanded: true,
        children: [
          {
            name: "MINI Cooper",
            seats: 4,
            doors: 2,
            transmission: "Automatic",
            id: "A",
          },
          {
            name: "BMW Z4",
            seats: 4,
            doors: 2,
            transmission: "Automatic",
            id: "B",
          },
          {
            name: "Ford Mustang",
            seats: 4,
            doors: 2,
            transmission: "Automatic",
            id: "C",
          },
          {
            name: "Mercedes-Benz SL",
            seats: 2,
            doors: 2,
            transmission: "Automatic",
            id: "D",
          },
        ],
      },
      {
        name: "SUV",
        id: "G1",
        expanded: true,
        children: [
          {
            name: "BMW X1",
            seats: 5,
            doors: 4,
            transmission: "Automatic",
            id: "E",
          },
          {
            name: "Jeep Wrangler",
            seats: 5,
            doors: 4,
            transmission: "Automatic",
            id: "F",
          },
          {
            name: "Range Rover",
            seats: 5,
            doors: 4,
            transmission: "Automatic",
            id: "G",
          },
        ],
      },
      {
        name: "4 x 4",
        id: "G3",
        expanded: true,
        children: [
          {
            name: "Ford Ranger",
            seats: 6,
            doors: 4,
            transmission: "Automatic",
            id: "I",
          },
          {
            name: "Toyota Hilux",
            seats: 4,
            doors: 6,
            transmission: "Automatic",
            id: "J",
          },
          {
            name: "Toyota Tundra",
            seats: 4,
            doors: 2,
            transmission: "Automatic",
            id: "K",
          },
          {
            name: "Wrangler",
            seats: 4,
            doors: 4,
            transmission: "Automatic",
            id: "L",
          },
        ],
      },
    ];

    const events = [
      {
        id: 101,
        text: "Reservation 101",
        start: "2024-05-18T00:00:00",
        end: "2024-05-20T00:00:00",
        resource: "A",
      },
      {
        id: 102,
        text: "Reservation 102",
        start: "2024-05-06T00:00:00",
        end: "2024-05-10T00:00:00",
        resource: "A",
      },
      {
        id: 103,
        text: "Reservation 103",
        start: "2024-05-03T00:00:00",
        end: "2024-05-10T00:00:00",
        resource: "C",
        backColor: "#6fa8dc",
        locked: true,
      },
      {
        id: 104,
        text: "Reservation 104",
        start: "2024-05-02T00:00:00",
        end: "2024-05-08T00:00:00",
        resource: "E",
        backColor: "#f6b26b",
        plus: true,
      },
      {
        id: 105,
        text: "Reservation 105",
        start: "2024-05-03T00:00:00",
        end: "2024-05-09T00:00:00",
        resource: "G",
      },
      {
        id: 106,
        text: "Reservation 106",
        start: "2024-05-02T00:00:00",
        end: "2024-05-07T00:00:00",
        resource: "B",
      },
      {
        id: 107,
        text: "Reservation 107",
        start: "2024-05-12T00:00:00",
        end: "2024-05-16T00:00:00",
        resource: "K",
        backColor: "#1BB652",
      },
    ];

    getScheduler().update({
      resources,
      events,
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Fragment>
      <WithSideBar>
        <div className="px-3">
          <p className="text-app-white text-3xl font-extrabold">
            Daily Planner
          </p>
        </div>
        <div className="toolbar p-2 ">
          <Zoom onChange={(args) => zoomChange(args)} />

          <span className="toolbar-item font-medium text-md text-btn-green">
            <label>
              <input
                type="checkbox"
                className="accent-btn-green"
                checked={config.cellWidthSpec === "Auto"}
                onChange={(ev) => cellWidthChange(ev)}
              />{" "}
              Adjust width
            </label>
          </span>
        </div>
        <DayPilotScheduler {...config} ref={schedulerRef} />
      </WithSideBar>
    </Fragment>
  );
};

export default Planner;
