"use client";

import { Grid, TextField, Typography, Box, Paper, Button } from "@mui/material";

const Section8 = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Section 8
      </Typography>

      <Grid container spacing={4}>
        {Object.keys(formData).map((key) => (
          <Grid item xs={12} md={6} key={key}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              {/* Main Heading */}
              <Typography variant="h6">{formData[key].mainHeading}</Typography>

              <TextField
                fullWidth
                label="Main Heading"
                name={`${key}.mainHeading`}
                value={formData[key].mainHeading}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Subheading */}
              <TextField
                fullWidth
                label="Heading"
                name={`${key}.Heading`}
                value={formData[key].Heading}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Description */}
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Text"
                name={`${key}.Text`}
                value={formData[key].Text}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Image URL Field Only (No Preview) */}
              <TextField
                fullWidth
                label="Image URL"
                name={`${key}.imageSrc`}
                value={formData[key].imageSrc}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Button Text */}
              <TextField
                fullWidth
                label="Button Text"
                name={`${key}.buttonText`}
                value={formData[key].buttonText}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section8;
