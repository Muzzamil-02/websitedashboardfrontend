import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";

const Section2 = ({ formData, onFieldChange }) => {
  const handleAddArticle = () => {
    const newArticle = {
      title: "",
      subtitle: "",
      image: "",
      videoLink: "",
    };
    onFieldChange("sections", [...(formData?.sections || []), newArticle]);
  };

  const handleDeleteArticle = (index) => {
    const updatedSections = [...formData.sections];
    updatedSections.splice(index, 1);
    onFieldChange("sections", updatedSections);
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

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>
      <Grid container spacing={2}>
        {formData.sections.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <TextField
                  fullWidth
                  label="Event Title"
                  value={event.title}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].title`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 1 }}
                />

                <TextField
                  fullWidth
                  label="Event Subtitle"
                  value={event.subtitle}
                  onChange={(e) =>
                    onFieldChange(`sections[${index}].subtitle`, e.target.value)
                  }
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />

                <TextField
                  fullWidth
                  label="Image URL"
                  name={`sections[${index}].image`}
                  value={event.image}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(e, `sections[${index}].image`)
                          }
                          style={{ display: "none" }}
                          id={`sections[${index}].image`}
                        />

                        <label htmlFor={`sections[${index}].image`}>
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

                <TextField
                  fullWidth
                  label="Video Link"
                  value={event.videoLink}
                  onChange={(e) =>
                    onFieldChange(
                      `sections[${index}].videoLink`,
                      e.target.value
                    )
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="right">
        <Button
          variant="contained"
          onClick={handleAddArticle}
          sx={{ background: "#d30c0b" }}
        >
          Add +
        </Button>
      </Box>
    </>
  );
};

export default Section2;
