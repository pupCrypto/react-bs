import React from "react";
import Table from "../table/Table";
import ProviderWrapper from "../Provider";

export default function Spreadsheet() {
  return (
    <ProviderWrapper>
      <Table />
    </ProviderWrapper>
  );
}