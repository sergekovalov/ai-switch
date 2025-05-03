import { Box } from "@mui/material";

export const Flex = ({ children, justifyContent = "start", alignItems = "start", sx = {}, ...props }) => (
  <Box sx={{ display: "flex", justifyContent, alignItems, ...sx }} {...props}>
    {children}
  </Box>
);
