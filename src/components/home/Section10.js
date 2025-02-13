"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";
import parse from "html-react-parser"; // Install this package to parse HTML

const Section10 = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Main Heading */}
      <Typography variant="h5" gutterBottom>
        section10
      </Typography>

      {/* Main Heading Input */}
      <TextField
        fullWidth
        label="Main Heading"
        name="mainHeading"
        value={formData.mainHeading}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Heading Input with HTML Parsing Preview */}
      <TextField
        fullWidth
        label="Heading (HTML)"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 1 }}
      />

      {/* Subheading Input */}
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Subheading"
        name="subHeading"
        value={formData.subHeading}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 3 }}
      />

      <Grid container spacing={2}>
        {formData.component.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              {/* Title Input */}
              <TextField
                fullWidth
                label="Title"
                name={`component.${index}.title`}
                value={item.title}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Description Input */}
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Description"
                name={`component.${index}.description`}
                value={item.description}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Image URL Input */}
              <TextField
                fullWidth
                label="Image URL"
                name={`component.${index}.imageURL`}
                value={item.imageURL}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section10;
