import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section2 = ({ formData, onFieldChange, slug }) => {
  // const handleListChange = (index, field, value) => {
  //   const updatedList = [...formData.list];
  //   updatedList[index] = { ...updatedList[index], [field]: value };
  //   onFieldChange( "list", updatedList);
  // };
  // console.log("form", formData);

  const handleAddNewItem = () => {
    const newItem = {
      img: "",
      title1: "",
      Heading: "",
      text1: "",
      text2: "",
      btn: "",
    };
    onFieldChange("sections", [...formData.sections, newItem]);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {slug}
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
        </Box>
      ))}

      <Box textAlign="right">
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
    </Box>
  );
};

export default Section2;
