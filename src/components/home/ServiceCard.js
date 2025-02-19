import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ formData, onFieldChange, slug }) => {
  console.log("service", formData);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      <Grid container spacing={2}>
        {Object.entries(formData).map(([key, service]) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <div className="bg-white shadow-lg rounded-2xl p-4">
              <TextField
                fullWidth
                label="Title"
                name={`${key}.title`}
                value={service.title}
                onChange={(e) => onFieldChange(`${key}.title`, e.target.value)}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Description"
                name={`${key}.desc`}
                value={service.desc}
                onChange={(e) => onFieldChange(`${key}.desc`, e.target.value)}
                variant="outlined"
                multiline
                rows={8}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ServiceCard;
