"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Header from "@/app/components/header/header";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
    </Box>
  );
}
