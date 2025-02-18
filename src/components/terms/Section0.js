import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const Section0 = ({ formData, onFieldChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          section0
        </Typography>
        <TextField
          fullWidth
          label="Main Heading"
          name="mainheading"
          value={formData.heading}
          onChange={(e) => onFieldChange("mainheading", e.target.value)}
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
