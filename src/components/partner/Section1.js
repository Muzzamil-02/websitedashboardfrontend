"use client";

import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange, slug }) => {
  return (
    <Grid container>
      <Typography variant="h5" gutterBottom>
        Our Trusted Partnerships Section
      </Typography>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Heading"
          name="heading"
          value={formData.heading}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Button Text"
          name="buttonText"
          value={formData.buttonText}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default Section1;
