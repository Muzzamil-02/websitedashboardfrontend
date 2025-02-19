"use client";

import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, Tabs, Tab } from "@mui/material";
import { Formik, Form } from "formik";
import Sidebar from "@/components/Sidebar";
import { homeEditData, homeGetData } from "@/services/home/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
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
import screendata from "@/components/home/ScreenData";
import globalPresence from "@/components/home/GlobalPresence";
import ServiceCard from "@/components/home/ServiceCard";
import FaceCardSection from "@/components/home/FaceCardSection";
import newteamsection from "@/components/home/NewTeamSection";

const sectionComponents = {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
  Section13,
  screendata,
  globalPresence,
  ServiceCard,
  FaceCardSection,
  newteamsection,
};

export default function Home() {
  const [languages] = useState([
    { label: "English", code: "en" },
    { label: "Finnish", code: "fn" },
    { label: "Arabic", code: "ar" },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    homeGetData(selectedLanguage)
      .then((data) => {
        if (data) {
          setInitialValues(JsonFormatter(data));
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedLanguage]);

  const handleSaveChanges = (values) => {
    console.log("Form Data Submitted:", values);
    alert("Form submitted! Check console for data.");
    const formattedData = JsonToSLugFormatter(values);
    homeEditData(formattedData, selectedLanguage);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f8f9fc" }}>
      <Sidebar />
      <Container sx={{ flexGrow: 1, padding: 3 }}>
        <Tabs
          value={selectedLanguage}
          onChange={(event, newValue) => setSelectedLanguage(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {languages.map((lang) => (
            <Tab key={lang.code} label={lang.label} value={lang.code} />
          ))}
        </Tabs>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={handleSaveChanges}
        >
          {({ values, handleBlur, setFieldValue }) => (
            <Form>
              <Paper sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
                {Object.keys(values || {}).map((section) => {
                  const Component = sectionComponents[section];

                  return Component ? (
                    <Box key={section} sx={{ marginBottom: 2 }}>
                      <Component
                        slug={section}
                        formData={values[section]}
                        onFieldChange={(field, value) =>
                          setFieldValue(`${section}.${field}`, value)
                        }
                        onBlur={handleBlur}
                      />
                    </Box>
                  ) : null;
                })}

                <Box textAlign="center" sx={{ marginTop: 3 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ padding: "10px 20px", fontSize: "16px" }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Paper>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
