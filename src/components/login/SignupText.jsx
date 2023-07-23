import {
  Typography,
  TextField,
  Button,
  styled,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

import { authenticateSignup } from "../../service/api.js";

const DialogSignupButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: white;
  font-size: medium;
  height: 48px;
  border-radius: 2px;
  margin-top: 15px;
`;

const SignupText = ({ setAccount, accountInitialValue, handleDialogClose, setLogin }) => {
  const signupInitialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
  };

  const [signupDetails, setSignupDetails] = useState(signupInitialValues);

  const [showPassword, setShowPassword] = useState(false);

  const onInputChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signupDetails);
    if(!response) return;
    handleDialogClose();
    setLogin(signupDetails.firstName);
  };

  return (
    <>
      <TextField
        variant="standard"
        onChange={(e) => onInputChange(e)}
        name="firstName"
        label="Enter First Name"
      />
      <TextField
        variant="standard"
        onChange={(e) => onInputChange(e)}
        name="lastName"
        label="Enter Last Name"
      />
      <TextField
        variant="standard"
        onChange={(e) => onInputChange(e)}
        name="userName"
        label="Enter Username"
      />
      <TextField
        variant="standard"
        onChange={(e) => onInputChange(e)}
        name="email"
        label="Enter Email"
      />
      <Box style={{ display: "flex", alignItems: "end" }}>
        <TextField
          variant="standard"
          onChange={(e) => onInputChange(e)}
          name="password"
          label="Enter password"
          type={showPassword ? "text" : "password"}
          style={{ width: "100%" }}
        />
        <IconButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </Box>
      <TextField
        variant="standard"
        onChange={(e) => onInputChange(e)}
        name="phone"
        label="Enter Phone"
      />
      <DialogSignupButton onClick={() => signupUser()}>
        Sign up
      </DialogSignupButton>
      <Typography
        style={{ textAlign: "center", color: "#2874F0", cursor: "pointer" }}
        onClick={() => {
          setAccount(accountInitialValue.login);
        }}
      >
        Already have an account? Login.
      </Typography>
    </>
  );
};

export default SignupText;
