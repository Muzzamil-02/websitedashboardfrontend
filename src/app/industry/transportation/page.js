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
import Section1 from "@/components/industry/Section1";
import Section2 from "@/components/industry/Section2";
import Section3 from "@/components/industry/Section3";
import Section4 from "@/components/industry/Section4";
import Section5 from "@/components/industry/Section5";
import Section6 from "@/components/industry/Section6";
import Section7 from "@/components/industry/Section7";
import Section8 from "@/components/industry/Section8";
import Section9 from "@/components/industry/Section9";
import Section10 from "@/components/industry/Section10";
import Section12 from "@/components/industry/Section12";
import KeyStakeholderSlider from "@/components/industry/KeyStakeholderSlider";
import SecondSwiper from "@/components/industry/SecondSwiper";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
  section3: Section3,
  section4: Section4,
  section5: Section5,
  section6: Section6,
  section7: Section7,
  section8: Section8,
  section9: Section9,
  section10: Section10,
  section12: Section12,
  keyskaeholderslider: KeyStakeholderSlider,
  secondSwiper: SecondSwiper,
};

const initialFormData = {
  English: {
    section1: {
      heading: "",
      description: "",
      buttonText: "",
      imageUrl: "",
    },
    section2: {
      heading: "",
      description: "",
    },
    section3: {
      imageUrl: "",
    },
    section4: {
      heading: "",
      components: [
        {
          title: "",
          imageUrl: "",
        },
        {
          title: "",
          imageUrl: "",
        },
        {
          title: "",
          imageUrl: "",
        },
        {
          title: "",
          imageUrl: "",
        },
        {
          title: "",
          imageUrl: "",
        },
        {
          title: "",
          imageUrl: "",
        },
      ],
    },
    section5: {
      heading: "",
      component: [
        {
          title: "",
          imageURL: "",
        },
      ],
    },
    section6: {
      heading: "",
      description: "",
    },
    section7: {
      component: [
        {
          title: "",
          description: "",
          logoURL: "",
        },
      ],
    },
    section8: { imageUrl: "" },
    section9: {
      heading: "",
      description: "",
      imageUrl: "",
    },
    section10: {
      heading: "",
      subHeading: "",
      text: "",
      imageUrl: "",
    },
    section12: {
      heading: "",
      highlightText: "",
      description1: "",
      description2: "",
      imageUrl: "",
    },
    keyskaeholderslider: {
      heading: "",
      components: [
        {
          title: "",
          description: "",
        },
        {
          title: "",
          description: "",
        },
        {
          title: "",
          description: "",
        },
        {
          title: "",
          description: "",
        },
        {
          title: "",
          description: "",
        },
        {
          title: "",
          description: "",
        },
      ],
    },
    secondSwiper: {
      mainHeading: "",
      heading: "",
      description: "",
      components: [
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
        {
          title: "",
          description: "",
          imageUrl: "",
        },
      ],
    },
  },
};

export default function AgriculturePage() {
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
          section3: {},
          section4: {},
          section5: {},
          section6: {},
          section7: {},
          section8: {},
          section9: {},
          section10: {},
          section12: {},
          keyskaeholderslider: {},
          secondSwiper: {},
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
