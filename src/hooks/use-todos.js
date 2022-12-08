import { useCallback } from "react";
import useHttp from "./use-http";

const useTodos = () => {
	const { response, getData } = useHttp();

	const getTodos = useCallback(
		async userId => {
			const url = userId
				? `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
				: `https://jsonplaceholder.typicode.com/todos`;

			await getData(url);
		},
		[getData]
	);

	return [response, getTodos];
};

export default useTodos;
