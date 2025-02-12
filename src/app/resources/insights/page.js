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

import Section1 from "@/components/NewsPage/Section1";
import Section2 from "@/components/NewsPage/Section2";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
};

const initialFormData = {
  English: {
    section1: {
      heading: "News & <span style='color:#d30c0b;'>Insights</span>",
      subheading:
        "Stay up to date with the recent happenings in the ecosystem.",
      button: "Learn More",
    },
    section2: {
      articles: [
        {
          image:
            "https://spectreco.com/wp-content/uploads/2024/12/SEC-and-PCAF-Guidelines-325x235.png",
          title:
            "The Importance of Climate Disclosures: Understanding SEC and PCAF Guidelines",
          description:
            "Being familiar with climate change and its impact on businesses is more...",
          category: "Community Blog",
          categoryLink: "https://spectreco.com/category/community-blog",
          date: "December 25, 2024",
        },
        {
          image:
            "https://spectreco.com/wp-content/uploads/2024/12/IFRS-S1-and-S2-Compliance-325x235.png",
          title:
            "The Benefits of Real-Time Reporting for IFRS S1 and S2 Compliance",
          description:
            "In the current scenario, sustainability and climate-related disclosures...",
          category: "Community Blog",
          categoryLink: "https://spectreco.com/category/community-blog",
          date: "December 25, 2024",
        },
        {
          image:
            "https://spectreco.com/wp-content/uploads/2024/12/SEC-and-PCAF-Guidelines-325x235.png",
          title:
            "The Importance of Climate Disclosures: Understanding SEC and PCAF Guidelines",
          description:
            "Being familiar with climate change and its impact on businesses is more...",
          category: "Community Blog",
          categoryLink: "https://spectreco.com/category/community-blog",
          date: "December 25, 2024",
        },
      ],
    },
  },
};

export default function NewsPage() {
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
          section1: {
            heading: "",
            subheading: "",
            button: "",
          },
          section1: { title: "", articles: [] },
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
