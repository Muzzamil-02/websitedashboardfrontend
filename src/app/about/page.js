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
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
import Section4 from "@/components/about/Section4";
import Section5 from "@/components/about/Section5";

import { homeEditData, homeGetData } from "@/services/home/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
import ScreenData from "@/components/home/ScreenData";

const sectionComponents = {
  Section1,
  Section2,
  Section3,
  // Section4,
  Section5,
};

export default function Home() {
  const [languages, setLanguages] = useState(["English", "Finnish"]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [initialValues, setInitialValues] = useState({});

  useEffect(() => {
    homeGetData()
      .then((data) => {
        if (data) {
          setInitialValues(JsonFormatter(data));
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSaveChanges = (values) => {
    console.log("Form Data Submitted:", values);
    alert("Form submitted! Check console for data.");
    const formatteddata = JsonToSLugFormatter(values);
    homeEditData(formatteddata);
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
            <Tab key={lang} label={lang} value={lang} />
          ))}
        </Tabs>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          onSubmit={handleSaveChanges}
        >
          {({ values, handleChange, handleBlur, setFieldValue }) => (
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
