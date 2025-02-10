"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Link,
} from "@mui/material";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("User Registered:", user); // Replace with API call
    router.push("/login");
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          marginTop: 10,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: "#d30c0b" }}>
          Create an Account
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          Sign up to get started
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            margin="normal"
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2, padding: 1, background: "#D30C0B" }}
          >
            Sign Up
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            Already have an account?{" "}
            <Link
              component="button"
              onClick={() => router.push("/login")}
              sx={{ color: "#D30C0B", fontWeight: "bold" }}
            >
              Login here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default page;
