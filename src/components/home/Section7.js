"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";

const Section7 = ({ formData, onFieldChange, slug }) => {
  console.log("form", formData);
  return (
    <Box sx={{ marginTop: 4 }}>
      {/* Section Heading */}
      <Typography variant="h5" gutterBottom>
        Technology Features
      </Typography>

      {/* Heading Input */}
      {/* <Grid container spacing={2}>
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
      </Grid> */}

      {/* Card Data Section */}

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {formData.cardData &&
          Object.keys(formData.cardData).map((key) => (
            <Grid item xs={12} md={4} key={key}>
              <Paper
                sx={{
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <Image
                  src={formData.cardData[key].imageURL}
                  alt={formData.cardData[key].heading}
                  width={80}
                  height={80}
                />

                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {formData.cardData[key].heading}
                </Typography>

                <TextField
                  fullWidth
                  label="Image URL"
                  name={`cardData.${key}.imageURL`}
                  value={formData.cardData[key].imageURL}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  sx={{ marginTop: 1 }}
                />

                <TextField
                  fullWidth
                  label="Heading"
                  name={`cardData.${key}.heading`}
                  value={formData.cardData[key].heading}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  sx={{ marginTop: 1 }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  name={`cardData.${key}.description`}
                  value={formData.cardData[key].description}
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

export default Section7;
