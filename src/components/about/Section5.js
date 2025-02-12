"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section5 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 5
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              onFieldChange("section5", e.target.name, e.target.value)
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
              onFieldChange("section5", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section5;
