//@ts-nocheck
import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "@/components/UI/ResponsiveTable.module.css";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { PAGINATION } from "@/utils/constants";
import PaginatePills from "./PaginatePills";

const PaginatedTable = ({
  columns = [],
  tableData = [],
  perPage = PAGINATION.PAGE_SIZE,
}) => {
  const {
    initialState: { pageIndex = 1 },
    ...table
  } = useReactTable({
    data: tableData,
    columns,
    autoResetPage: false,
    initialState: { pageSize: perPage, pageIndex: 0 },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    table?.setPageSize(perPage);
    table?.setPageIndex(0);
  }, [perPage]);

  return (
    <div>
      <table
        className={classNames(
          "w-full text-left text-app-white outline outline-1 outline-app-grey",
          styles.table
        )}
      >
        <thead className="text-md text-[#78828f] border-y-[1px] capitalize bg-[#e8f8ee]">
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className=" p-4">
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
          {table?.getRowModel()?.rows?.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells()?.map((cell) => (
                <td key={cell.id} className="px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <PaginatePills
        currentPage={table?.getState().pagination.pageIndex}
        noOfPages={table?.getPageCount()}
        previousPage={table?.previousPage}
        nextPage={table?.nextPage}
        goToPage={table?.setPageIndex}
      />
    </div>
  );
};

export { PaginatedTable };
