import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  const handleListChange = (index, field, value) => {
    const updatedList = [...formData.list];
    updatedList[index] = { ...updatedList[index], [field]: value };
    onFieldChange("section2", "list", updatedList);
  };

  const handleAddNewItem = () => {
    const newItem = {
      title: "",
      heading: "",
      description: "",
      buttonText: "",
      imageSrc: "",
    };
    onFieldChange("section2", "list", [...formData.list, newItem]);
  };

  return (
    <Box>
      <Typography variant="h6">Section 2 - Whitepapers & Reports</Typography>

      {formData.list?.map((item, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 3,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
          }}
        >
          <TextField
            fullWidth
            label="Title"
            value={item.title || ""}
            onChange={(e) => handleListChange(index, "title", e.target.value)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Heading"
            value={item.heading || ""}
            onChange={(e) => handleListChange(index, "heading", e.target.value)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            multiline
            rows={3}
            value={item.description || ""}
            onChange={(e) =>
              handleListChange(index, "description", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Button Text"
            value={item.buttonText || ""}
            onChange={(e) =>
              handleListChange(index, "buttonText", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Image URL"
            value={item.imageSrc || ""}
            onChange={(e) =>
              handleListChange(index, "imageSrc", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
        </Box>
      ))}

      <Button variant="contained" onClick={handleAddNewItem}>
        Add New Item
      </Button>
    </Box>
  );
};

export default Section2;
