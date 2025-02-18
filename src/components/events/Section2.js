"use client";

import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Box,
} from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  console.log("formdat", formData);
  const handleAddArticle = () => {
    console.log("in");
    const newArticle = {
      title: "",
      subtitle: "",

      image: "",
      videoLink: "",
    };
    onFieldChange("sections", [...(formData?.sections || []), newArticle]);
  };
  return (
    <>
      <Grid container spacing={2}>
        {formData.sections.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                {/* Editable TextField for Title */}
                <TextField
                  fullWidth
                  label="Event Title"
                  name={`sections[${index}].title`}
                  value={event.title}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].title`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />

                {/* Editable TextField for Subtitle */}
                <TextField
                  fullWidth
                  label="Event Subtitle"
                  name={`sections[${index}].subtitle`}
                  value={event.subtitle}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].subtitle`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />

                {/* Editable TextField for Image URL */}
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`sections[${index}].image`}
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
                  name={`sections[${index}].videoLink`}
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Add Article Button */}
      <Box textAlign="center">
        <Box textAlign="center">
          <Button variant="contained" onClick={handleAddArticle}>
            Add New Article
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Section2;
