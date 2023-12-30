import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import SendIcon from "@mui/icons-material/Send";

export const drawerWidth: number = 280;

export const SideBarMenu = [
  {
    primary: "Master",
    icon: <InboxIcon />,
    nestedItems: [
      "Location",
      "Calendar",
      "Product Hierarchy",
      "Class and Characteristics",
      "Item",
      "Item Location",
      "BOM",
      "Routing",
    ],
  },
  { primary: "Demand", icon: <SendIcon /> },
  { primary: "SPAN", icon: <SendIcon /> },
  { primary: "Actuals", icon: <SendIcon /> },
  { primary: "LOT", icon: <SendIcon /> },
];
