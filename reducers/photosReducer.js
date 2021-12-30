import { useReducer } from "react";
import ACTIONS from "./actions";

const initialState = {
	page: 1,
	photos: [],
	isMobile: false,
	query: null,
	favourites: [],
};

const initializer = (initialState) => initialState;

function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.SET_PHOTOS: {
			return {
				page: payload.page,
				photos: payload.photos,
				isMobile: payload.isMobile,
				query: payload.query,
				favourites: [],
			};
		}
		case ACTIONS.ADD_FAVOURITE: {
			return {
				...state,
				photos: state.photos.map((photo) => {
					if (photo.id === payload) {
						return { ...photo, liked: !photo.liked };
					}
					return photo;
				}),
			};
		}
		case ACTIONS.SET_FAVOURITE: {
			return {
				...state,
				favourites: state.photos.filter((photo) => photo.liked),
			};
		}
		case ACTIONS.RESET_PHOTOS: {
			return initializer(initialState);
		}
		default:
			return state;
	}
}

export default function photosReducer(data) {
	const [state, dispatch] = useReducer(reducer, initialState, initializer);

	return {
		state,
		dispatch,
	};
}
