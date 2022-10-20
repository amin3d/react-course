import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
	return (
		<Box mt={20}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center">
						<TextField label="نام کاربری" variant="outlined" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center">
						<TextField label="کلمه عبور" variant="outlined" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center">
						<Button variant="contained">ورود</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Login;
