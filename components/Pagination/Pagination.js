import { useContext } from "react";
import { useRouter } from "next/router";
import styles from "./Pagination.module.css";
import { photoContext } from "../../context/photoContext";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Pagination() {
	const { query, page, isMobile } = useContext(photoContext);
	const router = useRouter();

	const handlePrev = () => {
		if (page === 1) return;
		const prevPage = --page;
		return router.push(`/?keyword=${query}&page=${prevPage}`);
	};

	const handleNext = () => {
		const nextPage = ++page;
		return router.push(`/?keyword=${query}&page=${nextPage}`);
	};

	return (
		<div className={styles["pagination-wrapper"]}>
			<div className={styles["pagination"]}>
				<button onClick={handlePrev} disabled={page === 1}>
					<FiArrowLeft /> {!isMobile && <span>Prev</span>}
				</button>
				<p>{page}</p>
				<button onClick={handleNext}>
					{!isMobile && <span>Next</span>} <FiArrowRight />
				</button>
			</div>
		</div>
	);
}
