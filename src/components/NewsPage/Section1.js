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
import { deleteArticle } from "@/services/NewsPage/service";
import EditArticleModal from "./EditArticleModal";

const Section1 = ({ formData, onFieldChange }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
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
  const handleAddArticle = () => {
    const newArticle = {
      image: "",
      title: "",
      description: "",
      category: "",
      date: "",
    };
    onFieldChange("articles", [...(formData.articles || []), newArticle]);
  };

  const handleDeleteArticle = async (index, id) => {
    const updatedArticles = [...formData.articles];
    updatedArticles.splice(index, 1);
    await deleteArticle(id);
    onFieldChange("articles", updatedArticles);
  };
  const handleEditArticle = (index) => {
    setSelectedArticle(formData.articles[index]);
    setSelectedIndex(index);
    setOpenModal(true);
  };

  const handleSaveArticle = (updatedArticle) => {
    const updatedArticles = [...formData.articles];
    updatedArticles[selectedIndex] = updatedArticle;
    onFieldChange("articles", updatedArticles);
    console.log("hh", updatedArticle);
    setOpenModal(false);
  };
  console.log("hdh", formData);
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>

      {formData.articles.map((article, index) => (
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
            label="Image URL"
            name={`articles.${index}.image`}
            value={article.image}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileChange(e, `articles.${index}.image`)
                    }
                    style={{ display: "none" }}
                    id={`articles.${index}.image`}
                  />

                  <label htmlFor={`articles.${index}.image`}>
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
            label={`Title for Article ${index + 1}`}
            name={`articles.${index}.title`}
            value={article.title}
            onChange={(e) =>
              onFieldChange(`articles.${index}.title`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 1 }}
          />
          <TextField
            fullWidth
            label={`Description for Article ${index + 1}`}
            name={`articles.${index}.description`}
            value={article.description}
            onChange={(e) =>
              onFieldChange(`articles.${index}.description`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 1 }}
          />
          <TextField
            fullWidth
            label={`Category for Article ${index + 1}`}
            name={`articles.${index}.category`}
            value={article.category}
            onChange={(e) =>
              onFieldChange(`articles.${index}.category`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 1 }}
          />
          <TextField
            fullWidth
            label={`Date for Article ${index + 1}`}
            name={`articles.${index}.date`}
            value={article.date}
            onChange={(e) =>
              onFieldChange(`articles.${index}.date`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              onClick={() => handleEditArticle(index)}
              sx={{ background: "green", marginTop: 1 }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteArticle(index, article._id)}
              sx={{ background: "#d30c0b", marginTop: 1 }}
            >
              Delete
            </Button>
          </Box>
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
      {selectedArticle && (
        <EditArticleModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
          article={selectedArticle}
          onSave={handleSaveArticle}
          id={selectedArticle?._id}
        />
      )}
    </div>
  );
};

export default Section1;
