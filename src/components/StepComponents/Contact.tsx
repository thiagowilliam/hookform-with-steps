import { Box, Typography } from "@mui/material";

import { FormInput } from "../FormInput";

export const Contact = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6" gutterBottom>
        Dados de Contato
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="mobileNumber" label="Telefone Celular" type="number" />
        <FormInput name="telNumber" label="Telefone Fixo" type="number" />
      </Box>
    </Box>
  );
};
