import React from "react";

export default function Entries({ value, handleChange }) {
  return (
    <>
      <div className="table-utils-1">
        <label htmlFor="choose-entries">{`Show: `}</label>
        <select
          name="choose-entries"
          id="choose-entries"
          value={value}
          onChange={(evt) => handleChange(evt)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>{` entries`}</span>
      </div>
    </>
  );
}