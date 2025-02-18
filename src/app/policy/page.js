"use client";

import React, { useEffect, useState } from "react";
import { Container, Paper, Button, Box, Tabs, Tab } from "@mui/material";
import { Formik, Form } from "formik";
import Sidebar from "@/components/Sidebar";
import { homeEditData, homeGetData } from "@/services/policy/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
import section0 from "@/components/privacy/Section0";
import section1 from "@/components/privacy/Section1";
import section2 from "@/components/privacy/Section2";
import section3 from "@/components/privacy/Section3";
import section4 from "@/components/privacy/Section4";
import section5 from "@/components/privacy/Section5";
import section6 from "@/components/privacy/Section6";
import section7 from "@/components/privacy/Section7";
import section8 from "@/components/privacy/Section8";
import section9 from "@/components/privacy/Section9";
import section10 from "@/components/privacy/Section10";
import section11 from "@/components/privacy/Section11";
import section12 from "@/components/privacy/Section12";
import section13 from "@/components/privacy/Section13";
import section14 from "@/components/privacy/Section14";
import section15 from "@/components/privacy/Section15";
import section16 from "@/components/privacy/Section16";
import section17 from "@/components/privacy/Section17";
import section18 from "@/components/privacy/Section18";
import section19 from "@/components/privacy/Section19";

const sectionComponents = {
  section0,
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
  section11,
  section12,
  section13,
  section14,
  section15,
  section16,
  section17,
  section18,
  section19,
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
