import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const Section6 = ({ formData, onFieldChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">section6</Typography>
      </Grid>
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("section6", "heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) =>
            onFieldChange("section6", e.target.name, e.target.value)
          }
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default Section6;
