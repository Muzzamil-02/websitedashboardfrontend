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
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Section2 = ({ formData, onFieldChange }) => {
  const handleAddNewItem = () => {
    const newItem = {
      img: "",
      title1: "",
      Heading: "",
      text1: "",
      text2: "",
      btn: "",
      link: "",
    };
    onFieldChange("sections", [...formData.sections, newItem]);
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

  const handleDeleteItem = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    onFieldChange("sections", updatedSections);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        White Paper Section
      </Typography>

      {formData.sections?.map((item, index) => (
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
            label="Title"
            value={item.title1 || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].title1`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Heading"
            value={item.Heading || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].Heading`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Text1"
            value={item.text1 || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].text1`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Text2"
            value={item.text2 || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].text2`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Button Text"
            value={item.btn || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].btn`, e.target.value)
            }
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            label="Image URL"
            style={{ paddingBottom: "15px" }}
            name={`sections[${index}].img`}
            value={item.img || ""}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleFileChange(e, `sections[${index}].img`)
                    }
                    style={{ display: "none" }}
                    id={`sections[${index}].img`}
                  />

                  <label htmlFor={`sections[${index}].img`}>
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
            label="Upload PDF"
            value={item.link || ""}
            onChange={(e) =>
              onFieldChange(`sections[${index}].link`, e.target.value)
            }
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={(e) =>
                      handleFileChange(e, `sections[${index}].link`)
                    }
                    style={{ display: "none" }}
                    id={`sections[${index}].link`}
                  />
                  <label htmlFor={`sections[${index}].link`}>
                    <IconButton component="span" disabled={uploading}>
                      {uploading ? (
                        <CircularProgress size={24} sx={{ color: "#d30c0b" }} />
                      ) : (
                        <PictureAsPdfIcon
                          sx={{ color: "#d30c0b", fontSize: "30px" }}
                        />
                      )}
                    </IconButton>
                  </label>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            onClick={() => handleDeleteItem(index)}
            sx={{ background: "#d30c0b", marginTop: 1 }}
          >
            Delete
          </Button>
        </Box>
      ))}

      <Box textAlign="right">
        <Button
          variant="contained"
          onClick={handleAddNewItem}
          sx={{ background: "#d30c0b" }}
        >
          Add +
        </Button>
      </Box>
    </Box>
  );
};

export default Section2;
