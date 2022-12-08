// import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import { AuthContext } from "../../context";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Template } from "../../layout";

const Admin = () => {
	// const { isLoggedIn } = useContext(AuthContext);

	// const navigate = useNavigate();

	//FIXME: fix async problem to read isLoggedIn from local storage
	// useEffect(() => {
	// 	console.log(isLoggedIn);
	// 	if (!isLoggedIn) {
	// 		console.log("here...");
	// 		// navigate("/login");
	// 	}
	// }, [isLoggedIn, navigate]);

	return (
		<Box width="100%" height="100%" bgcolor="#f5f5f5">
			<Box
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="flex-start"
			>
				<Template>
					<Container maxWidth="xl">
						<Outlet />
					</Container>
				</Template>
			</Box>
		</Box>
	);
};

export default Admin;
