import { Box, Button } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputText from "../../components/forms/FormInputText";
import { FieldValues } from "react-hook-form";

export type TLoginInput= {
  userEmail: string;
  userPassword: string;
};
const LoginPage = () => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
  } = useForm<TLoginInput>();
  const handleFormSubmit: SubmitHandler<TLoginInput> = (formData) => {
    console.log(formData);
  };
  console.log("Hi")
  return (
    <Box component={"form"} sx={{display:"flex",width:"100vw" ,height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center"}}  onSubmit={handleSubmit(handleFormSubmit)}>
      <Box >
        <FormInputText
          label="Email"
          name="userEmail"
          inputType="email"
          control={control}
          warnMsg="Email required"
        />
      </Box>
      <Box  >
        <FormInputText
          label="Password"
          name="userPassword"
          inputType="password"
          control={control}
          warnMsg="Email required"
        />
      </Box>

      <Box sx={{mt:"36px",width:"150px" }} >
        <Button type="submit" fullWidth={true} variant="contained" >LogIn</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
