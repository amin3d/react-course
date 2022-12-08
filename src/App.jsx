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
import { Admin, Dashboard } from "./pages/admin";
import { Login, Register } from "./pages/auth";

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
							<Route path="/" element={<Admin />}>
								<Route index element={<Dashboard />} />
								{/* <Route
									path="add-product"
									element={<AddEditProduct />}
								>
									<Route
										path=":id"
										element={<AddEditProduct />}
									/>
								</Route> */}
							</Route>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
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
