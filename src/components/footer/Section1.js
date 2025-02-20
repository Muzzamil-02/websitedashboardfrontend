import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Section1 = ({ slug, formData, onFieldChange, onBlur }) => {
  return (
    <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {slug}
      </Typography>
      <TextField
        fullWidth
        label="Logo URL"
        variant="outlined"
        value={formData?.logo || ""}
        onChange={(e) => onFieldChange("logo", e.target.value)}
        onBlur={onBlur}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Tagline"
        variant="outlined"
        value={formData?.tagline || ""}
        onChange={(e) => onFieldChange("tagline", e.target.value)}
        onBlur={onBlur}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Subscribe Link"
        variant="outlined"
        value={formData?.subscribeLink || ""}
        onChange={(e) => onFieldChange("subscribeLink", e.target.value)}
        onBlur={onBlur}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        label="Subscribe Text"
        variant="outlined"
        value={formData?.subscribeText || ""}
        onChange={(e) => onFieldChange("subscribeText", e.target.value)}
        onBlur={onBlur}
        sx={{ marginBottom: 2 }}
      />
      {formData?.sections?.map((section, index) => (
        <Box key={index} sx={{ marginTop: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            {section.title}
          </Typography>
          {section.links.map((link, linkIndex) => (
            <TextField
              key={linkIndex}
              fullWidth
              label={`Link Label ${linkIndex + 1}`}
              variant="outlined"
              value={link.label || ""}
              onChange={(e) =>
                onFieldChange(
                  `sections.${index}.links.${linkIndex}.label`,
                  e.target.value
                )
              }
              onBlur={onBlur}
              sx={{ marginBottom: 2 }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Section1;
