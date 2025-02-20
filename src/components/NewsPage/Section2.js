import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section2 = ({ formData, onFieldChange, slug }) => {
  console.log("dd", formData);
  const handleAddArticle = () => {
    console.log("in");
    const newArticle = {
      image: "",
      title: "",
      description: "",
      category: "",
      date: "",
    };
    const updatedArticles = [...formData.articles, newArticle];
    onFieldChange("articles", updatedArticles); // Updates the parent formData
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>
      {/* Title */}
      <TextField
        fullWidth
        label="Title"
        value={formData.title}
        onChange={(e) => onFieldChange("title", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Articles */}
      {formData.map((article, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          {/* Article Image */}
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

          {/* Article Title */}
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

          {/* Article Description */}
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

          {/* Article Category */}
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

          {/* Article Date */}
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
        </Box>
      ))}

      {/* Add Article Button */}
      <Box textAlign="right">
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
    </div>
  );
};

export default Section2;
