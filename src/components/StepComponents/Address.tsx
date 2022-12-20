import { Box, Typography } from "@mui/material";

import { FormInput } from "../FormInput";

export const Address = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6" gutterBottom>
        Dados de endereço
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="street" label="Rua" />
        <FormInput name="streetNumber" label="Número da rua" type="number" />
        <FormInput name="city" label="Cidade" />
      </Box>
    </Box>
  );
};
