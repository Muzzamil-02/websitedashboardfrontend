"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";

const Section9 = ({ formData, onFieldChange, slug }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      <Grid container spacing={2}>
        {formData.urls && formData.urls.length > 0 ? (
          formData.urls.map((url, index) => (
            <Grid item xs={6} md={4} lg={3} key={index}>
              <Paper
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <TextField
                  fullWidth
                  label={`Image URL ${index + 1}`}
                  name={`urls.${index}`} // Ensure proper name reference
                  value={url}
                  onChange={(e) =>
                    onFieldChange(`urls.${index}`, e.target.value)
                  }
                  variant="outlined"
                />
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography>No URLs available.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Section9;
