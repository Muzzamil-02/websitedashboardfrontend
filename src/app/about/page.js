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
  CircularProgress,
  colors,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import section1 from "@/components/about/Section1";
import section2 from "@/components/about/Section2";
import section3 from "@/components/about/Section3";
import section4 from "@/components/about/Section4";
import section5 from "@/components/about/Section5";
import TeamSection from "@/components/about/Section6";

import { homeEditData, homeGetData } from "@/services/about/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
import ScreenData from "@/components/home/ScreenData";

const sectionComponents = {
  section1,
  section2,
  section3,
  section4,
  section5,
  TeamSection,
};

export default function About() {
  const [languages] = useState([
    { label: "English", code: "en" },
    { label: "Finnish", code: "fn" },
    { label: "Arabic", code: "ar" },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [initialValues, setInitialValues] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await homeGetData(selectedLanguage);
        if (data) {
          setInitialValues(JsonFormatter(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedLanguage]);

  const handleSaveChanges = (values) => {
    const formattedData = JsonToSLugFormatter(values);

    homeEditData(formattedData, selectedLanguage)
      .then((res) => {
        if (res) {
          toast.success("Data updated Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <CircularProgress size={60} sx={{ color: "#d30c0b" }} />
          </Box>
        ) : (
          <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={handleSaveChanges}
          >
            {({ values, handleBlur, setFieldValue }) => (
              <Form>
                <Paper sx={{ padding: 4, borderRadius: 3, boxShadow: 3 }}>
                  <Box sx={{ textAlign: "center", paddingBottom: 3 }}>
                    <Typography variant="h4" gutterBottom>
                      About Page Sections
                    </Typography>
                  </Box>
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
                      sx={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        background: "#d30c0b",
                        "&:hover": { background: "#a90a0a" },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Paper>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    </Box>
  );
}
