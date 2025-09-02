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
  primaryColor?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  secondaryColor?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  onPrimaryClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  isMobile?: boolean;
  moreInputs?: boolean;
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
  isLoading = false,
  isMobile = false,
  moreInputs = false,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 600, md: 800 },
        p: { xs: 2, sm: 3, md: 4 },
        mx: "auto",
        borderRadius: 3,
        ...paperSx,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          letterSpacing: 1,
          mb: { xs: 2, sm: 3 },
          textAlign: "center",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : { xs: "column", sm: "row" },
          gap: 2,
          mb: 3,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Button
          variant={primaryVariant}
          color={primaryColor}
          onClick={onPrimaryClick}
          disabled={isLoading}
          sx={{
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {isLoading ? "Cargando..." : primaryLabel}
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
            width: { xs: "100%", sm: "auto" },
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

      {moreInputs && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
            mb: 3,
          }}
        >
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Contraseña" type="password" fullWidth />
        </Box>
      )}

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          textAlign: "center",
          mt: 2,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        Este componente ahora es responsivo, accesible y con un diseño más
        limpio ✨
      </Typography>
    </Paper>
  );
};

export default FixedShowcase;
