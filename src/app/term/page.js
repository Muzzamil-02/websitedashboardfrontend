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
import Section0 from "@/components/terms/Section0";
import Section1 from "@/components/terms/Section1";
import Section2 from "@/components/terms/Section2";
import Section3 from "@/components/terms/Section3";
import Section4 from "@/components/terms/Section4";
import Section5 from "@/components/terms/Section5";
import Section6 from "@/components/terms/Section6";
import Section7 from "@/components/terms/Section7";
import Section8 from "@/components/terms/Section8";
import Section9 from "@/components/terms/Section9";
import Section10 from "@/components/terms/Section10";
import Section11 from "@/components/terms/Section11";
import Section12 from "@/components/terms/Section12";

const sectionComponents = {
  section0: Section0,
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
  section11: Section11,
  section12: Section12,
};

const initialFormData = {
  English: {
    section0: {
      mainHeading: "Terms of Use",
      description:
        "These Terms of Use (“Agreement”) govern your access and use of SpectrEco’s website www.spectreco.com. By accessing or using the Website, you agree to be bound by this Agreement. If you do not agree with any part of this Agreement, you should not access or use the Website.",
    },
    section1: {
      heading: "1. Acceptance of Terms",
      description:
        "By accessing the Website, you acknowledge that you have read, understood, and agree to be bound by this Agreement, as well as any additional terms and conditions that may apply.",
    },
    section2: {
      heading: "2. Intellectual Property Rights",
      description:
        "All content and materials on the Website, including but not limited to text, graphics, logos, images, audio clips, video clips, data compilations, and software, are the property of SpectrEco or its licensors and are protected by applicable copyright, trademark, and other intellectual property laws.",
    },
    section3: {
      heading: "3. Use of the Website",
      description1:
        "(a) You may use the Website for lawful purposes only and in compliance with this Agreement.",
      description2:
        "(b) You agree not to engage in any activity that may disrupt or interfere with the proper functioning of the Website or infringe upon the rights of others.",
      description3:
        "(c) You acknowledge that the Website may contain links to third-party websites, and SpectrEco is not responsible for the content, accuracy, or availability of such external sites.",
    },
    section4: {
      heading: "4. User Accounts and Security",
      description1:
        "(a) Certain features of the Website may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.",
      description2:
        "(b) You agree to provide accurate, current, and complete information when creating an account, and to promptly update such information as necessary.",
    },
    section5: {
      heading: "5. Disclaimers",
      description1:
        "(a) The Website is provided on an “as-is” and “as available” basis, without any warranties of any kind, whether express or implied.",
      description2:
        "(b) SpectrEco does not warrant that the Website will be error-free, uninterrupted, secure, or free of viruses or other harmful components.",
      description3:
        "(c) SpectrEco disclaims any responsibility for the accuracy, completeness, or usefulness of any information or content available on the Website.",
    },
    section6: {
      heading: "6. Limitation of Liability",
      description:
        "To the extent permitted by applicable law, SpectrEco and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Website or this Agreement.",
    },
    section7: {
      heading: "7. Indemnification",
      description:
        "You agree to indemnify and hold SpectrEco and its affiliates, officers, directors, employees, agents, and licensors harmless from any claims, losses, damages, liabilities, and expenses (including reasonable attorneys’ fees) arising out of or in connection with your use of the Website or any violation of this Agreement.",
    },
    section8: {
      heading: "8. Governing Law and Jurisdiction",
      description:
        "This Agreement shall be governed by and construed in accordance with the laws of the state of Georgia, United States. Any legal action or proceeding arising out of or relating to this Agreement shall be brought exclusively in the state or federal courts located in Georgia.",
    },
    section9: {
      heading: "9. Modifications to this Agreement",
      description:
        "SpectrEco reserves the right to modify or update this Agreement at any time, without prior notice. You are responsible for regularly reviewing this Agreement to ensure your compliance. Continued use of the Website after any modifications to this Agreement constitutes your acceptance of such modifications.",
    },
    section10: {
      heading: "10. Severability",
      description:
        "If any provision of this Agreement is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable provision that achieves as closely as possible the original intent of the provision.",
    },
    section11: {
      heading: "11. Entire Agreement",
      description:
        "This Agreement constitutes the entire agreement between you and SpectrEco regarding your use of the Website, superseding any prior agreements or communications, whether oral or written, relating to the subject matter herein.",
    },
    section12: {
      heading: "12. Contact Information",
      description:
        "If you have any questions or concerns about this Agreement or the Website, please contact us at connect@spectreco.com.",
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
          section0: {},
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
          section11: {},
          section12: {},
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
