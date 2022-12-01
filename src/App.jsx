import React, { Fragment, useContext } from "react";
import "./assets/fonts/iranYekan/css/fontiran.css";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./common/mui-theme";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Dashboard, Login } from "./pages";
import { AuthContext, NotificationProvider } from "./context";

const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<Fragment>
			<ThemeProvider theme={muiTheme}>
				<CacheProvider value={cacheRtl}>
					<CssBaseline />
					{!isLoggedIn && <Login />}
					{isLoggedIn && (
						<NotificationProvider>
							<Dashboard />
						</NotificationProvider>
					)}
				</CacheProvider>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
