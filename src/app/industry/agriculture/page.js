"use client";

import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, Tabs, Tab } from "@mui/material";
import { Formik, Form } from "formik";
import Sidebar from "@/components/Sidebar";
import { homeEditData, homeGetData } from "@/services/industry/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
import section1 from "@/components/industry/Section1";
import section2 from "@/components/industry/Section2";
import section3 from "@/components/industry/Section3";
import section4 from "@/components/industry/Section4";
import section5 from "@/components/industry/Section5";
import section6 from "@/components/industry/Section6";
import section7 from "@/components/industry/Section7";
import section8 from "@/components/industry/Section8";
import section9 from "@/components/industry/Section9";
import section10 from "@/components/industry/Section10";

import section12 from "@/components/industry/Section12";
import keyskaeholderslider from "@/components/industry/KeyStakeholderSlider";

import secondSwiper from "@/components/industry/Section12";
import { Agriculture } from "@mui/icons-material";

const sectionComponents = {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,

  section12,

  keyskaeholderslider,
  secondSwiper,
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
    homeGetData(selectedLanguage, "agriculture")
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
    homeEditData(formattedData, selectedLanguage, "agriculture");
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
