"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section4 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 4
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              onFieldChange("section4", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) =>
              onFieldChange("section4", e.target.name, e.target.value)
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
              onFieldChange("section4", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section4;
