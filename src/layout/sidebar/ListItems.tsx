import React, { useState } from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { SideBarMenu } from "../../constants/SideBarItems";

const ListOfItems = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {SideBarMenu.map((item: any, index: number) => (
        <React.Fragment key={index}>
          {item.nestedItems ? (
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.primary} />
              {show ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          ) : (
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.primary} />
            </ListItemButton>
          )}
          {item.nestedItems && (
            <Collapse in={show} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.nestedItems.map((nestedItem: any, nestedIndex: any) => (
                  <ListItemButton key={nestedIndex} sx={{ pl: 3 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={nestedItem} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default ListOfItems;
