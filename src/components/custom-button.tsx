import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import type { SxProps, Theme } from "@mui/material/styles";

export interface CustomButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
  tabIndex?: number;
  id?: string;
  ariaLabel?: string;
  
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  sx,
  onClick,
  type = "button",
  href,
  target,
  rel,
  tabIndex,
  id,
  ariaLabel,
}) => {
  const buttonProps: Record<string, unknown> = {
    variant,
    color,
    size,
    startIcon: loading ? (
      <CircularProgress size={20} color="inherit" />
    ) : (
      startIcon
    ),
    endIcon,
    disabled: disabled || loading,
    fullWidth,
    sx,
    onClick,
    type,
    tabIndex,
    id,
    "aria-label": ariaLabel,
  };
  if (href) {
    buttonProps.href = href;
    if (target) buttonProps.target = target;
    if (rel) buttonProps.rel = rel;
  }
  return <Button {...buttonProps}>{children}</Button>;
};

export default CustomButton;
