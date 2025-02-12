"use client";

import React from "react";
import { useState } from "react";
import {
  Container,
  Paper,
  Button,
  Box,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Sidebar from "@/components/Sidebar";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Section7 from "@/components/home/Section7";
import Section8 from "@/components/home/Section8";
import Section9 from "@/components/home/Section9";
import Section10 from "@/components/home/Section10";
import Section13 from "@/components/home/Section13";
import ScreenData from "@/components/home/ScreenData";

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
  section13: Section13,
  screendata: ScreenData,
};

export default function Home() {
  const [languages, setLanguages] = useState(["English", "Finnish"]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  // const [formData, setFormData] = useState({
  //   English: {
  //     section1: {
  //       heading: "",
  //       text: "",
  //       buttonText: "",
  //       imageUrl: "",
  //     },
  //     section2: {
  //       heading: "",
  //       text: "",
  //     },
  //     section3: {
  //       heading: "",
  //       subheading: "",

  //       imageUrl: "",
  //     },
  //     section4: {
  //       title: "",
  //       heading: "",
  //       text: "",
  //     },
  //     section5: {
  //       heading: "",
  //       right: {
  //         button: "",
  //         transportation: { imgURL: "", alt: "", text: "" },
  //         financialInstitutions: { imgURL: "", alt: "", text: "" },
  //         capi: { imgURL: "", alt: "", text: "" },
  //         insuranceCompany: { imgURL: "", alt: "", text: "" },
  //         agriculture: { imgURL: "", alt: "", text: "" },
  //         Energy: { imgURL: "", alt: "", text: "" },
  //       },
  //       left: {
  //         button: "",
  //         hospitality: { imgURL: "", alt: "", text: "" },
  //         infrastructure: { imgURL: "", alt: "", text: "" },
  //         realEstate: { imgURL: "", alt: "", text: "" },
  //       },
  //     },
  //     section6: {
  //       title: "Technology",
  //       Heading: "Cloud-Native AI-Driven Platform",
  //       Text: "Streamline your ESG journey effortlessly with our intelligent platform. Utilizing built-in benchmarks and AI-driven analytics, easily set goals, select interventions, and track progress from development to reporting.",
  //       ServiceCard: {
  //         technology: {
  //           title: "Technology",
  //           desc: "<p class='service-description'>Leverage <a href='/technology/'>technology</a> and ESG consulting to facilitate the transition, enabling streamlined data management.</p>",
  //         },
  //         advisory: {
  //           title: "Advisory",
  //           desc: "<p class='service-description'>Optimize your ESG transition sustainability strategy with our <a href='/advisory/'>ESG Advisory consulting</a>.</p>",
  //         },
  //         Data: {
  //           title: "Data & Insights",
  //           desc: "<p class='service-description'>Drive progress through seamless transition with our <a href='/research-publications/'>research and publication</a>.</p>",
  //         },
  //         capacity: {
  //           title: "Capacity Building",
  //           desc: "<p class='service-description'>Empower your team with the expertise to navigate ESG transition through The Transition Talent program.</p>",
  //         },
  //       },
  //     },
  //     section7: {
  //       heading: "Technology Features",
  //       cardData: {
  //         tech1: {
  //           imageURL: "/images/tech1.svg",
  //           heading: "Recommendation Engine",
  //           description:
  //             "Maximize ESG impact with tailored, industry-specific interventions ensuring simplicity and compliance across all jurisdictions.",
  //         },
  //         tech2: {
  //           imageURL: "/images/tech2.svg",
  //           heading: "Industry Insights",
  //           description:
  //             "Unlock ESG strategies with tailored insights and benchmarks, customized to your organization’s size and geographical presence.",
  //         },
  //         tech3: {
  //           imageURL: "/images/tech3.svg",
  //           heading: "Consolidated Reporting",
  //           description:
  //             "Track and report with pre-configured templates, ensuring compliance across various regulations, standards, and frameworks.",
  //         },
  //       },
  //     },
  //     section8: {
  //       element1: {
  //         mainHeading: "Data & Insights",
  //         Heading: "Drive informed decision-making",
  //         Text: "Utilize actionable data, insights, and research for actionable intelligence with our sustainability advisory services...",
  //         imageSrc: "",
  //         buttonText: "Learn More",
  //       },
  //       element2: {
  //         mainHeading: "Capacity Building",
  //         Heading: "Future Sustainability Leaders",
  //         Text: "“The Transition Talent” program by Spectreco offers tailored capacity-building initiatives...",
  //         imageSrc: "",
  //         buttonText: "Learn More",
  //       },
  //     },
  //     section9: {
  //       urls: [
  //         "https://spectreco.com/wp-content/uploads/2024/04/6-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/7-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/8-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/9-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/14-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/16-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/23-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/22-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/21-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/20-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/19-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/18-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/1-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/2-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/3-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/4-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/5-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/17-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/11-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/25-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/10-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/12-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/13-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/24-150x150.png",
  //       ],
  //     },
  //     section10: {
  //       mainHeading: "ADVISORY",
  //       heading:
  //         "<p>Tailored<span style='color:#d30c0b;'> industry</span> solutions</p>",
  //       subHeading: "By offering various ESG solution avenues...",
  //       component: [
  //         {
  //           title: "Community Impact",
  //           description:
  //             "Build trust within the community and enable productivity.",
  //           imageURL:
  //             "https://spectreco.com/wp-content/uploads/2024/05/Advisory1.svg",
  //         },
  //         {
  //           title: "Risk Management",
  //           description:
  //             "Identify, manage, and mitigate risks for infrastructure.",
  //           imageURL:
  //             "https://spectreco.com/wp-content/uploads/2024/05/Advisory2.svg",
  //         },
  //       ],
  //     },
  //     section13: {
  //       title: "Our",
  //       highlight: "Global",
  //       subtitle: "Presence",
  //       image: "./images/map.png",
  //       description:
  //         "We are at the forefront of driving sustainable solutions and ESG initiatives worldwide...",
  //       locations: [
  //         {
  //           name: "US",
  //           address:
  //             "Spectreco LLC, 1708 Peachtree Street NW, Suite 207, Atlanta, GA 30309, USA",
  //         },
  //         {
  //           name: "UK",
  //           address:
  //             "Spectreco LLP, 128 City Road London, EC1V 2NX, United Kingdom",
  //         },
  //         {
  //           name: "Europe",
  //           address:
  //             "Spectreco Europe Private, Unipessoal LDA, Avenida da Liberdade 129B 1250-140 Lissabon, Portugali",
  //         },
  //         {
  //           name: "Asia",
  //           address:
  //             "ESG Consulting (Private) Limited, 141-D, SLHS, Lahore, Pakistan",
  //         },
  //       ],
  //     },
  //     screendata: {
  //       steps: [
  //         {
  //           number: "1",
  //           title: "Set Baseline",
  //           description: "Enter baseline data, define company size...",
  //         },
  //         {
  //           number: "2",
  //           title: "Recommended Interventions",
  //           description:
  //             "Our recommendation engine gives tailored interventions...",
  //         },
  //         {
  //           number: "3",
  //           title: "Measure, Track, Report",
  //           description:
  //             "Monitor and report your progress towards ESG goals...",
  //         },
  //       ],
  //       image: "./images/screen.png",
  //       button: {
  //         text: "Book a Demo to Explore Spectreco’s ESG Solutions",
  //         link: "/contactus",
  //       },
  //       footer: {
  //         text: "Need more information? Check out our step-by-step video guide",
  //         link: "/technology",
  //         linkText: "here.",
  //       },
  //     },
  //   },
  //   Finnish: {
  //     section1: {
  //       heading: "",
  //       text: "",
  //       buttonText: "",
  //       imageUrl: "",
  //     },
  //     section2: {
  //       heading: "",
  //       text: "",
  //     },
  //     section3: {
  //       heading: "",
  //       subheading: "",

  //       imageUrl: "",
  //     },
  //     section4: {
  //       title: "",
  //       heading: "",
  //       text: "",
  //     },
  //     section5: {
  //       heading: "",
  //       right: {
  //         button: "",
  //         transportation: { imgURL: "", alt: "", text: "" },
  //         financialInstitutions: { imgURL: "", alt: "", text: "" },
  //         capi: { imgURL: "", alt: "", text: "" },
  //         insuranceCompany: { imgURL: "", alt: "", text: "" },
  //         agriculture: { imgURL: "", alt: "", text: "" },
  //         Energy: { imgURL: "", alt: "", text: "" },
  //       },
  //       left: {
  //         button: "",
  //         hospitality: { imgURL: "", alt: "", text: "" },
  //         infrastructure: { imgURL: "", alt: "", text: "" },
  //         realEstate: { imgURL: "", alt: "", text: "" },
  //       },
  //     },
  //     section6: {
  //       title: "Technology",
  //       Heading: "Cloud-Native AI-Driven Platform",
  //       Text: "Streamline your ESG journey effortlessly with our intelligent platform. Utilizing built-in benchmarks and AI-driven analytics, easily set goals, select interventions, and track progress from development to reporting.",
  //       ServiceCard: {
  //         technology: {
  //           title: "Technology",
  //           desc: "<p class='service-description'>Leverage <a href='/technology/'>technology</a> and ESG consulting to facilitate the transition, enabling streamlined data management.</p>",
  //         },
  //         advisory: {
  //           title: "Advisory",
  //           desc: "<p class='service-description'>Optimize your ESG transition sustainability strategy with our <a href='/advisory/'>ESG Advisory consulting</a>.</p>",
  //         },
  //         Data: {
  //           title: "Data & Insights",
  //           desc: "<p class='service-description'>Drive progress through seamless transition with our <a href='/research-publications/'>research and publication</a>.</p>",
  //         },
  //         capacity: {
  //           title: "Capacity Building",
  //           desc: "<p class='service-description'>Empower your team with the expertise to navigate ESG transition through The Transition Talent program.</p>",
  //         },
  //       },
  //     },
  //     section7: {
  //       heading: "Technology Features",
  //       cardData: {
  //         tech1: {
  //           imageURL: "/images/tech1.svg",
  //           heading: "Recommendation Engine",
  //           description:
  //             "Maximize ESG impact with tailored, industry-specific interventions ensuring simplicity and compliance across all jurisdictions.",
  //         },
  //         tech2: {
  //           imageURL: "/images/tech2.svg",
  //           heading: "Industry Insights",
  //           description:
  //             "Unlock ESG strategies with tailored insights and benchmarks, customized to your organization’s size and geographical presence.",
  //         },
  //         tech3: {
  //           imageURL: "/images/tech3.svg",
  //           heading: "Consolidated Reporting",
  //           description:
  //             "Track and report with pre-configured templates, ensuring compliance across various regulations, standards, and frameworks.",
  //         },
  //       },
  //     },
  //     section8: {
  //       element1: {
  //         mainHeading: "Data & Insights",
  //         Heading: "Drive informed decision-making",
  //         Text: "Utilize actionable data, insights, and research for actionable intelligence with our sustainability advisory services...",
  //         imageSrc: "",
  //         buttonText: "Learn More",
  //       },
  //       element2: {
  //         mainHeading: "Capacity Building",
  //         Heading: "Future Sustainability Leaders",
  //         Text: "“The Transition Talent” program by Spectreco offers tailored capacity-building initiatives...",
  //         imageSrc: "",
  //         buttonText: "Learn More",
  //       },
  //     },
  //     section9: {
  //       urls: [
  //         "https://spectreco.com/wp-content/uploads/2024/04/6-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/7-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/8-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/9-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/14-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/16-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/23-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/22-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/21-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/20-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/19-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/18-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/1-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/2-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/3-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/4-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/5-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/17-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/11-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/25-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/04/10-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/12-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/13-150x150.png",
  //         "https://spectreco.com/wp-content/uploads/2024/06/24-150x150.png",
  //       ],
  //     },
  //     section10: {
  //       mainHeading: "ADVISORY",
  //       heading:
  //         "<p>Tailored<span style='color:#d30c0b;'> industry</span> solutions</p>",
  //       subHeading: "By offering various ESG solution avenues...",
  //       component: [
  //         {
  //           title: "Community Impact",
  //           description:
  //             "Build trust within the community and enable productivity.",
  //           imageURL:
  //             "https://spectreco.com/wp-content/uploads/2024/05/Advisory1.svg",
  //         },
  //         {
  //           title: "Risk Management",
  //           description:
  //             "Identify, manage, and mitigate risks for infrastructure.",
  //           imageURL:
  //             "https://spectreco.com/wp-content/uploads/2024/05/Advisory2.svg",
  //         },
  //       ],
  //     },
  //     section13: {
  //       title: "Our",
  //       highlight: "Global",
  //       subtitle: "Presence",
  //       image: "./images/map.png",
  //       description:
  //         "We are at the forefront of driving sustainable solutions and ESG initiatives worldwide...",
  //       locations: [
  //         {
  //           name: "US",
  //           address:
  //             "Spectreco LLC, 1708 Peachtree Street NW, Suite 207, Atlanta, GA 30309, USA",
  //         },
  //         {
  //           name: "UK",
  //           address:
  //             "Spectreco LLP, 128 City Road London, EC1V 2NX, United Kingdom",
  //         },
  //         {
  //           name: "Europe",
  //           address:
  //             "Spectreco Europe Private, Unipessoal LDA, Avenida da Liberdade 129B 1250-140 Lissabon, Portugali",
  //         },
  //         {
  //           name: "Asia",
  //           address:
  //             "ESG Consulting (Private) Limited, 141-D, SLHS, Lahore, Pakistan",
  //         },
  //       ],
  //     },
  //     screendata: {
  //       steps: [
  //         {
  //           number: "1",
  //           title: "Set Baseline",
  //           description: "Enter baseline data, define company size...",
  //         },
  //         {
  //           number: "2",
  //           title: "Recommended Interventions",
  //           description:
  //             "Our recommendation engine gives tailored interventions...",
  //         },
  //         {
  //           number: "3",
  //           title: "Measure, Track, Report",
  //           description:
  //             "Monitor and report your progress towards ESG goals...",
  //         },
  //       ],
  //       image: "./images/screen.png",
  //       button: {
  //         text: "Book a Demo to Explore Spectreco’s ESG Solutions",
  //         link: "/contactus",
  //       },
  //       footer: {
  //         text: "Need more information? Check out our step-by-step video guide",
  //         link: "/technology",
  //         linkText: "here.",
  //       },
  //     },
  //   },
  // });

  // const handleLanguageChange = (event, newValue) => {
  //   setSelectedLanguage(newValue);
  // };

  // const handleAddLanguage = () => {
  //   const newLanguage = prompt("Enter new language name:");
  //   if (newLanguage && !languages.includes(newLanguage)) {
  //     setLanguages([...languages, newLanguage]);
  //     setFormData({
  //       ...formData,
  //       [newLanguage]: {
  //         section1: {},
  //         section2: {},
  //         section3: {},
  //         section4: {},
  //         section5: {},
  //         section6: {},
  //         section7: {},
  //         section8: {},
  //         section9: {},
  //         section10: {},
  //         section13: {},
  //         screendata: {},
  //       },
  //     });
  //   }
  // };

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
          // onChange={handleLanguageChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {languages.map((lang) => (
            <Tab key={lang} label={lang} value={lang} />
          ))}
          {/* <IconButton onClick={handleAddLanguage}>
            <AddIcon />
          </IconButton> */}
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
