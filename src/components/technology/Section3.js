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
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        {Object.keys(formData.cardData || {}).map((key) => (
          <Grid container spacing={2} key={key} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">{key}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageURL"
                value={formData.cardData[key].imageURL}
                onChange={(e) =>
                  onFieldChange(
                    `section3.cardData.${key}`,
                    "imageURL",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Heading"
                name="heading"
                value={formData.cardData[key].heading}
                onChange={(e) =>
                  onFieldChange(
                    `section3.cardData.${key}`,
                    "heading",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.cardData[key].description}
                onChange={(e) =>
                  onFieldChange(
                    `section3.cardData.${key}`,
                    "description",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section3;
