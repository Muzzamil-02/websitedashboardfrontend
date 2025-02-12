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
import ArticleSection from "@/components/insightdetail/Section1";

const initialFormData = {
  English: {
    pages: [
      {
        id: 1,
        section: {
          mainHeading: "",
          date: "",
          imageURL: "",
          description: "",
        },
      },
    ],
  },
};

export default function ArticlesPage() {
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
          pages: [],
        },
      });
    }
  };

  const handleFieldChange = (pageIndex, field, value) => {
    const updatedPages = [...formData[selectedLanguage].pages];
    updatedPages[pageIndex].section[field] = value;
    setFormData({
      ...formData,
      [selectedLanguage]: {
        pages: updatedPages,
      },
    });
  };

  const handleAddItem = () => {
    const newPage = {
      id: Date.now(),
      section: {
        mainHeading: "",
        date: "",
        imageURL: "",
        description: "",
      },
    };
    setFormData((prevData) => ({
      ...prevData,
      [selectedLanguage]: {
        pages: [...prevData[selectedLanguage].pages, newPage],
      },
    }));
  };

  const handleRemoveItem = (id) => {
    const updatedPages = formData[selectedLanguage].pages.filter(
      (page) => page.id !== id
    );
    setFormData({
      ...formData,
      [selectedLanguage]: {
        pages: updatedPages,
      },
    });
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
          {formData[selectedLanguage].pages.map((page, index) => (
            <Box
              key={page.id}
              sx={{
                marginBottom: 2,
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
              }}
            >
              <ArticleSection
                formData={page.section}
                onFieldChange={(name, value) =>
                  handleFieldChange(index, name, value)
                }
              />
            </Box>
          ))}

          <Box textAlign="center" sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
              onClick={handleAddItem}
            >
              Add New Section
            </Button>
            <Button
              variant="contained"
              color="secondary"
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
