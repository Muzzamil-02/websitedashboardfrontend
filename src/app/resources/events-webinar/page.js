"use client";

import React, { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Button,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "@/components/Sidebar";
import Section1 from "@/components/events/Section1";
import Section2 from "@/components/events/Section2";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
};

const initialFormData = {
  English: {
    section1: {
      heading: "Events & Webinars",
      bottomHeading: "Past Webinar",
      hrefTitle: "Watch Recording",
      description:
        "Stay ahead with Spectreco’s expert-led webinars and industry events, designed to help businesses, investors, and government bodies navigate the evolving ESG landscape. Our events provide in-depth insights into global sustainability regulations, reporting standards, and the latest trends in environmental, social, and governance (ESG) compliance.",
    },
    section2: {
      list: [
        {
          title: "Exploring Correlation",
          subtitle: "Case Studies: ASEAN, Middle East",
          videoLink: "https://www.youtube.com/watch?v=zDNIGYOSJbE",
          image: "https://spectreco.com/wp-content/uploads/2024/10/event7.jpg",
        },
        {
          title: "FDI, Carbon Credits",
          subtitle: "Evolving Regulations, Exports",
          videoLink: "https://www.youtube.com/watch?v=dHzenR9bqDc",
          image: "https://spectreco.com/wp-content/uploads/2024/10/event1.jpg",
        },
        {
          title: "Green Financial Instruments",
          subtitle: "Financial Services in Transition",
          videoLink: "https://www.youtube.com/watch?v=OxuOmRCsOn8",
          image: "https://spectreco.com/wp-content/uploads/2025/01/1-1.jpg",
        },
        {
          title: "IFRS S1 & S2 Compliance",
          subtitle:
            "Streamlining ESG Reporting for Real Estate and Finance in Saudi Arabia",
          videoLink: "https://www.youtube.com/watch?v=-RXnpujZf_0",
          image: "https://spectreco.com/wp-content/uploads/2025/01/3-1.jpg",
        },
        {
          title: "Nature-Based Solutions for Climate Mitigation",
          subtitle: "Financial Pathways and Global Impact",
          videoLink: "https://www.youtube.com/watch?v=-lwP2tYAY-o",
          image: "https://spectreco.com/wp-content/uploads/2025/01/6-1.jpg",
        },
        {
          title: "Navigating ESG and Compliance in Real Estate",
          subtitle: "Pathways, Risks, and Rewards",
          videoLink: "https://www.youtube.com/watch?v=ETZkmR0bjkU",
          image: "https://spectreco.com/wp-content/uploads/2025/01/5-1.jpg",
        },
        {
          title: "SEC Climate Disclosures",
          subtitle:
            "Navigating Reporting & Data Management for Real Estate & Asset Management",
          videoLink: "https://www.youtube.com/watch?v=qFdZ2Qp6Z0c",
          image: "https://spectreco.com/wp-content/uploads/2025/01/2-1.jpg",
        },
      ],
    },
  },
};

export default function EventsWebinarsPage() {
  const [languages, setLanguages] = useState(["English", "Finnish"]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [formData, setFormData] = useState(initialFormData);

  const handleLanguageChange = (event, newValue) => {
    setSelectedLanguage(newValue);
  };

  const handleAddLanguage = () => {
    const newLanguage = prompt("Enter new language name:");
    if (newLanguage && !languages.includes(newLanguage)) {
      setLanguages([...languages, newLanguage]);
      setFormData({
        ...formData,
        [newLanguage]: {
          section1: {},
          section2: {},
        },
      });
    }
  };

  const handleFieldChange = (section, name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [selectedLanguage]: {
        ...prevData[selectedLanguage],
        [section]: { ...prevData[selectedLanguage][section], [name]: value },
      },
    }));
  };

  const handleSaveChanges = () => {
    console.log("Form Data Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f8f9fc" }}>
      <Sidebar />
      <Container sx={{ flexGrow: 1, padding: 3 }}>
        <Tabs
          value={selectedLanguage}
          onChange={handleLanguageChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {languages.map((lang) => (
            <Tab key={lang} label={lang} value={lang} />
          ))}
          <IconButton onClick={handleAddLanguage}>
            <AddIcon />
          </IconButton>
        </Tabs>

        <Paper sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
          {Object.keys(formData[selectedLanguage] || {}).map((section) => {
            const Component = sectionComponents[section];
            return Component ? (
              <Box key={section} sx={{ marginBottom: 2 }}>
                <Component
                  formData={formData[selectedLanguage][section]}
                  onFieldChange={handleFieldChange}
                />
              </Box>
            ) : null;
          })}

          <Box textAlign="center" sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ padding: "10px 20px", fontSize: "16px" }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
