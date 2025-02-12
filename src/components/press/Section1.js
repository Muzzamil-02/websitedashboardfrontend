import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  const handleArticleChange = (index, field, value) => {
    const updatedArticles = [...formData.articles];
    updatedArticles[index] = { ...updatedArticles[index], [field]: value };
    onFieldChange("section1", "articles", updatedArticles);
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
    onFieldChange("section1", "articles", [...formData.articles, newArticle]);
  };

  return (
    <Box>
      <Typography variant="h6">News and Press Releases</Typography>

      <TextField
        fullWidth
        label="Title"
        value={formData.title || ""}
        onChange={(e) => onFieldChange("section1", "title", e.target.value)}
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
            fullWidth
            label="Image URL"
            value={article.image || ""}
            onChange={(e) =>
              handleArticleChange(index, "image", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Title"
            value={article.title || ""}
            onChange={(e) =>
              handleArticleChange(index, "title", e.target.value)
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
              handleArticleChange(index, "description", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Category"
            value={article.category || ""}
            onChange={(e) =>
              handleArticleChange(index, "category", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Category Link"
            value={article.categoryLink || ""}
            onChange={(e) =>
              handleArticleChange(index, "categoryLink", e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Date"
            value={article.date || ""}
            onChange={(e) => handleArticleChange(index, "date", e.target.value)}
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
        </Box>
      ))}

      <Button variant="contained" onClick={handleAddNewArticle}>
        Add New Article
      </Button>
    </Box>
  );
};

export default Section1;
