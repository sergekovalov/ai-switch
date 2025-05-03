import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)`
  flex-grow: 1;
  width: 100%;

  & .MuiOutlinedInput-root {
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #fff;

    &.Mui-focused {
      & .MuiOutlinedInput-notchedOutline {
        border: 1px dashed #000;
      },
    },
    &:hover:not(.Mui-focused) {
      & .MuiOutlinedInput-notchedOutline {
        border: 1px dashed #000;
      },
    },
  },
`;

export default StyledTextField;
