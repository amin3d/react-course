import React, { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import muiTheme from "./common/mui-theme";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Login } from "./pages";

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
					<Login />
				</CacheProvider>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
