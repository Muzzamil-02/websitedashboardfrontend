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
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
import Section4 from "@/components/about/Section4";
import Section5 from "@/components/about/Section5";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
  section3: Section3,
  section4: Section4,
  section5: Section5,
};

const initialFormData = {
  English: {
    section1: {
      heading:
        "We are a global sustainability, technology, advisory, and implementation company.",
      description:
        "Spectreco is your partner in building a better world, offering an innovative, data-driven approach and ready-to-deploy solutions. Backed by a century of collective expertise and a global perspective, we streamline compliance across multiple jurisdictions, focusing on built infrastructure across industries, transforming sustainability challenges into strategic advantages for investors, businesses, and governments alike.",
    },
    section2: {
      imageUrl: "/images/heroabout.jpg",
    },
    section3: {
      highlightedText:
        "We are creating a world where sustainable living is a norm and not an anomaly.",
      heading: "We deliver results for shareholders and stakeholders",
      description:
        "Spectreco drives tangible results through the seamless integration of sustainability practices, fostering growth while minimizing environmental impact. Our innovative solutions and expert guidance empower organizations to make measurable progress toward sustainability goals, ensuring simplicity, compliance, and adaptability across multiple jurisdictions and geographies.",
    },
    section4: {
      component: [
        { value: "$1.1B", label: "Total capital raised & managed" },
        { value: "$13B", label: "Net asset value managed" },
        { value: "$250M", label: "Impact valuation" },
        { value: "100,000+", label: "Lives impacted" },
        { value: "100+", label: "Assets managed" },
        { value: "100+", label: "Years of experience in built infrastructure" },
        { value: "100+", label: "Years of collective ESG/Impact experience" },
        { value: "8", label: "Country level policy consultations delivered" },
      ],
    },
    section5: {
      title: "Our Leadership",
      description:
        "Spectreco is a collaboration between Spectra Holdings LLC and Sustainadility LLC, USA, offering expertise in Climate Action Agendas, ESG Investing, Built Infrastructure, Investment Management, Sustainable Supply Chain, Green Financial Instruments, Technology, and Data. We work closely with governments and the private sector, engaging in various initiatives such as economic growth & investment, climate policies, financing, circular economy principles, and more. Our board brings extensive experience in strategic initiatives, investment management, and financial analysis for both public and private enterprises. With a proven track record in delivering impactful ESG solutions, we are committed to assisting businesses in achieving their sustainability goals while ensuring simplicity, compliance, and adaptability across jurisdictions.",
    },
  },
};

export default function About() {
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
