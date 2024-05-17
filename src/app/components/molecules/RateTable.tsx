import * as React from "react";
import { Rate } from "@/utils/types";
import classNames from "classnames";
import styles from "@/components/UI/ResponsiveTable.module.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData: Rate[] = [
  {
    vtype: "Luxury",
    mileage: "100",
    rtype: "2,000",
  },
  {
    vtype: "Sedan",
    mileage: "100",
    rtype: "1,000",
  },
  {
    vtype: "Mini Van",
    mileage: "100",
    rtype: "2,500",
  },
  {
    vtype: "SUV",
    mileage: "100",
    rtype: "4,000",
  },
  {
    vtype: "4 x 4",
    mileage: "100",
    rtype: "3,500",
  },
];

const columnHelper = createColumnHelper<Rate>();

const columns = [
  columnHelper.accessor("vtype", {
    header: () => "Vehicle Type",
    cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
  }),
  columnHelper.accessor("mileage", {
    header: () => "Mileage",
    cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
  }),
  columnHelper.accessor("rtype", {
    header: () => "Rate Type",
    cell: (info) => <p className="capitalize"> NGN {info.getValue()}</p>,
  }),
];

const RateTable = () => {
  const [data, _setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table
      className={classNames(
        "w-[90%] mx-auto text-center my-6 border-[2px] outline outline-1 outline-app-grey",
        styles.table
      )}
    >
      <thead className="text-lg border-y-[1px] capitalize">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="px-6 py-2 outline outline-1 outline-app-grey"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RateTable;
