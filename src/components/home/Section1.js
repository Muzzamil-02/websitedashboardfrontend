"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange, slug }) => {
  console.log("fo", formData);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="Heading"
            value={formData?.Heading}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text"
            name="Text"
            value={formData?.Text}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Button Text"
            name="buttonText"
            value={formData.buttonText}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="imageUrl"
            name="imageUrl"
            value={formData.imageSrc}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section1;
