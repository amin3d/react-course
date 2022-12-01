import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
	const [response, setResponse] = useState([]);
	const [isSuccessful, setIsSuccessful] = useState("");
	const [error, setError] = useState("");

	const getData = useCallback(async url => {
		try {
			const response = await axios.get(url);

			setIsSuccessful(response.status === 200);

			setResponse(response.data);
		} catch (error) {
			setError(error.message);
		}
	}, []);

	return { response, error, isSuccessful, getData };
};

export default useHttp;
