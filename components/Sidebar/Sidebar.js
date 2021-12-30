import styles from "./Sidebar.module.css";
import { HiHeart } from "react-icons/hi";

export default function Sidebar() {
	return (
		<aside className={styles["sidebar-wrapper"]}>
			<div className={styles["sidebar-text-wrapper"]}>
				<p>
					Made With{" "}
					<HiHeart
						size={20}
						style={{
							verticalAlign: "middle",
						}}
					/>{" "}
					By <span>Indrajeet Giri</span>
				</p>
			</div>
		</aside>
	);
}
