import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { deleteArticle } from "@/services/NewsPage/service";
import EditArticleModal from "./EditArticleModal";

const Section1 = ({ formData, onFieldChange }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
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
            onClick={() => handleEditArticle(index)}
            sx={{ marginRight: 1 }}
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
