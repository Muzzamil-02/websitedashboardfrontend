import React from "react";

const button = ({ formData, onFieldChange, slug }) => {
  return (
    <div>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Button"
          name="button"
          value={formData?.button}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
    </div>
  );
};

export default button;
