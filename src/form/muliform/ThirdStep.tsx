import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from "react-hook-form";

interface Props {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

const ThirdStep: React.FC<Props> = ({ control, errors }) => {
  return (
    <FormGroup>
      <FormGroup>
        <Controller
          name="noAccident"
          control={control}
          defaultValue={false}
          render={({ field: { value, onChange, ref } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={onChange}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  inputRef={ref}
                />
              }
              label="Bezwypadkowy"
              // labelPlacement="start"
            />
          )}
        />
        {errors.noAccident && (
          <p style={{ color: "red" }}>{errors.noAccident.message}</p>
        )}
        <Controller
          name="serviced"
          control={control}
          defaultValue={false}
          render={({ field: { value, onChange, ref } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={onChange}
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  inputRef={ref}
                />
              }
              label="Servisowany w ASO"
              // labelPlacement="start"
            />
          )}
        />
        {errors.serviced && (
          <p style={{ color: "red" }}>{errors.serviced.message}</p>
        )}
      </FormGroup>
      <Controller
        name="state"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Stan"
            margin="dense"
            inputRef={field.ref}
          />
        )}
      />
      {errors.state && <p style={{ color: "red" }}>{errors.state.message}</p>}
      <Controller
        name="color"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Kolor"
            margin="dense"
            inputRef={field.ref}
          />
        )}
      />
      {errors.color && <p style={{ color: "red" }}>{errors.color.message}</p>}
    </FormGroup>
  );
};

export default ThirdStep;
