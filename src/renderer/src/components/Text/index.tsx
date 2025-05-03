import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const sizes = {
  xxl: "72px",
  xl: "64px",
  lg: "48px",
  md: "32px",
  mds: "24px",
  regular: "16px",
  sm: "14px",
  xs: "12px",
  micro: "10px",
  nano: "8px",
};

export type TTextSize = "nano" | "micro" | "xs" | "sm" | "regular" | "mds" | "md" | "lg" | "xl" | "xxl";

interface IStyledProps {
  fontStyle: string;
  family: string;
  align?: string;
  shadow?: string;
  decoration?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
}

interface IProps {
  children: React.ReactNode;
  id?: string;
  size?: TTextSize | string | Record<string, any>;
  color?: string;
  style?: string;
  family?: string;
  align?: string;
  shadow?: string;
  decoration?: string;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  inline?: boolean;
  sx?: Record<string, any>;
  className?: string;
  onClick?: (() => void) | null;
  onMouseOver?: (() => void) | null;
  onMouseLeave?: (() => void) | null;
  component?: "span" | "div";
}

const getComponent = ({ family, color, fontStyle, align, decoration, uppercase, lowercase, capitalize, shadow }) => `
  font-family: '${family}';
  color: ${color};
  font-style: ${fontStyle};
  text-align: ${align};
  word-break: break-word;
  ${shadow ? `text-shadow: ${shadow};` : ""}
  ${decoration ? `text-decoration: ${decoration};` : ""}
  ${uppercase ? `text-transform: ${uppercase};` : ""}
  ${lowercase ? `text-transform: ${lowercase};` : ""}
  ${capitalize ? `text-transform: ${capitalize};` : ""}
`;

const StyledBox = styled(Box)<IStyledProps>`
  ${(props: any) => getComponent(props)}
`;

const Text = ({
  children,
  id,
  size = "regular",
  family = "Poppins-Regular",
  color = "#000",
  style = "regular",
  align = "left",
  shadow,
  decoration,
  uppercase,
  lowercase,
  capitalize,
  inline,
  sx = {},
  className = "",
  onClick = null,
  onMouseOver = null,
  onMouseLeave = null,
  ...rest
}: IProps) => {
  const defaultSx: Record<string, any> = {
    fontSize: typeof size === "string" ? sizes[size] : size,
  };

  return (
    <StyledBox
      component={inline ? "span" : "div"}
      id={id}
      family={family}
      color={color}
      fontStyle={style}
      align={align}
      shadow={shadow}
      decoration={decoration}
      uppercase={uppercase}
      lowercase={lowercase}
      capitalize={capitalize}
      sx={{ ...defaultSx, ...sx }}
      className={className}
      onClick={() => {
        if (onClick) onClick();
      }}
      onMouseOver={() => {
        if (onMouseOver) onMouseOver();
      }}
      onMouseLeave={() => {
        if (onMouseLeave) onMouseLeave();
      }}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};

export default Text;
