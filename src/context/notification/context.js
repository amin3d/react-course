import { createContext } from "react";

const NotificationContext = createContext({
	items: [],
	unreadCount: 0,
	add: notif => {},
	read: () => {},
	remove: () => {},
});

export default NotificationContext;
