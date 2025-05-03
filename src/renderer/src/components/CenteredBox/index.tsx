import React from "react";
import { Box } from "@mui/material";

const CenteredBox = ({ children, sx = {} }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default CenteredBox;
