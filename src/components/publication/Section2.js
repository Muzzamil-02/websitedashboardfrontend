import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  const handleAddNewItem = () => {
    const newItem = {
      img: "",
      title1: "",
      Heading: "",
      text1: "",
      text2: "",
      btn: "",
      link: "",
    };
    onFieldChange("sections", [...formData.sections, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    onFieldChange("sections", updatedSections);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        White Paper Section
      </Typography>

      {formData.sections?.map((item, index) => (
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
            value={item.title1 || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].title1`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Heading"
            value={item.Heading || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].Heading`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Text1"
            value={item.text1 || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].text1`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Text2"
            value={item.text2 || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].text2`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Button Text"
            value={item.btn || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].btn`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Image URL"
            value={item.img || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].img`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="PDF LINK"
            value={item.link || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].link`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            onClick={() => handleDeleteItem(index)}
            sx={{ background: "#d30c0b", marginTop: 1 }}
          >
            Delete
          </Button>
        </Box>
      ))}

      <Box textAlign="right">
        <Button
          variant="contained"
          onClick={handleAddNewItem}
          sx={{ background: "#d30c0b" }}
        >
          Add +
        </Button>
      </Box>
    </Box>
  );
};

export default Section2;
