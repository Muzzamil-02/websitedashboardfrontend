"use client";

import React from "react";
import { Grid, TextField, Typography, Button, Box } from "@mui/material";

const KeyStakeholderSlider = ({ formData, onFieldChange, slug }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("heading", e.target.value)}
        variant="outlined"
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

export default KeyStakeholderSlider;
