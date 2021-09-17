import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./login-signup/Login";
import SignUp from "./login-signup/SignUp";
import Timeline from "./Timeline/Timeline";

import UserContext from "../contexts/UserContext";

import GlobalStyle from "../themes/globalStyles";
import { useState } from "react";

export default function App() {
  
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
          <Route path="/timeline" exact>
            <Timeline />
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
