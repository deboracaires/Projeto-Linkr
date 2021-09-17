import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./login-signup/Login";
import SignUp from "./login-signup/SignUp";

import GlobalStyle from "../themes/globalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
