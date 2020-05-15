import React from "react";
import {Redirect} from 'react-router-dom'

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h3>You are log in!</h3>;
  }
  return <Redirect to="/login"/>;
};

export default SecretPage;
