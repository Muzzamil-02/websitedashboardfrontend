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
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "@/components/Sidebar";
import Section1 from "@/components/publication/Section1";
import Section2 from "@/components/publication/Section2";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
};

const initialFormData = {
  English: {
    section1: {
      heading: "Research & Publications",
      description:
        "Explore Spectreco’s collection of in-depth reports, whitepapers, and industry insights designed to help you navigate the evolving ESG landscape.",
      imageSrc:
        "https://spectreco.com/wp-content/uploads/2024/11/Copy-of-The-Transition-of-the-Real-Estate-Sector-2.jpg",
    },
    section2: {
      list: [
        {
          title: "WHITE PAPER",
          heading: "Capital Markets as Catalysts for Net Zero Targets",
          description:
            "This whitepaper explores the pivotal role of capital markets in advancing Saudi Arabia’s decarbonization goals under Vision 2030.",
          buttonText: "Read More",
          imageSrc:
            "https://spectreco.com/wp-content/uploads/2024/11/Capital-Markets-as-Catalysts-for-Net-Zero-Targets-in-the-Decarbonization-Journey-of-Saudi-Arabia-A-White-Paper-1.jpg",
        },
      ],
    },
  },
};

export default function ResourcesPage() {
  const [languages, setLanguages] = useState(["English"]);
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
          section2: { list: [] },
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
