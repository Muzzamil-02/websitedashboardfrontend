"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 1
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) =>
              onFieldChange("section1", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              onFieldChange("section1", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section1;
