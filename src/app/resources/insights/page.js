"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Button,
  Box,
  Tabs,
  Tab,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import Sidebar from "@/components/Sidebar";
import {
  articleEditData,
  articleGetData,
  homeEditData,
  homeGetData,
} from "@/services/NewsPage/service.js";
import { JsonFormatter, JsonToSLugFormatter } from "@/lib/helpers/helper";
import Section1 from "@/components/NewsPage/Section1";

// const sectionComponents = {
//   section1,
// };

export default function Home() {
  const [languages] = useState([
    { label: "English", code: "en" },
    { label: "Finnish", code: "fn" },
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [initialValues, setInitialValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await articleGetData();
        console.log("Articles data", data);
        if (data) {
          setInitialValues({ articles: data });
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
    console.log("values", values);
    articleEditData(values?.articles)
      .then((res) => {
        if (res) {
          toast.success(`Data updated Successfully ${res}`);
        }
      })
      .catch(() => {
        toast.error("Failed to save data.");
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
                  <Section1
                    formData={values}
                    onFieldChange={(field, value) =>
                      setFieldValue(field, value)
                    }
                    slug="Section 1"
                  />

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
