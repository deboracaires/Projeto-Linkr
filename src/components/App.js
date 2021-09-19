import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./login-signup/Login";
import SignUp from "./login-signup/SignUp";
import Timeline from "./Timeline/Timeline";
import SelectedHashtag from "./Hashtags/SelectedHashtag";
import MyPosts from "./MyPosts/MyPosts"

import UserContext from "../contexts/UserContext";

import GlobalStyle from "../themes/globalStyles";
import { useState } from "react";
import MyLikes from "./MyLikes.js/MyLikes";


export default function App() {
	
	const [user, setUser] = useState(null);
	const [ token, setToken ] = useState(null);

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
						<Route path="/timeline" exact>
							<Timeline />
						</Route>
						<Route path="/my-posts" exact>
							<MyPosts />
						</Route>
						<Route path = "/hashtag/:hashtag">
							<SelectedHashtag />
						</Route>
						<Route path="/my-likes" exact>
							<MyLikes />
						</Route>
				</Switch>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
