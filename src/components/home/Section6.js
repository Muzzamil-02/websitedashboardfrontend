"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";
import parse from "html-react-parser"; // Install this package to parse HTML

const Section6 = ({ formData, onFieldChange, slug }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Section 6 Main Heading */}
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      <Grid container spacing={2}>
        {/* Title Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Heading Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="Heading"
            value={formData.Heading}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Text Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Text"
            name="Text"
            value={formData.Text}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>

      {/* Service Cards Section */}
      {/* <Typography variant="h5" sx={{ marginTop: 3 }}>
        Services
      </Typography> */}

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {formData.ServiceCard &&
          Object.keys(formData.ServiceCard).map((key) => (
            <Grid item xs={12} md={6} key={key}>
              <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h6">
                  {formData.ServiceCard[key].title}
                </Typography>
                <TextField
                  fullWidth
                  label="Title"
                  name={`ServiceCard.${key}.title`}
                  value={formData.ServiceCard[key].title}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description (HTML)"
                  name={`ServiceCard.${key}.desc`}
                  value={formData.ServiceCard[key].desc}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                />
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body2">Preview:</Typography>
                  <Paper sx={{ padding: 2, backgroundColor: "#f5f5f5" }}>
                    {parse(formData.ServiceCard[key].desc)}
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Section6;
