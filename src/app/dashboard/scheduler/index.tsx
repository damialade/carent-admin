//@ts-nocheck
"use client";
import React, { Fragment, useEffect, useState } from "react";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import WithSideBar from "@/components/Layout/WithSideBar";

const Scheduler = () => {
  const [scheduler, setScheduler] = useState<DayPilot.Scheduler>();

  const initialConfig: DayPilot.SchedulerConfig = {
    startDate: "2024-01-01",
    days: 366,
    scale: "Day",
    timeHeaders: [{ groupBy: "Month" }, { groupBy: "Day", format: "d" }],
    rowHeaderColumns: [
      { text: "Storage Box", width: 100 },
      { text: "Capacity", display: "capacity" },
      { text: "Status", width: 50 },
    ],
  };

  const [config, setConfig] = useState(initialConfig);

  useEffect(() => {
    if (!scheduler || scheduler?.disposed()) {
      return;
    }

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

    scheduler.update({ resources, events });
  }, [scheduler]);

  const onTimeRangeSelected = async (
    args: DayPilot.SchedulerTimeRangeSelectedArgs
  ) => {
    const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
    scheduler?.clearSelection();
    if (modal.canceled) {
      return;
    }
    scheduler?.events.add({
      start: args.start,
      end: args.end,
      id: DayPilot.guid(),
      text: modal.result,
      resource: args.resource,
    });
  };

  const onBeforeEventRender = (
    args: DayPilot.SchedulerBeforeEventRenderArgs
  ) => {
    args.data.areas = [
      {
        right: 10,
        top: "calc(50% - 7px)",
        width: 18,
        height: 18,
        symbol: "/daypilot.svg#checkmark-2",
        backColor: "#999999",
        fontColor: "#ffffff",
        padding: 2,
        style: "border-radius: 50%",
      },
    ];
  };

  const onBeforeRowHeaderRender = (
    args: DayPilot.SchedulerBeforeRowHeaderRenderArgs
  ) => {
    args.row.columns[1].horizontalAlignment = "center";
    if (args.row.data.status === "locked") {
      args.row.columns[2].areas = [
        {
          left: "calc(50% - 8px)",
          top: 10,
          width: 20,
          height: 20,
          symbol: "/daypilot.svg#padlock",
          fontColor: "#777777",
        },
      ];
    }
  };

  return (
    <Fragment>
      <WithSideBar>
        <div className="px-3">
          <p className="text-app-white text-3xl font-extrabold">Scheduler</p>
        </div>
        <div>
          <DayPilotScheduler {...config} controlRef={setScheduler} />
        </div>
      </WithSideBar>
    </Fragment>
  );
};
export default Scheduler;
