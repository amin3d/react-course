import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
	isLoggedIn: false,
	onLogin: (username, password) => {},
	onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const isUserLoggedIn = localStorage.getItem("isLoggedIn");

		if (isUserLoggedIn === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = (user, pass) => {
		console.log(user, pass);
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
		navigate("/");
	};

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
		navigate("/login");
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onLogin: loginHandler,
				onLogout: logoutHandler,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
