import { useCallback } from "react";
import useHttp from "./use-http";

const useTodos = () => {
	const { response, getData } = useHttp();

	const getTodos = useCallback(
		async (userId = 1) => {
			await getData(
				`https://jsonplaceholder.typicode.com/todos?userId=${userId}`
			);
		},
		[getData]
	);

	return [response, getTodos];
};

export default useTodos;
