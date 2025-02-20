"use client";

import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const Section3 = ({ formData, onFieldChange, slug }) => {
  return (
    <Grid container spacing={2}>
      <Typography variant="h5" gutterBottom>
        {slug}
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
          <TextField
            fullWidth
            label="Title"
            name={`components[${index}].title`}
            value={component.title}
            onChange={(e) =>
              onFieldChange(`components[${index}].title`, e.target.value)
            }
            variant="outlined"
            multiline
          />
          <TextField
            fullWidth
            label="Text"
            name={`components[${index}].text`}
            value={component.text}
            onChange={(e) =>
              onFieldChange(`components[${index}].text`, e.target.value)
            }
            variant="outlined"
          />
          <TextField
            fullWidth
            label="ImageUrl"
            name={`components[${index}].imageUrl`}
            value={component.imageUrl}
            onChange={(e) =>
              onFieldChange(`components[${index}].imageUrl`, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Section3;
