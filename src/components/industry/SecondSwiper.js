"use client";

import React from "react";
import { Grid, TextField, Typography, Box } from "@mui/material";

const SecondSwiper = ({ formData, onFieldChange, slug }) => {
  console.log("swiper");
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      {/* Main Heading */}
      <TextField
        fullWidth
        label="Main Heading"
        name="mainHeading"
        value={formData.mainHeading}
        onChange={(e) => onFieldChange("mainHeading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Heading */}
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Description */}
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={(e) => onFieldChange("description", e.target.value)}
        variant="outlined"
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />

      {formData.components.map((component, index) => (
        <Grid container spacing={2} key={index} sx={{ padding: "10px" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={`Title ${index + 1}`}
              name={`components[${index}].title`}
              value={component.title}
              onChange={(e) =>
                onFieldChange(`components[${index}]`, "title", e.target.value)
              }
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label={`Description ${index + 1}`}
              name={`components[${index}].description`}
              value={component.description}
              onChange={(e) =>
                onFieldChange(
                  `components[${index}]`,
                  "description",
                  e.target.value
                )
              }
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label={`Image URL ${index + 1}`}
              name={`components[${index}].imageUrl`}
              value={component.imageUrl}
              onChange={(e) =>
                onFieldChange(
                  `components[${index}]`,
                  "imageUrl",
                  e.target.value
                )
              }
              variant="outlined"
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default SecondSwiper;
