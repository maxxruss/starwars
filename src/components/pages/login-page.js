import React from "react";
import Button from "@material-ui/core/Button";
import {Redirect} from 'react-router-dom'


const LoginPage = ({ isLoggedIn, onLogin }) => {
  if(isLoggedIn) return <Redirect to='/'/>
  return (
    <div>
      <p>Login to see secret page</p>
      <Button onClick={onLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
