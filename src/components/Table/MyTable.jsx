import React, { useState } from "react";

import "./Table.css";
import { normalizeText } from "../../utils/utils";

import Entries from "./Entries";
import Search from "./TableSearch";
import Table from "./Table";
import TableFooter from "./TableFooter";
import Pagination from "./Pagination";

export default function MyTable({ labels, data }) {
  const initialState = data;
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  //sort and search
  const [sortedData, setSortedData] = useState(initialState);
  const [isSearching, setIsSearching] = useState(false);
  const [sort, setSort] = useState({
    column: "",
    isDesc: true,
  });

  const minRows = currentPage === 1 ? 1 : (currentPage - 1) * postPerPage + 1;

  const maxRows =
    currentPage * postPerPage < data.length
      ? currentPage * postPerPage
      : data.length;
  const minFilteredShow =
    currentPage === 1
      ? sortedData.length > 0
        ? 1
        : 0
      : (currentPage - 1) * postPerPage + 1;
  const maxFilteredShow =
    currentPage * postPerPage < sortedData.length
      ? currentPage * postPerPage
      : sortedData.length;

  // Set howmany entries to display
  const handleEntriesChange = (evt) => {
    setPostPerPage(parseInt(evt.target.value));
    setCurrentPage(1);
  };

  // set sort descending or ascending
  const handleSort = (label) => {
    if (sort.column === label) {
      setSort({
        ...sort,
        isDesc: !sort.isDesc,
      });
    } else {
      setSort({
        column: label,
        isDesc: false,
      });
    }

    const sorted = sorting(label);
    setSortedData(sorted);
  };

  // Sort
  const sorting = (label) => {
    const sorted = sortedData.sort((a, b) => {
      const labelA = normalizeText(a[label]);
      const labelB = normalizeText(b[label]);

      if (sort.isDesc) {
        if (labelA < labelB) return -1;
        if (labelA > labelB) return 1;
      } else {
        if (labelA < labelB) return 1;
        if (labelA > labelB) return -1;
      }

      return 0;
    });

    return sorted;
  };

  return (
    <div className="MyTable">
      <div className="table-utils">
        <Entries value={postPerPage} handleChange={handleEntriesChange} />
        <Search
          data={data}
          handleDisplayedData={setSortedData}
          handleIsSearching={setIsSearching}
        />
      </div>
      <Table
        labels={labels}
        data={sortedData}
        minRows={minRows}
        maxRows={maxRows}
        handleSort={handleSort}
        sort={sort}
        sortedData={sortedData}
      />
      <div className="table-footer">
        <TableFooter
          minRows={minRows}
          maxRows={maxRows}
          totalEntries={data.length}
          isSearching={isSearching}
          minFilteredShow={minFilteredShow}
          maxFilteredShow={maxFilteredShow}
          totalEntriesShow={sortedData.length}
        />
        <Pagination
          totalEntries={sortedData.length}
          displayedEntries={postPerPage}
          handleClick={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}