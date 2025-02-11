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
            name="heading"
            value={formData.heading}
            onChange={(e) =>
              onFieldChange("section3", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="SubHeading"
            name="subheading"
            value={formData.subheading}
            onChange={(e) =>
              onFieldChange("section3", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Text"
            name="text"
            value={formData.text}
            onChange={(e) =>
              onFieldChange("section3", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={(e) =>
              onFieldChange("section3", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section3;
