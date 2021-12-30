import styles from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

export default function Search() {
	const [search, setSearch] = useState("");

	const router = useRouter();

	const handleSubmit = (event) => {
		event.preventDefault();

		const searchQuery = search.trim();

		if (!searchQuery) {
			return toast.error("Please Enter Seach Query...", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
			});
		}

		router.push(`/?keyword=${searchQuery}`);

		setSearch("");
	};

	return (
		<form className={styles["form-wrapper"]} onSubmit={handleSubmit}>
			<div className={styles["form-group"]}>
				<input
					type="text"
					placeholder="Search Photos"
					autoComplete="off"
					value={search}
					onChange={({ target }) => setSearch(target.value)}
					className={styles["input-control"]}
				/>
				<button type="submit" className={styles["submit-button"]}>
					<HiOutlineSearch size={20} color="#fff" />
				</button>
			</div>
		</form>
	);
}
