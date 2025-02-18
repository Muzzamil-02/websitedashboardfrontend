"use client";

import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const Section3 = ({ formData, onFieldChange }) => {
  return (
    <Grid container spacing={2}>
      <Typography variant="h5" gutterBottom>
        section3
      </Typography>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Heading"
          name="heading"
          value={formData.heading}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
      {formData.components.map((component, index) => (
        <Grid key={index} item xs={12}>
          <Typography variant="h6">{component.title}</Typography>
          <TextField
            fullWidth
            label="Description"
            name={`components[${index}].text`}
            value={component.text}
            onChange={(e) =>
              onFieldChange(`components[${index}].text`, e.target.value)
            }
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Section3;
