import React, { useState } from "react";
import { Button } from "../button";
import { InputField } from "../inputField";
import { Paper } from "../paper";
import * as MDS from "./maindash.style";

const SIGNUP = "signup";
const LOGIN = "login";
const NONE = "";

export const Maindash = () => {
  const [displayState, setDisplayState] = useState(NONE);

  const handleLogin = () => {
    setDisplayState(LOGIN);
  };

  const handleSignup = () => {
    setDisplayState(SIGNUP);
  };

  return (
    <MDS.Background>
      <Paper width="60%">
        <Button theme="red" width="60%" onClick={handleLogin}>
          Login
        </Button>
        {displayState === LOGIN && (
          <>
            <InputField label="Email" />
            <InputField label="Password" />
          </>
        )}
        <Button theme="blue" width="60%" onClick={handleSignup}>
          Signup
        </Button>
        {displayState === SIGNUP && (
          <>
            <InputField label="Username" />
            <InputField label="Email" />
            <InputField label="Password" />
          </>
        )}
      </Paper>
    </MDS.Background>
  );
};
