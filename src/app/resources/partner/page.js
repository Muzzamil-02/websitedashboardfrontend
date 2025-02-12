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
import Section1 from "@/components/partner/Section1";
import Section2 from "@/components/partner/Section2";
import Section3 from "@/components/partner/Section3";
import Section4 from "@/components/partner/Section4";

const sectionComponents = {
  section1: Section1,
  section2: Section2,
  section3: Section3,
  section4: Section4,
};

const initialFormData = {
  English: {
    section1: {
      heading:
        "<p>Our Trusted <span style='color:#d30c0b;'>Partnerships</span> Across the <span style='color:#d30c0b;'>Globe</span></p>",
      description: "Connecting Expertise, Delivering Excellence.",
      buttonText: "Book a session today!",
      imageUrl: "https://spectreco.com/wp-content/uploads/2025/01/partner.jpg",
    },
    section2: {
      text: "At Spectreco, we believe in the power of collaboration. Our trusted partners, resellers, and distributors across various regions enable us to extend our reach and deliver top-tier solutions tailored to local markets. Together, we create value, foster innovation, and achieve remarkable outcomes for our clients worldwide.",
    },
    section3: {
      heading: "Our <span style='color:#d30c0b;'>Partner</span>",
      components: [
        {
          title: "Focus Regions:",
          imageUrl:
            "https://spectreco.com/wp-content/uploads/2025/01/bridge.png",
          text: "Pakistan, UK and Saudi Arabia",
        },
        {
          title: "Focus Regions:",
          imageUrl: "https://spectreco.com/wp-content/uploads/2025/01/exd.png",
          text: "Pakistan and Saudi Arabia",
        },
        {
          title: "Focus Regions:",
          imageUrl: "https://spectreco.com/wp-content/uploads/2025/01/iam.png",
          text: "Nordic Countries (Denmark, Finland, Iceland, Norway, Sweden)",
        },
        {
          title: "Mr Saleem Ahmad Ranjha",
          imageUrl:
            "https://spectreco.com/wp-content/uploads/2025/01/saleem-ranjha.png",
          url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///80OkAuNTspMDcmLjWkpqmQk5VvcnagoaTl5eYdJi6EhokkLDOxs7XR0tMgKDD4+Pjy8vNYXGFSV1tFS1BpbXGJjI8YIird3t9dYWU3PUOnqat3en4+REnJysu4urwMGSMADRpkaGy2uLmYm53q6+sGFSA7kDe/AAAEZUlEQVR4nO2dbVejMBBGJVCLSAkttNS+WFfp/v+fuLWeXSsmE9zONIHz3HP8BjLXpAkzSerdHQAAAAAAAAAAAAAAAAAAAAif8h3fQYhRFu3rPk5UvWwL37FIUG5rHavoHRXrauY7Hnae9/mH3gcqr0fWjqvm0u/s2LS+g+Jkp6PvZDvfYfGxyw2CUZQ/+g6MizQzCkaRTn2HxsPaJnhSXPsOjoWn7iBzMdwsfAfHQWFvwihqnn2Hx8DU3oSnRnz1Hd71zDeE4Enx6DvAq3k2zxR/yQ++A7yaNCEN45XvAK/mMaZ76dR3gFdDDjQnwyffAV7N0mE4/BlxN/o2XDk+h8NPMLaOsXT4WWJhSg0/yYf/2lbuScNo7jvA6yEnxBF8DE/pYUMYNqOoR03tjRgvfQfHwpEwfPAdHA8z23CqR1MXXpkV9b3vwPh4NCnq4SdOF6T5t5p3svUdFC9Fpb+sW2SLcRQSLznUOlFKRaefRFfDL16YWE+WVb2vq+l2JJOEkXI+3iVgAAAAAIBBcyzsGF5Q18Tl9je+8rg+8+CjOpm+5DZeDEnwa2O9/Jfxjb0sJrtFvVHJ6Yo42lfT9vnGmhN7XT821DGI5bjsu+HDdqHzc1b2L/VUca6r7S1Xz+UM57OnLDFerpJsebv1AinDY7vXxNKdul2aLWTYKnpV632LZ3WbUomI4cHpd3ZsVrdIuAUM51Nqo9UlSXWDigm/YbGnF5YvUZH8iMNu+Pat+EoqavEBh9swpZbrTDTSisyGk58Knu4T7qi8hm/0vgAzSnbWYDV0bHywGdaikwanYbn5ySBz8SDR/QKMhvNd/2niK6KbkfkM41mfFxkjaj8Iw2vIBU8+hGEYbeTS4kAMBRsxEMNoIzZjhGIo934aiqHcZt1QDKNGqjoVjGEutQUrGEOxI0jBGIpNiXKG6qPOrfrekQvtZhUyVHm0eJy8HWbprorNdeEuyWRAhip7mn1W0dZp3SdvlNpzLWGoF50OV85id2IldUCH31AlhnF/PnU3o9BQw24Y1+Yqb+tUzGXKw9yG8cLWEqlLUcsMpsyGqrZ3tRV9YFXqxCqzYUJ9loiT8ed7ZfYl8xrSOdADvWIjdI6M1dBVFrwna1Wm54VmqByj4Zz++8gcD+A0dId4T038scy3qXAaJs4FiDXVTcM37FOIWBD3h2/YJ0tviW4avmGfSktBzPrhG/ZZfDgOuZf2y+/qARv2y9FficWr0A37vTgTR6uDN+yX/LTE80I3zHptOCC+xSF8w14p+sw+XcDwP4FhBxg6gSE/MOwAQycw5AeGHWDoBIb8wLADDJ3AkB8YdoChExjyA8MOMHQCQ35g2AGGTmDIDww7wNAJDPmBYQcYOoEhPzDsAEMnMOQHhh1g6ASG/MCwAwydwJAfGHYYoGHaJDYaw2G7pbZe/ruf4Yv1F2QyhkWbWjF8i9qb/eq213F66nnj/Pc2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH75Axs6YhKVLxuHAAAAAElFTkSuQmCC",
        },
      ],
    },
    section4: {
      heading: "Looking to collaborate in your region?",
      buttonText: "Contact Us",
      text: "to join Spectreco's growing network of partners.",
      imageUrl:
        "https://spectreco.com/wp-content/uploads/2024/06/built-cta-2048x484.jpg",
    },
  },
};

export default function PartnerPage() {
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
