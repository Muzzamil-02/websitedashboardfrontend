import React from "react";
import { TextField, Box, Typography, Button } from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  return (
    <div>
      {/* Title */}
      <TextField
        fullWidth
        label="Title"
        value={formData.title}
        onChange={(e) => onFieldChange("section2", "title", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Articles */}
      {formData.articles.map((article, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          {/* Article Image */}
          <TextField
            fullWidth
            label={`Image URL for Article ${index + 1}`}
            value={article.image}
            onChange={(e) =>
              onFieldChange(
                "section2",
                `articles.${index}.image`,
                e.target.value
              )
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
              onFieldChange(
                "section2",
                `articles.${index}.title`,
                e.target.value
              )
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
              onFieldChange(
                "section2",
                `articles.${index}.description`,
                e.target.value
              )
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
              onFieldChange(
                "section2",
                `articles.${index}.category`,
                e.target.value
              )
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
              onFieldChange(
                "section2",
                `articles.${index}.date`,
                e.target.value
              )
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
        </Box>
      ))}

      {/* Add Article Button */}
      <Box textAlign="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            const newArticle = {
              image: "",
              title: "",
              description: "",
              category: "",
              date: "",
            };
            const updatedArticles = [...formData.articles, newArticle];
            onFieldChange("section2", "articles", updatedArticles);
          }}
        >
          Add Article
        </Button>
      </Box>
    </div>
  );
};

export default Section2;
