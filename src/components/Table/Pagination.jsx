import React from "react";

import { generateID } from "../../utils/utils";

export default function Pagination({
  currentPage,
  totalEntries,
  displayedEntries,
  handleClick,
}) {
  const nbPages = Math.ceil(totalEntries / displayedEntries);
  const nbPagesArray = new Array(nbPages).fill(0);
console.log(nbPagesArray)
  //  previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) handleClick(currentPage - 1);
  };

  //  next page
  const handleNextPage = () => {
    if (currentPage < nbPages) handleClick(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={handlePreviousPage}
        className={currentPage === 1 ? "number number-disabled" : "number"}
      >
        Previous
      </button>

      {/* Create page button */}
      {nbPagesArray.map((_, index) => (
        <button
          type="button"
          key={generateID()}
          onClick={() => handleClick(index + 1)}
          className={
            currentPage === index + 1 ? "number number-active" : "number"
          }
        >
          {index + 1}
        </button>
      ))}

      <button
        type="button"
        onClick={handleNextPage}
        className={
          currentPage === nbPages || totalEntries === 0
            ? "number number-disabled"
            : "number"
        }
      >
        Next
      </button>
    </div>
  );
}