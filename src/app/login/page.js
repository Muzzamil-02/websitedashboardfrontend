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
import { AuthHelper } from "@/lib/helpers/auth/helper";

const page = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
        <Typography variant="h4" gutterBottom sx={{ color: "#d30c0b" }}>
          Welcome Back!
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          Login to your account
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            AuthHelper.login(credentials.email, credentials.password, router);
          }}
        >
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
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2, padding: 1, background: "#d30c0b" }}
          >
            Login
          </Button>
        </form>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{" "}
            <Link
              component="button"
              onClick={() => router.push("/signup")}
              sx={{ color: "#d30c0b", fontWeight: "bold" }}
            >
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default page;
