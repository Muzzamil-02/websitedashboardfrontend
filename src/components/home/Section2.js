"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section2 = ({ formData, onFieldChange, slug }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Center Text Section
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="Heading"
            value={formData.Heading}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text"
            name="Text"
            value={formData.Text}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section2;
