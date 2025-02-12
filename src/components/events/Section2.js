"use client";

import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
} from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  return (
    <Grid container spacing={2}>
      {formData.list.map((event, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              {/* Editable TextField for Title */}
              <TextField
                fullWidth
                label="Event Title"
                name={`list[${index}].title`}
                value={event.title}
                onChange={(e) =>
                  onFieldChange(
                    "section2",
                    `list[${index}].title`,
                    e.target.value
                  )
                }
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Editable TextField for Subtitle */}
              <TextField
                fullWidth
                label="Event Subtitle"
                name={`list[${index}].subtitle`}
                value={event.subtitle}
                onChange={(e) =>
                  onFieldChange(
                    "section2",
                    `list[${index}].subtitle`,
                    e.target.value
                  )
                }
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />

              {/* Editable TextField for Image URL */}
              <TextField
                fullWidth
                label="Image URL"
                name={`list[${index}].image`}
                value={event.image}
                onChange={(e) =>
                  onFieldChange(
                    "section2",
                    `list[${index}].image`,
                    e.target.value
                  )
                }
                variant="outlined"
                sx={{ marginBottom: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Section2;
