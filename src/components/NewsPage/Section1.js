import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section1 = ({ formData, onFieldChange, slug }) => {
  const handleAddArticle = () => {
    const newArticle = {
      image: "",
      title: "",
      description: "",
      category: "",
      date: "",
    };
    // Add the new article to the articles array in Formik state
    onFieldChange("articles", [...(formData.articles || []), newArticle]);
  };

  console.log("dd", formData);
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
      {/* Articles */}
      {formData.articles.map((article, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
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

export default Section1;
