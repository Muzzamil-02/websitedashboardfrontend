"use client";

import { Grid, TextField, Typography, Box } from "@mui/material";

const Section5 = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Section 5
      </Typography>

      <Grid container spacing={2}>
        {/* Heading Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) =>
              onFieldChange("section5", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Right Section</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Right Button Text"
            name="right.button"
            value={formData.right.button}
            onChange={(e) =>
              onFieldChange("section5", "right.button", e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Dynamically Render Right Section Items */}
        {Object.keys(formData.right).map(
          (key) =>
            key !== "button" && (
              <Grid item xs={4} key={key}>
                <TextField
                  fullWidth
                  label={`${formData.right[key].text} Image URL`}
                  name={`right.${key}.imgURL`}
                  value={formData.right[key].imgURL}
                  onChange={(e) =>
                    onFieldChange(
                      "section5",
                      `right.${key}.imgURL`,
                      e.target.value
                    )
                  }
                  variant="outlined"
                />
              </Grid>
            )
        )}

        {/* Left Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Left Section</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Left Button Text"
            name="left.button"
            value={formData.left.button}
            onChange={(e) =>
              onFieldChange("section5", "left.button", e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Dynamically Render Left Section Items */}
        {Object.keys(formData.left).map(
          (key) =>
            key !== "button" && (
              <Grid item xs={4} key={key}>
                <TextField
                  fullWidth
                  label={`${formData.left[key].text} Image URL`}
                  name={`left.${key}.imgURL`}
                  value={formData.left[key].imgURL}
                  onChange={(e) =>
                    onFieldChange(
                      "section5",
                      `left.${key}.imgURL`,
                      e.target.value
                    )
                  }
                  variant="outlined"
                />
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default Section5;
