import React from "react";
import { Box } from "@mui/material";

interface IProps {
  message?: any;
  show?: boolean;
  withPadding?: boolean;
  children: React.ReactNode;
  sx?: Record<string, any>;
}

const Freezer = ({ message = null, show = false, withPadding = false, sx = {}, children }: IProps) => (
  <Box sx={{ position: "relative", ...sx }}>
    {show ? (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          zIndex: 2,
          backdropFilter: "blur(10px) brightness(100%)",
          width: "100%",
          height: "100%",
        }}
        className="anim-fade-in"
      >
        {message}
      </Box>
    ) : null}
    <Box sx={{ zIndex: 1, p: withPadding ? 4 : 0, height: sx.height || "auto", opacity: show ? 0.5 : 1 }}>
      {children}
    </Box>
  </Box>
);

export default Freezer;
