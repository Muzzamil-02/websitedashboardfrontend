"use client";

import React from "react";
import { Grid, TextField, Typography, Box } from "@mui/material";

const SecondSwiper = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Second Swiper
      </Typography>

      {/* Main Heading */}
      <TextField
        fullWidth
        label="Main Heading"
        name="mainHeading"
        value={formData.mainHeading}
        onChange={(e) =>
          onFieldChange("secondSwiper", "mainHeading", e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Heading */}
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) =>
          onFieldChange("secondSwiper", "heading", e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Description */}
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={(e) =>
          onFieldChange("secondSwiper", "description", e.target.value)
        }
        variant="outlined"
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />

      {formData.components.map((component, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={`Title ${index + 1}`}
              name={`components[${index}].title`}
              value={component.title}
              onChange={(e) =>
                onFieldChange(
                  "secondSwiper",
                  `components[${index}]`,
                  "title",
                  e.target.value
                )
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
                  "secondSwiper",
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
                  "secondSwiper",
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
