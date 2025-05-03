import React from "react";
import { FormHelperText } from "@mui/material";

const InputError = ({ message }: { message: string | null }) => (
  <FormHelperText className="anim-pulse" sx={{ minHeight: "1.5rem", mb: 1 }} error>
    {message ? message.split("\n").map((_: string) => <div key={_}>{_}</div>) : null}
  </FormHelperText>
);

export default InputError;
