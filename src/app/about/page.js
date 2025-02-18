"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Button,
  Box,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Sidebar from "@/components/Sidebar";
import section1 from "@/components/about/Section1";
import section2 from "@/components/about/Section2";
import section3 from "@/components/about/Section3";
import section4 from "@/components/about/Section4";
import section5 from "@/components/about/Section5";

import { homeEditData, homeGetData } from "@/services/about/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
import ScreenData from "@/components/home/ScreenData";

const sectionComponents = {
  section1,
  section2,
  section3,
  section4,
  section5,
};

export default function About() {
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
    <Box sx={{ display: "flex", backgroundColor: "#f8f9fc" }}>
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
