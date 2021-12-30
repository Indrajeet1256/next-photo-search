import styles from "./Layout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
	return (
		<>
			<main className={styles["main-container"]}>
				<ToastContainer />
				{children}
			</main>
		</>
	);
}
