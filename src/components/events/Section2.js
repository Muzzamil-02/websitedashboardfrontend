"use client";

import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
} from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  const handleAddArticle = () => {
    const newArticle = {
      title: "",
      subtitle: "",
      image: "",
      videoLink: "",
    };
    onFieldChange("sections", [...(formData?.sections || []), newArticle]);
  };

  const handleDeleteArticle = (index) => {
    const updatedSections = [...formData.sections];
    updatedSections.splice(index, 1);
    onFieldChange("sections", updatedSections);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>
      <Grid container spacing={2}>
        {formData.sections.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <TextField
                  fullWidth
                  label="Event Title"
                  value={event.title}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].title`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />

                <TextField
                  fullWidth
                  label="Event Subtitle"
                  value={event.subtitle}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].subtitle`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  fullWidth
                  label="Image URL"
                  value={event.image}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].image`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  fullWidth
                  label="Video Link"
                  value={event.videoLink}
                  onChange={(e) =>
                    onFieldChange(
                      `sections[${index}].videoLink`,
                      e.target.value
                    )
                  }
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteArticle(index)}
                  sx={{ background: "#d30c0b", marginTop: 1 }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="right">
        <Button
          variant="contained"
          onClick={handleAddArticle}
          sx={{ background: "#d30c0b" }}
        >
          Add +
        </Button>
      </Box>
    </>
  );
};

export default Section2;
