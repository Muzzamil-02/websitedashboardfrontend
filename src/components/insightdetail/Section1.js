import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  const handleAddArticle = () => {
    const newArticle = {
      mainHeading: "",
      date: "",
      imageURL: "",
      description: "",
    };
    onFieldChange("sections", [...(formData?.sections || []), newArticle]);
  };

  const handleDeleteArticle = (index) => {
    const updatedSections = [...formData.sections];
    updatedSections.splice(index, 1);
    onFieldChange("sections", updatedSections);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>

      {formData.sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 3,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
          }}
        >
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

          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDeleteArticle(index)}
            sx={{ background: "#d30c0b", marginTop: 1 }}
          >
            Delete
          </Button>
        </Box>
      ))}

      <Box textAlign="right">
        <Button
          variant="contained"
          onClick={handleAddArticle}
          sx={{ background: "#d30c0b" }}
        >
          Add +
        </Button>
      </Box>
    </Box>
  );
};

export default Section1;
