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
import Section1 from "@/components/advisory/Section1";
import Section2 from "@/components/advisory/Section2";
import Section3 from "@/components/advisory/Section3";
import Section4 from "@/components/advisory/Section4";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
  section3: Section3,
  section4: Section4,
};

const initialFormData = {
  English: {
    section1: {
      title:
        "Technology-Driven Strategic ESG Advisory Services for Businesses and Investors",
      description:
        "Navigating the complexities of ESG, our business advisory services, and investor advisory services empower businesses, investors, and governments to attract capital, enhance value creation, and lead purposefully. We guide regulations, standards, and frameworks, ensuring compliance and alignment with industry best practices. Focusing on the built infrastructure, our strategies encompass sustainable development and resilience, creating robust frameworks for long-term success.",
    },
    section2: {
      heading: "Guiding Sustainable Strategies",
      list: [
        {
          id: 1,
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/office-building.svg",
          title: "ESG Strategy & Business Advisory Development",
          description:
            "Unlocking growth opportunities with strategic insights and robust business cases tailored to your organization's unique needs.",
        },
        {
          id: 2,
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/legalicon.svg",
          title: "Proprietary Frameworks & Delivery Models",
          description:
            "These models are designed to support comprehensive ESG advisory services for businesses and investors.",
        },
        {
          id: 3,
          image: "https://spectreco.com/wp-content/uploads/2024/05/speed.svg",
          title: "Simplicity & Speed",
          description:
            "Driving progress with simplified processes and accelerated timelines to meet your sustainability goals effectively and efficiently.",
        },
        {
          id: 4,
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/bar-chart.svg",
          title: "Data-driven",
          description:
            "Data-driven ESG consulting and advisory services to deliver measurable results and insights.",
        },
        {
          id: 5,
          image: "https://spectreco.com/wp-content/uploads/2024/05/human.svg",
          title: "Human & Artificial Intelligence",
          description:
            "Blending human expertise with advanced AI technology to deliver innovative solutions and actionable insights for sustainable growth.",
        },
        {
          id: 6,
          image: "https://spectreco.com/wp-content/uploads/2024/05/idea.svg",
          title: "Project Management & Implementation",
          description:
            "Providing comprehensive project management and implementation support to ensure seamless execution and successful integration of sustainability strategies.",
        },
      ],
    },
    section3: {
      title: "Sprint Centric Delivery Model",
      description:
        "Revolutionize your sustainability strategy with Spectreco's Sprint Centric Delivery Model, combining agility and precision to achieve impactful results quickly. Our approach empowers businesses, investors, industries, and governments with tailored ESG advisory services, helping them navigate risks and opportunities while driving sustainable growth. By incorporating transition finance and green capital, we deliver tailored, comprehensive ESG advisory services that drive meaningful change. We navigate regulations, standards, and frameworks, focusing on built infrastructure for holistic, resilient sustainability solutions.",
      steps: [
        { id: 1, title: "Purpose, Goals & Business Case" },
        { id: 2, title: "Benchmark, Intervene & Track" },
        { id: 3, title: "Data, Technology & Reporting" },
        { id: 4, title: "Advocate, Engage & Communicate" },
        { id: 5, title: "Repeat, Scale Or Sustain" },
      ],
    },
    section4: {
      heading: "Advisory Services We Offer",
      services: [
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory2.svg",
          title: "Risk & Opportunity",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Risk-Opp-2.png",
          description:
            "Navigate ESG-aligned risks and opportunities for resilient, sustainable growth with our Advisory service",
          service: [
            "Assess, manage, and mitigate risks.",
            "Build climate resilience and future-proof investments.",
          ],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory3.svg",
          title: "Carbon Cleanse",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Carbon-Cleanse-1.png",
          description:
            "Streamline emission measurement and achieve a successful transition to net zero",
          service: ["Emission measurement.", "Net zero transition."],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory4.svg",
          title: "Waste Management",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Waste-Management-1.png",
          description:
            "Maximize efficiency and profitability through solutions with a focus on circularity",
          service: ["Recycle, reuse, & repair.", "Reduce waste."],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory5.svg",
          title: "Sustainable Supply Chain",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Sustainable-Supply-Chain-1.png",
          description:
            "Optimize supply chain sustainability with tailored ESG advisory and business advisory services",
          service: [
            "Measure emissions along Scope 1, 2, & 3.",
            "Achieve net zero transition.",
          ],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory1.svg",
          title: "Community Impact",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Workers-Communities-1.png",
          description:
            "Foster growth and prosperity through community centric initiatives and employee engagement",
          service: ["Collective prosperity", "Community engagement"],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/FinancialInstitutions.svg",
          title: "Governance & Oversight",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Governance-Oversight-1.png",
          description:
            "Promote transparency and accountability through compliance and ethical governance practices",
          service: ["Regulatory compliance", "Ethical governance"],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory7.svg",
          title: "Communication & Engagement",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Comms-Engagement-1.png",
          description:
            "Strengthen stakeholder relationships for sustainable growth through effective communication & engagement",
          service: ["Stakeholder collaboration", "Advocacy and mobilization"],
        },
        {
          icon: "https://spectreco.com/wp-content/uploads/2024/05/Advisory6.svg",
          title: "Reporting & Disclosures",
          image:
            "https://spectreco.com/wp-content/uploads/2024/05/Reporting-Disclosures-1.png",
          description:
            "Enhance transparency and accountability through comprehensive reporting and disclosure practices",
          service: ["Regulatory compliance", "Stakeholder demand"],
        },
      ],
    },
  },
};

export default function page() {
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
        },
      });
    }
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
                <Component formData={formData[selectedLanguage][section]} />
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
