//@ts-nocheck
import { useMemo } from "react";
import { PAGINATION } from "@/utils/constants";

export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const useCustomPagination = ({
  totalCount = 0,
  noOfPages = 0,
  pageSize = PAGINATION.PAGE_SIZE,
  siblingCount = PAGINATION.SIBLING_COUNT,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = noOfPages || Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      if (leftRange[leftRange.length - 1] === totalPageCount - 1) {
        return [...leftRange, totalPageCount];
      }

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      if (rightRange[0] === 2) {
        return [firstPageIndex, ...rightRange];
      }
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, noOfPages, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
