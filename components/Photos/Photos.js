import { useContext, useCallback } from "react";
import SinglePhoto from "./SinglePhoto/SinglePhoto";
import styles from "./Photos.module.css";
import { photoContext } from "../../context/photoContext";
import ACTIONS from "../../reducers/actions";

export default function Photos() {
	const { page, photos, dispatch, isMobile } = useContext(photoContext);

	const addFavourite = useCallback(
		(photoId) => {
			dispatch({ type: ACTIONS.ADD_FAVOURITE, payload: photoId });
			dispatch({ type: ACTIONS.SET_FAVOURITE });
		},
		[dispatch]
	);

	return (
		<section className={styles["photos-grid"]}>
			{photos?.map((photo) => (
				<SinglePhoto
					key={photo.id}
					photo={photo}
					addFavourite={addFavourite}
					isMobile={isMobile}
				/>
			))}
		</section>
	);
}
