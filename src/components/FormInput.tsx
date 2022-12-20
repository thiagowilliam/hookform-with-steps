import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type FormInputProps = {
  name: string;
  label: string;
  type?: string;
};

export const FormInput = ({ name, label, type = "text" }: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          type={type}
        />
      )}
    />
  );
};
