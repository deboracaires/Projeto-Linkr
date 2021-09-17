import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./login-signup/Login";
import SignUp from "./login-signup/SignUp";

import GlobalStyle from "../themes/globalStyles";
import MyPosts from "./MyPosts/MyPosts";
import { useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {

  const [ user, setUser ] = useState(null);
  const [ token, setToken ] = useState(null);

  useEffect(() => {
      console.log(user)
  }, [])

    return (
        <BrowserRouter>
            <UserContext.Provider value={{user, setUser, token, setToken}}>
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <Login setUser={setUser} setToken={setToken} />
                    </Route>
                    <Route path="/sign-up" exact>
                        <SignUp />
                    </Route>
                    <Route path="/my-posts" exact>
                        <MyPosts user={user} token={token} />
                    </Route>
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
