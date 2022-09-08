import React from "react";

import { Link } from "react-router-dom";
import MyTable from "../../components/Table/MyTable";
import labels from "../../Data/labels"

export default function Employees() {
  const employees = JSON.parse(localStorage.getItem("employees"));

  function clear(){
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="employees">
      <div className="table">
        <MyTable labels={labels} data={employees} />
      </div>
      <div className="clear">
        <button onClick={clear}>Clear</button>
      </div>

      <div className="employees-link">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
