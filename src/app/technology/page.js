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
import Section1 from "@/components/technology/Section1";
import Section2 from "@/components/technology/Section2";
import Section3 from "@/components/technology/Section3";
import Section4 from "@/components/technology/Section4";
import Section7 from "@/components/technology/Section7";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
  section3: Section3,
  section4: Section4,
  section7: Section7,
};

const initialFormData = {
  English: {
    section1: {
      heading:
        "Simplifying your <span style='color: #D30C0B'>Sustainability </span> Journey With ESG Solutions",
      text: "Harness technology for streamlined data management, actionable insights, and measurable progress in sustainability.",
      buttonText: "Book a session today!",
      imageSrc: "/images/hero-2.png",
    },
    section2: {
      title1: "Industry-Specific",
      title2: "Solutions",
      heading: "Cloud-Native AI-Driven Platform",
      text: "Streamline your ESG journey effortlessly with our intelligent platform. Utilizing built-in benchmarks and AI-driven analytics, easily set goals, select interventions, and track progress from development to reporting. Our platform ensures compliance across multiple geographies and jurisdictions, providing simplicity and unparalleled accuracy in generating audit-ready metrics.",
    },
    section3: {
      heading: "Tailored Solutions for Businesses & Investors",
      cardData: {
        tech1: {
          imageURL: "/images/tech1.svg",
          heading: "Configurable for Diverse Entities",
          description:
            "Customize our platform for multiple entities, funds, operational sites, and asset classes, ensuring flexibility and precision in your sustainability efforts.",
        },
        tech2: {
          imageURL: "/images/tech2.svg",
          heading: "AI-Powered Recommendation Engine",
          description:
            "Leverage our recommendation engine to conduct materiality assessments, set targets, and identify interventions tailored to your unique needs and objectives.",
        },
        tech3: {
          imageURL: "/images/tech3.svg",
          heading: "Seamless Progress Tracking",
          description:
            "Track your sustainability progress effortlessly with built-in tools for monitoring and evaluating performance against predefined targets and industry benchmarks.",
        },
        tech4: {
          imageURL: "/images/tech3.svg",
          heading: "Comprehensive Reporting",
          description:
            "Generate comprehensive sustainability reports, compliance documentation, and forecasts with our intuitive dashboard and reporting features.",
        },
      },
    },
    section4: {
      topHeading: "Give it a try, it's free!",
      heading: "It only takes a few clicks to get started.",
      buttonText: "Get started – it’s free",
      paragraph: "Free for 60 days, no credit card required",
    },
    section7: {
      heading: "SUSTAINABILITY FRAMEWORKS & DISCLOSURES",
      text: "From predefined frameworks to customizable options, Spectreco’s AI-Driven platform streamlines sustainability disclosures tailored to your business needs. Access support for crafting audit-ready reports across all regulations, standards, and frameworks, ensuring compliance and meeting shareholders’ and stakeholders’ demands seamlessly.",
      imageSrc: "/images/esgcompanies.png",
    },
  },
};

export default function Technology() {
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
          section7: {},
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
