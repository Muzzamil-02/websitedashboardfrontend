"use client";
import Sidebar from "@/components/Sidebar";
import { contactGetData } from "@/services/publicationget/service";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";

import { toast } from "react-hot-toast";

const page = () => {
  const [initialValues, setInitialValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contactGetData();
        if (data) {
          setInitialValues(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Box
        sx={{ display: "flex", height: "100vh", backgroundColor: "#f8f9fc" }}
      >
        <Sidebar />
        <Container sx={{ flexGrow: 1, padding: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ backgroundColor: "#f1f1f1", color: "#000", padding: "10px" }}
          >
            Contact Details
          </Typography>
          {loading ? (
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}
            >
              <CircularProgress size={60} sx={{ color: "#d30c0b" }} />
            </Box>
          ) : (
            <TableContainer sx={{ marginTop: 2 }}>
              <Table sx={{ border: "1px solid #ddd" }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#d30c0b" }}>
                    <TableCell
                      sx={{
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Organization
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Message
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Country
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      City
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {initialValues.map((field, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ border: "1px solid #ddd" }}>
                        {field.name}
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #ddd" }}>
                        {field.email}
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #ddd" }}>
                        {field.organization}
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #ddd" }}>
                        {field.message}
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #ddd" }}>
                        {field.country}
                      </TableCell>
                      <TableCell sx={{ border: "1px solid #ddd" }}>
                        {field.city}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default page;
