import { useContext, useRef, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AuthContext } from "../../context";
import _isEmpty from "lodash/isEmpty";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { onLogin } = useContext(AuthContext);
	const usernameRef = useRef();
	const passwordRef = useRef();

	const loginUser = () => {
		if (_isEmpty(username)) {
			usernameRef.current.focus();
		} else if (_isEmpty(password)) {
			passwordRef.current.focus();
		} else {
			console.log("here...");
			onLogin(username, password);
		}
	};

	const onChangeUsername = e => {
		setUsername(e.target.value);
	};

	const onChangePassword = e => {
		setPassword(e.target.value);
	};

	return (
		<Box width="100vw" height="100vh" bgcolor="#f5f5f5">
			<Box
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Container maxWidth="sm">
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							<Grid container spacing={3} pt={2}>
								<Grid item xs={2} />
								<Grid item xs={8}>
									<TextField
										inputRef={usernameRef}
										fullWidth
										label="نام کاربری"
										variant="outlined"
										size="small"
										value={username}
										onChange={onChangeUsername}
									/>
								</Grid>
								<Grid item xs={2} />
								<Grid item xs={2} />
								<Grid item xs={8}>
									<TextField
										inputRef={passwordRef}
										fullWidth
										label="کلمه عبور"
										variant="outlined"
										size="small"
										type="password"
										value={password}
										onChange={onChangePassword}
									/>
								</Grid>
								<Grid item xs={2} />
								<Grid item xs={2} />
								<Grid item xs={8}>
									<Button
										fullWidth
										variant="contained"
										onClick={loginUser}
									>
										ورود
									</Button>
								</Grid>
								<Grid item xs={2} />
							</Grid>
						</CardContent>
					</Card>
				</Container>
			</Box>
		</Box>
	);
};

export default Login;
