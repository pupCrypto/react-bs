import React from "react";
import Columns from "../columns/Columns";
import Rows from "../rows/Rows";

export default function Table() {
  return (
    <table className="spreadsheet__table">
      <Columns />
      <Rows />
    </table>
  );
}