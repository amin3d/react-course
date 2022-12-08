import React, { Fragment } from "react";
import "./assets/fonts/iranYekan/css/fontiran.css";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./common/mui-theme";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { NotificationProvider } from "./context";
import { Route, Routes } from "react-router-dom";
import { Admin, Dashboard, SingleTodo, Todos } from "./pages/admin";
import { Login, Register } from "./pages/auth";
import { PATHS } from "./routes";

const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
	return (
		<Fragment>
			<ThemeProvider theme={muiTheme}>
				<CacheProvider value={cacheRtl}>
					<CssBaseline />
					<NotificationProvider>
						<Routes>
							<Route path={PATHS.ROOT} element={<Admin />}>
								<Route index element={<Dashboard />} />
								<Route path={PATHS.TODOS}>
									<Route index element={<Todos />} />
									<Route
										path={PATHS.SINGLE_TODO}
										element={<SingleTodo />}
									/>
								</Route>
							</Route>
							<Route path={PATHS.LOGIN} element={<Login />} />
							<Route
								path={PATHS.REGISTER}
								element={<Register />}
							/>
							{/* <Route path="*" element={<NotFound />} /> */}
						</Routes>
					</NotificationProvider>
					{/* {!isLoggedIn && <Login />}
					{isLoggedIn && (
						<NotificationProvider>
							<Dashboard />
						</NotificationProvider>
					)} */}
				</CacheProvider>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
