import React from "react";
import { Button, Typography, Box, TextField, Paper } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export interface FixedShowcaseProps {
  paperSx?: SxProps<Theme>;
  title?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  textFieldLabel?: string;
  textFieldHelper?: string;
  primaryVariant?: "contained" | "outlined" | "text";
  secondaryVariant?: "contained" | "outlined" | "text";
  primaryColor?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  secondaryColor?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  onPrimaryClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const FixedShowcase: React.FC<FixedShowcaseProps> = ({
  paperSx,
  title = "¡Componente Optimizado!",
  primaryLabel = "¡Haz clic!",
  secondaryLabel = "O no...",
  textFieldLabel = "Nombre",
  textFieldHelper = "Por favor, ingresa tu nombre.",
  primaryVariant = "contained",
  secondaryVariant = "outlined",
  primaryColor = "secondary",
  secondaryColor = "error",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: 800,
        p: { xs: 2, sm: 3, md: 4 },
        mx: "auto",
        borderRadius: 2,
        ...paperSx,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          letterSpacing: 1,
          mb: 3,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant={primaryVariant}
          color={primaryColor}
          onClick={onPrimaryClick}
          sx={{
            fontSize: { xs: 14, sm: 16 },
            px: { xs: 2, sm: 4 },
            py: 1,
            borderRadius: 2,
          }}
        >
          {primaryLabel}
        </Button>

        <Button
          variant={secondaryVariant}
          color={secondaryColor}
          onClick={onSecondaryClick}
          sx={{
            fontSize: { xs: 14, sm: 16 },
            px: { xs: 2, sm: 4 },
            py: 1,
            borderRadius: 2,
          }}
        >
          {secondaryLabel}
        </Button>
      </Box>

      <TextField
        label={textFieldLabel}
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        helperText={textFieldHelper}
      />

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          textAlign: "center",
          mt: 2,
        }}
      >
        Este componente ahora es responsivo, accesible y con un diseño más limpio ✨
      </Typography>
    </Paper>
  );
};

export default FixedShowcase;
