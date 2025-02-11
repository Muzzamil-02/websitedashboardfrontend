"use client";

import React from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <Grid container spacing={2}>
      {/* Editable TextField for Heading */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Heading"
          name="heading"
          value={formData.heading}
          onChange={(e) => onFieldChange("section1", "heading", e.target.value)}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
      </Grid>

      {/* Editable TextField for Description */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) =>
            onFieldChange("section1", "description", e.target.value)
          }
          variant="outlined"
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
      </Grid>

      {/* Button Text (optional) */}
    </Grid>
  );
};

export default Section1;
