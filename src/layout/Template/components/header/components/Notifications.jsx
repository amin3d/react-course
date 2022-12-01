import React, { useContext } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { NotificationContext } from "../../../../../context";

function Notifications() {
	const { unreadCount, read } = useContext(NotificationContext);

	const onClick = () => {
		read();
	};

	return (
		<IconButton
			color="inherit"
			onClick={onClick}
			edge="start"
			sx={{ marginRight: 2 }}
		>
			<Badge
				badgeContent={unreadCount}
				color="secondary"
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<NotificationsNoneIcon />
			</Badge>
		</IconButton>
	);
}

export default Notifications;
