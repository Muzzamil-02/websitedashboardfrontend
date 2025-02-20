import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const Section0 = ({ formData, onFieldChange, slug }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {slug}
        </Typography>
        <TextField
          fullWidth
          label="Main Heading"
          name="mainHeading"
          value={formData.mainHeading}
          onChange={(e) => onFieldChange("mainHeading", e.target.value)}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default Section0;
