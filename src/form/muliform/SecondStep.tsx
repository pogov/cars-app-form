import React from "react";
import { FormGroup, MenuItem, Select, TextField } from "@material-ui/core";
import {
  Control,
  Controller,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";

interface Props {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

const SecondStep: React.FC<Props> = ({ control, errors }) => {
  return (
    <FormGroup>
      <Controller
        name="mileage"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Przebieg"
            margin="dense"
            inputRef={field.ref}
          />
        )}
      />
      {errors.mileage && (
        <p style={{ color: "red" }}>{errors.mileage.message}</p>
      )}
      <Controller
        name="fuelType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            labelId="Paliwo"
            variant="outlined"
            margin="dense"
            inputRef={field.ref}
            {...field}
          >
            <MenuItem value={"benzyna"}>benzyna</MenuItem>
            <MenuItem value={"diesel"}>diesel</MenuItem>
            <MenuItem value={"benzyna + gaz"}>benzyna + gaz</MenuItem>
          </Select>
        )}
      />
      {errors.fuelType && (
        <p style={{ color: "red" }}>{errors.fuelType.message}</p>
      )}
      <Controller
        name="gear"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            labelId="Skrzynia biegów"
            variant="outlined"
            margin="dense"
            inputRef={field.ref}
            {...field}
          >
            <MenuItem value={"manualna"}>manualna</MenuItem>
            <MenuItem value={"automatyczna"}>automatyczna</MenuItem>
          </Select>
        )}
      />
      {errors.gear && <p style={{ color: "red" }}>{errors.gear.message}</p>}
      <Controller
        name="cylinderCapacity"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Pojemność skokowa"
            margin="dense"
            inputRef={field.ref}
          />
        )}
      />
      {errors.cylinderCapacity && (
        <p style={{ color: "red" }}>{errors.cylinderCapacity.message}</p>
      )}
    </FormGroup>
  );
};

export default SecondStep;
