"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section3 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 3
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
            label="SubHeading"
            name="subHeading"
            value={formData.subHeading}
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

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="imageUrl"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section3;
