import { useCallback } from "react";
import useHttp from "./use-http";

const useTodos = () => {
	const { response, getData } = useHttp();

	const getTodos = useCallback(
		async userId => {
			const url = userId
				? `https://dummyjson.com/todos/user/${userId}`
				: `https://dummyjson.com/todos`;

			await getData(url);
		},
		[getData]
	);

	return [response.todos, getTodos];
};

export default useTodos;
