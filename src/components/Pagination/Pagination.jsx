import React, { useState } from "react";
import classes from "./Paginiation.module.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useAppContext } from "../../context/appContext";
import Button from "../UI/Buttons/Button";
import { usePagination } from "../../hooks/usePagination";

const Pagination = () => {
  const {
    numOfPages,
    currentPage,
    maxPages,
    goToPage,
    nextPage,
    prevPage,
    pageNumbers,
  } = useAppContext();

  const paginationRange = usePagination({
    currentPage,
    totalCount: numOfPages,
    siblingCount: 1,
    pageSize: 4,
  });

  if (typeof paginationRange === "number") {
    if (currentPage === 0 || paginationRange < 2) {
      return null;
    }
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      prevPage();
    }
  };

  const goToNextPage = () => {
    if (currentPage !== numOfPages) {
      nextPage();
    }
  };

  return (
    <nav>
      <ul className={classes.pages}>
        <li className={`${classes["page--item"]} ${classes["page--prev"]}`}>
          <Button
            type="button"
            className={classes["page--link"]}
            onClick={goToPrevPage}
          >
            <GoChevronLeft />
          </Button>
        </li>
        {paginationRange.map((pageNumber) => (
          <li
            className={`${classes["page--item"]} ${
              pageNumber === currentPage ? classes["active"] : ""
            }`}
            key={pageNumber}
          >
            <Button
              type="button"
              className={`${classes["page--link"]} ${
                pageNumber === currentPage ? classes["active"] : ""
              }`}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          </li>
        ))}
        <li className={`${classes["page--item"]} ${classes["page--next"]}`}>
          <Button
            type="button"
            className={classes["page--link"]}
            onClick={goToNextPage}
          >
            <GoChevronRight />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
