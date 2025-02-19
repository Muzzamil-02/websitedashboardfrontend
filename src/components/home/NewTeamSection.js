import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const NewTeamSection = ({ formData, onFieldChange, slug }) => {
  if (!formData || Object.keys(formData).length === 0) return null;

  console.log("team section");

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Main Heading"
            name="mainHeading"
            value={formData.mainHeading}
            onChange={(e) => onFieldChange("mainHeading", e.target.value)}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Sub Heading"
            name="subHeading"
            value={formData.subHeading}
            onChange={(e) => onFieldChange("subHeading", e.target.value)}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 1"
            name="description1"
            value={formData.description1}
            onChange={(e) => onFieldChange("description1", e.target.value)}
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 2"
            name="description2"
            value={formData.description2}
            onChange={(e) => onFieldChange("description2", e.target.value)}
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) => onFieldChange("email", e.target.value)}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => onFieldChange("imageUrl", e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default NewTeamSection;
