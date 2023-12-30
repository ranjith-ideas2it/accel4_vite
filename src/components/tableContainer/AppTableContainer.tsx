import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./AppTableContainer.scss";

export default function App(props: any) {
  const { rows, columns } = props;

  const tableStyle = {
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      outline: "none !important",
    },
    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus": {
      outline: "none !important",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#e9e9e9",
      fontWeight: "500",
    },
    ".MuiDataGrid-columnHeaderTitle": {
      fontWeight: "500",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-sortIcon": {
      opacity: 0,
    },
    "&:hover .MuiDataGrid-sortIcon": {
      display: "none",
    },
    "& .MuiDataGrid-row:last-child": {
      borderBottomRightRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
      borderBottom: "none",
    },
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid sx={tableStyle} rows={rows} columns={columns} />
    </div>
  );
}
