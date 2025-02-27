import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Modal,
  CircularProgress,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import { homeGetData, homeEditData } from "@/services/insightdetail/service";
import { uploadToS3 } from "@/lib/uploadToS3 ";
import toast from "react-hot-toast";

const EditArticleModal = ({ open, handleClose, article, onSave }) => {
  const [editedArticle, setEditedArticle] = useState({ content: {} });
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const handleChange = (fieldPath, value) => {
    const fields = fieldPath.split(".");
    setEditedArticle((prev) => {
      const newState = { ...prev };
      let current = newState;
      for (let i = 0; i < fields.length - 1; i++) {
        current[fields[i]] = { ...current[fields[i]] };
        current = current[fields[i]];
      }
      current[fields[fields.length - 1]] = value;
      return newState;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        handleChange("content.imageURL", url);
        setUploading(false);
        toast.success("Image uploaded successfully!", {
          position: "top-right",
        });
      },
      (error) => {
        console.error("Upload failed:", error);
        setUploading(false);
        toast.error("Image upload failed!", { position: "top-right" });
      }
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (article?._id) {
          const data = await homeGetData(article._id);
          setEditedArticle(data || { content: {} });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [article?._id]);

  const handleSave = async () => {
    try {
      await homeEditData({
        content: { ...editedArticle.content },
        article: article._id,
      });
      onSave({
        ...article,
      });
      handleClose();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#d30c0b" }} />
      </Box>
    );
  }

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

        <Box
          sx={{
            marginBottom: 3,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          <TextField
            fullWidth
            label="Main Heading"
            value={editedArticle.content?.mainHeading || ""}
            onChange={(e) =>
              handleChange("content.mainHeading", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Date"
            value={editedArticle.content?.date || ""}
            onChange={(e) => handleChange("content.date", e.target.value)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Image URL"
              name="content.imageURL"
              value={editedArticle.content?.imageURL || ""}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                      id={`iplda`}
                    />

                    <label htmlFor={`iplda`}>
                      <IconButton component="span" disabled={uploading}>
                        {uploading ? (
                          <CircularProgress
                            size={24}
                            sx={{ color: "#d30c0b" }}
                          />
                        ) : (
                          <CameraAltIcon
                            sx={{ color: "#d30c0b", fontSize: "30px" }}
                          />
                        )}
                      </IconButton>
                    </label>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={editedArticle.content?.description || ""}
            onChange={(e) =>
              handleChange("content.description", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
        </Box>

        <Box textAlign="right">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#d30c0b", border: "none" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditArticleModal;
