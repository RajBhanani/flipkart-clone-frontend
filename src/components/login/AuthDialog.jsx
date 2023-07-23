import { useState, useContext } from "react";
import { Dialog, Box, Typography, styled } from "@mui/material";
import LoginText from "./LoginText";
import SignupText from "./SignupText";
import { DataContext } from "../../context/DataProvider";

const DialogWrapper = styled(Box)`
  height: 75vh;
  width: 95vh;
  display: flex;
  flex-direction: row;
`;

const ImageBox = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  ${"" /* height: 100%; */}
  width: 27%;
  padding: 45px 35px;
`;

const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 45px 35px;
  flex: 1;
`;

const AuthDialog = ({ open, setOpen }) => {
  const accountInitialValue = {
    login: {
      view: "login",
      heading: "Login",
      text: "Get access to orders, wishlist, and recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here!",
      text: "Signup with your email to get started",
    },
  };

  const [account, setAccount] = useState(accountInitialValue.login);

  const { setLogin } = useContext(DataContext);

  const handleDialogClose = () => {
    setOpen(false);
    setTimeout(() => {
      setAccount(accountInitialValue.login);
    }, 100);
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleDialogClose()}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <DialogWrapper>
        <ImageBox>
          <Typography variant="h5" color={"white"} fontWeight={525}>
            {account.heading}
          </Typography>
          <Typography color={"white"} fontWeight={500} marginTop={"15px"}>
            {account.text}
          </Typography>
        </ImageBox>
        <TextBox>
          {account.view === "login" ? (
            <LoginText
              setAccount={setAccount}
              accountInitialValue={accountInitialValue}
              handleDialogClose={handleDialogClose}
              setLogin={setLogin}
            />
          ) : (
            <SignupText
              setAccount={setAccount}
              accountInitialValue={accountInitialValue}
              handleDialogClose={handleDialogClose}
              setLogin={setLogin}
            />
          )}
        </TextBox>
      </DialogWrapper>
    </Dialog>
  );
};

export default AuthDialog;
