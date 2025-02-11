"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";
import parse from "html-react-parser"; // Install this package to parse HTML

const Section10 = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Main Heading */}
      <Typography variant="h5" gutterBottom>
        {formData.mainHeading || "Advisory"}
      </Typography>

      {/* Main Heading Input */}
      <TextField
        fullWidth
        label="Main Heading"
        name="mainHeading"
        value={formData.mainHeading}
        onChange={(e) =>
          onFieldChange("section10", e.target.name, e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Heading Input with HTML Parsing Preview */}
      <TextField
        fullWidth
        label="Heading (HTML)"
        name="heading"
        value={formData.heading}
        onChange={(e) =>
          onFieldChange("section10", e.target.name, e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 1 }}
      />
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: 2,
          marginBottom: 3,
        }}
      >
        <Typography variant="body2">Preview:</Typography>
        {parse(formData.heading)}
      </Box>

      {/* Subheading Input */}
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Subheading"
        name="subHeading"
        value={formData.subHeading}
        onChange={(e) =>
          onFieldChange("section10", e.target.name, e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 3 }}
      />

      {/* Advisory Components Section */}
      <Typography variant="h6">Advisory Components</Typography>

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
                onChange={(e) => {
                  const updatedComponents = [...formData.component];
                  updatedComponents[index].title = e.target.value;
                  onFieldChange("section10", "component", updatedComponents);
                }}
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
                onChange={(e) => {
                  const updatedComponents = [...formData.component];
                  updatedComponents[index].description = e.target.value;
                  onFieldChange("section10", "component", updatedComponents);
                }}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Image URL Input */}
              <TextField
                fullWidth
                label="Image URL"
                name={`component.${index}.imageURL`}
                value={item.imageURL}
                onChange={(e) => {
                  const updatedComponents = [...formData.component];
                  updatedComponents[index].imageURL = e.target.value;
                  onFieldChange("section10", "component", updatedComponents);
                }}
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
