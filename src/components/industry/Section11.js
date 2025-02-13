"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section11 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 11
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) =>
              onFieldChange("section10", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subheading"
            name="subHeading"
            value={formData.subHeading}
            onChange={(e) =>
              onFieldChange("section10", e.target.name, e.target.value)
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
              onFieldChange("section10", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image URL"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={(e) =>
              onFieldChange("section10", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section11;
