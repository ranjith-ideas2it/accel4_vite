import React from "react";
import AppTableContainer from "../components/tableContainer/AppTableContainer";
import { rows, columns } from "../mockData/LocationTableData";

const LocationTable = () => {
  return <AppTableContainer rows={rows} columns={columns} />;
};

export default LocationTable;
