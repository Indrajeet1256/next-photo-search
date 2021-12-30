import { createContext, useEffect } from "react";
import photosReducer from "../reducers/photosReducer";
import ACTIONS from "../reducers/actions";

export const photoContext = createContext(null);

export default function PhotosProvider({ children, data }) {
	const { state, dispatch } = photosReducer();

	useEffect(() => {
		dispatch({ type: ACTIONS.RESET_PHOTOS });
		dispatch({ type: ACTIONS.SET_PHOTOS, payload: data });
	}, [dispatch, data]);

	const photosState = {
		...state,
		dispatch,
	};

	return (
		<photoContext.Provider value={photosState}>
			{children}
		</photoContext.Provider>
	);
}
