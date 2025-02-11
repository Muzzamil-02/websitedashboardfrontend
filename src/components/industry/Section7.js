"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section7 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 7
      </Typography>
      {formData.component?.map((component, index) => (
        <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
          <Grid item xs={12}>
            <Typography variant="h6">{component.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name={`component[${index}].description`}
              value={component.description}
              onChange={(e) =>
                onFieldChange(
                  `section7.component[${index}]`,
                  "description",
                  e.target.value
                )
              }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Logo URL"
              name={`component[${index}].logoURL`}
              value={component.logoURL}
              onChange={(e) =>
                onFieldChange(
                  `section7.component[${index}]`,
                  "logoURL",
                  e.target.value
                )
              }
              variant="outlined"
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Section7;
