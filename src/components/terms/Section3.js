import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const Section3 = ({ formData, onFieldChange, slug }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {slug}
        </Typography>
      </Grid>
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      {formData.description1 && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 1"
            name="description1"
            value={formData.description1}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      )}
      {formData.description2 && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 2"
            name="description2"
            value={formData.description2}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      )}
      {formData.description3 && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 3"
            name="description3"
            value={formData.description2}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Section3;
