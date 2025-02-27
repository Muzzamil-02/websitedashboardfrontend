import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
  Box,
  Button,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";

const Section1 = ({ formData, onFieldChange }) => {
  const handleArticleChange = (index, field, value) => {
    const updatedArticles = [...formData.articles];
    updatedArticles[index] = { ...updatedArticles[index], [field]: value };
    onFieldChange("articles", updatedArticles);
  };
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        onFieldChange(fieldName, url); // Pass the dynamic field name
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

  const handleAddNewArticle = () => {
    const newArticle = {
      image: "",
      title: "",
      description: "",
      category: "",
      categoryLink: "",
      date: "",
    };
    onFieldChange("articles", [...(formData?.articles || []), newArticle]);
  };

  const handleDeleteArticle = (index) => {
    const updatedArticles = [...formData.articles];
    updatedArticles.splice(index, 1);
    onFieldChange("articles", updatedArticles);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>

      <TextField
        fullWidth
        label="Title"
        value={formData.title || ""}
        onChange={(e) => onFieldChange("title", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {formData.articles?.map((article, index) => (
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
            style={{ marginBottom: "10px" }}
            fullWidth
            label="Image URL"
            name={`articles[${index}].image`}
            value={article.image || ""}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileChange(e, `articles[${index}].image`)
                    }
                    style={{ display: "none" }}
                    id={`articles[${index}].image`}
                  />

                  <label htmlFor={`articles[${index}].image`}>
                    <IconButton component="span" disabled={uploading}>
                      {uploading ? (
                        <CircularProgress size={24} sx={{ color: "#d30c0b" }} />
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

          <TextField
            fullWidth
            label="Title"
            value={article.title || ""}
            onChange={(e) =>
              onFieldChange(`articles[${index}].title`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            multiline
            rows={2}
            value={article.description || ""}
            onChange={(e) =>
              onFieldChange(`articles[${index}].description`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Category"
            value={article.category || ""}
            onChange={(e) =>
              onFieldChange(`articles[${index}].category`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Category Link"
            value={article.categoryLink || ""}
            onChange={(e) =>
              onFieldChange(`articles[${index}].categoryLink`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Date"
            value={article.date || ""}
            onChange={(e) =>
              onFieldChange(`articles[${index}].date`, e.target.value)
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
          onClick={handleAddNewArticle}
          sx={{ background: "#d30c0b" }}
        >
          Add +
        </Button>
      </Box>
    </Box>
  );
};

export default Section1;
