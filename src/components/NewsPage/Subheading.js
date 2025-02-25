import React from "react";

const subheading = ({ formData, onFieldChange, slug }) => {
  return (
    <div>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Sub Heading"
          name="subheading"
          value={formData?.subheading}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
    </div>
  );
};

export default subheading;
