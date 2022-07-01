import { TextField, TextFieldProps } from "@mui/material";
import React, { FC } from "react";
import { Controller, Control } from "react-hook-form";
import { DeepMap, FieldError, FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { TLoginInput } from "../../pages/login";

interface IFormInputTextProps {
  label: string;
  name: string;
  control: any;
  inputType?: string;
  warnMsg: string;
}

const FormInputText =  (props:IFormInputTextProps) => {
  const { label, name, control, inputType, warnMsg } = props;


  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <TextField
            onChange={onChange}
            value={value}
            variant="standard"
            error={!!error}
            label={label}
            helperText={error ? error.message : null}
            type={inputType?inputType:"text"}
          />
        );
      }}
      rules={{ required: warnMsg }}
    />
  );
};

export default FormInputText;
