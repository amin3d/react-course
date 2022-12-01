import { useContext } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../../../../context";
import { Notifications } from "./components";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Header = ({ onOpenDrawer, isOpen }) => {
	const { onLogout } = useContext(AuthContext);

	return (
		<AppBar position="fixed" open={isOpen}>
			<Toolbar>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					<Box display="flex" alignItems="center">
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={onOpenDrawer}
							edge="start"
							sx={{
								marginRight: 5,
								...(isOpen && { display: "none" }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div">
							داشبورد
						</Typography>
					</Box>
					<Box display="flex">
						<Notifications />
						<Button
							variant="contained"
							color="secondary"
							onClick={onLogout}
						>
							خروج
						</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
