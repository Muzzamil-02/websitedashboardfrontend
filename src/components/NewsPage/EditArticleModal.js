import React, { useEffect, useState } from "react";
import { TextField, Box, Typography, Button, Modal } from "@mui/material";
import { homeGetData, homeEditData } from "@/services/insightdetail/service";

const EditArticleModal = ({ open, handleClose, article, onSave }) => {
  const [editedArticle, setEditedArticle] = useState(article || {});
  const [initialValues, setInitialValues] = useState([]);

  const handleChange = (field, value) => {
    setEditedArticle({ ...editedArticle, [field]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!article?._id) return;
      try {
        const data = await homeGetData(article._id);
        setInitialValues(data ? JsonFormatter(data) : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      await homeEditData();
      onSave(editedArticle);
      handleClose();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: 600,
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Edit Article
        </Typography>
        {(initialValues.length ? initialValues : [{}]).map((section, index) => (
          <Box
            key={index}
            sx={{
              marginBottom: 3,
              padding: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="subtitle1">Section {index + 1}</Typography>
            <TextField
              fullWidth
              label="Main Heading"
              value={section.mainHeading || ""}
              onChange={(e) =>
                handleChange(`sections[${index}].mainHeading`, e.target.value)
              }
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Date"
              value={section.date || ""}
              onChange={(e) =>
                handleChange(`sections[${index}].date`, e.target.value)
              }
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Image URL"
              value={section.imageURL || ""}
              onChange={(e) =>
                handleChange(`sections[${index}].imageURL`, e.target.value)
              }
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={section.description || ""}
              onChange={(e) =>
                handleChange(`sections[${index}].description`, e.target.value)
              }
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </Box>
        ))}
        <Box textAlign="right">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditArticleModal;
