import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section1 = ({ formData, onFieldChange, slug }) => {
  const handleAddArticle = () => {
    console.log("in");
    const newArticle = {
      mainHeading: "",
      date: "",

      imageURL: "",
      description: "",
    };
    onFieldChange("sections", [...(formData?.sections || []), newArticle]);
  };
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      {formData.sections.map((section, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Typography variant="subtitle1">Section {index + 1}</Typography>

          <TextField
            fullWidth
            label="Main Heading"
            value={section.mainHeading || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].mainHeading`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Date"
            value={section.date || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].date`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Image URL"
            value={section.imageURL || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].imageURL`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            multiline
            rows={6}
            value={section.description || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].description`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
        </Box>
      ))}
      <Box textAlign="center">
        <Box textAlign="center">
          <Button variant="contained" onClick={handleAddArticle}>
            Add New Article
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
