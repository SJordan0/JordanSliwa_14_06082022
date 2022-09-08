import React from "react";

import { generateID } from "../../utils/utils";

export default function Table({
  labels,
  data,
  minRows,
  maxRows,
  handleSort,
  sort,
  sortedData,
}) {
  const { column, isDesc } = sort;

  return (
    <table className="table-main">
      <caption className="table-title">Current Employees</caption>

      <thead>
        <tr className="table-header-row">
          {/* labels*/}
          {labels.map((label) => (
            <th
              key={generateID()}
              className="table-header-cells"
              onClick={() => handleSort(label.value)}
            >
              <div className="table-header-cell">
                <span>{label.text}</span>
                <div className="sort-icons">
                  <div
                    className={
                      column === label.value
                        ? !isDesc
                          ? "sort-icons-up icon-up-active"
                          : "sort-icons-up icon-up-inactive"
                        : "sort-icons-up"
                    }
                  ></div>
                  <div
                    className={
                      column === label.value
                        ? isDesc
                          ? "sort-icons-down icon-down-active"
                          : "sort-icons-down icon-inactive"
                        : "sort-icons-down"
                    }
                  ></div>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {/* if the table is empty */}
        {sortedData.length === 0 && (
          <tr>
            <td className="nodata" colSpan={labels.length}>
              No data available in table
            </td>
          </tr>
        )}
        {/* Display the current page */}
        {data.map((elt, index) => {
          if (index + 1 >= minRows && index < maxRows) {
            return (
              <tr key={generateID()} className="dtb-table-row">
                {Object.values(elt).map((value, j) => (
                  <td
                    key={generateID()}
                    className={
                      j === 0 ? "dtb-table-cell first-cell" : "dtb-table-cell"
                    }
                  >
                    {value}
                  </td>
                ))}
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}