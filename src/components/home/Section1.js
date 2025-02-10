"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        section 1
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
            label="Text"
            name="text"
            value={formData.text}
            onChange={(e) =>
              onFieldChange("section1", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Button Text"
            name="buttonText"
            value={formData.buttonText}
            onChange={(e) =>
              onFieldChange("section1", e.target.name, e.target.value)
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
