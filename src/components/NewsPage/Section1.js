import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
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

  const handleDeleteArticle = (index) => {
    const updatedArticles = [...formData.articles];
    updatedArticles.splice(index, 1);
    onFieldChange("articles", updatedArticles);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>
      <TextField
        fullWidth
        label="Title"
        value={formData.title}
        onChange={(e) => onFieldChange("title", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

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
            label={`Image URL for Article ${index + 1}`}
            value={article.image}
            onChange={(e) =>
              onFieldChange(`articles.${index}.image`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 1 }}
          />
          <TextField
            fullWidth
            label={`Title for Article ${index + 1}`}
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
            value={article.date}
            onChange={(e) =>
              onFieldChange(`articles.${index}.date`, e.target.value)
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
    </div>
  );
};

export default Section1;
