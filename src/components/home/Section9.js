"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";

const Section9 = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Section 9 - Edit Image URLs
      </Typography>

      <Grid container spacing={2}>
        {formData.urls.map((url, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
            <Paper
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
              }}
            >
              {/* TextField to edit URLs */}
              <TextField
                fullWidth
                label={`Image URL ${index + 1}`}
                value={url}
                onChange={(e) => {
                  const updatedUrls = [...formData.urls];
                  updatedUrls[index] = e.target.value;
                  onFieldChange("section9", "urls", updatedUrls);
                }}
                variant="outlined"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section9;
