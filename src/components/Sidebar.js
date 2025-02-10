"use client";

import { useRouter } from "next/navigation";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessIcon from "@mui/icons-material/Business";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    {
      id: 3,
      text: "Technology",

      path: "/technology",
    },
    {
      id: 4,
      text: "Advisory",

      path: "/advisory",
      selected: true,
    },
    {
      id: 5,
      text: "Industry",

      subItems: [
        {
          id: 6,
          text: "Built Environment",
          path: "/industry/built-environment",
        },
        { id: 7, text: "Real estate", path: "/industry/real-estate" },
        { id: 8, text: "Hospitality", path: "/industry/hospitality" },
        { id: 9, text: "Agriculture", path: "/industry/agriculture" },
        { id: 10, text: "Energy", path: "/industry/energy" },
        { id: 11, text: "Transportation", path: "/industry/transportation" },
        {
          id: 12,
          text: "Financial Institution",
          path: "/industry/financial-institutions",
        },
        { id: 13, text: "Capital Market", path: "/industry/capital-market" },
        { id: 14, text: "Insurance", path: "/industry/insurance" },
      ],
    },
    {
      id: 15,
      text: "Resources",

      subItems: [
        { id: 16, text: "Blog & Insights", path: "/resources/insights" },
        { id: 17, text: "Partner", path: "/resources/partner" },
        { id: 18, text: "News & Press Release", path: "/resources/news-press" },
        { id: 19, text: "Events & Webinar", path: "/resources/events-webinar" },
        {
          id: 20,
          text: "Research & Publications",
          path: "/resources/research-publication",
        },
      ],
    },
    {
      id: 21,
      text: "Contact Us",
      path: "/settings",
      selected: true,
    },
    {
      id: 22,
      text: "Term",

      path: "/settings",
      selected: true,
    },
    {
      id: 23,
      text: "Policy",

      path: "settings",
      selected: true,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#f8f9fc",
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <div key={item.id}>
            <ListItem
              component="button"
              onClick={() => {
                if (item.subItems) {
                  toggleSection(item.id);
                } else {
                  router.push(item.path);
                }
              }}
              sx={{
                backgroundColor: item.selected ? "#eef2ff" : "transparent",
                color: "#000",
                textAlign: "left",
                width: "100%",
                display: "flex",
                alignItems: "center",
                border: "none",
                cursor: "pointer",
                padding: "10px 15px",
                "&:hover": { backgroundColor: "#e0e7ff" },
              }}
            >
              <ListItemIcon sx={{ color: "#2962ff" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.subItems &&
                (openSections[item.id] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                ))}
            </ListItem>
            {item.subItems && (
              <Collapse in={openSections[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.id}
                      component="button"
                      onClick={() => router.push(subItem.path)}
                      sx={{
                        paddingLeft: 4,
                        textAlign: "left",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px 15px",
                        "&:hover": { backgroundColor: "#f0f4ff" },
                      }}
                    >
                      <ListItemIcon sx={{ color: "#2962ff" }}>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
