import React from "react";
import { FormGroup, TextField } from "@material-ui/core";
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from "react-hook-form";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DayjsUtils from "@date-io/dayjs";

interface Props {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

const FirstStep: React.FC<Props> = ({ control, errors }) => {
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <FormGroup>
        <Controller
          name="brand"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="outlined"
              label="Marka"
              margin="dense"
              inputRef={field.ref}
              {...field}
            />
          )}
        />
        {errors.brand && <p style={{ color: "red" }}>{errors.brand.message}</p>}
        <Controller
          name="model"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              variant="outlined"
              label="Model"
              margin="dense"
              inputRef={field.ref}
              {...field}
            />
          )}
        />
        {errors.model && <p style={{ color: "red" }}>{errors.model.message}</p>}
        <Controller
          name="year"
          control={control}
          render={({ field }) => (
            <DatePicker
              views={["year"]}
              label="Rok produkcji"
              variant="inline"
              size="medium"
              autoOk={true}
              disableToolbar={true}
              inputVariant="outlined"
              maxDate={new Date("2021-12-01")}
              minDate={new Date("1950-01-01")}
              {...field}
            />
          )}
        />
        {errors.year && <p style={{ color: "red" }}>{errors.year.message}</p>}
      </FormGroup>
    </MuiPickersUtilsProvider>
  );
};

export default FirstStep;
