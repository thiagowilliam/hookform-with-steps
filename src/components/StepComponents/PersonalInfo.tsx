import { Box, Typography } from "@mui/material";
import { FormInput } from "../FormInput";

export const PersonalInfo = () => {
  return (
    <Box marginY={10}>
      <Typography variant="h6" gutterBottom>
        Dados Pessoais
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="name" label="Nome" />
        <FormInput name="age" label="Idade" type="number" />
      </Box>
    </Box>
  );
};
