import { useContext } from "react";
import Search from "../Search/Search";
import styles from "./Header.module.css";
import Link from "next/link";
import { HiCamera, HiOutlineHeart } from "react-icons/hi";

import { photoContext } from "../../context/photoContext";

export default function Header() {
	const { isMobile, favourites } = useContext(photoContext);

	return (
		<header className={styles["header-container"]}>
			<div className={styles["container"]}>
				<div
					className={styles["logo-wrapper"]}
					style={{
						flex: isMobile ? "0 0 10%" : "0 0 40%",
					}}>
					<Link href="/" passHref>
						<div className={styles["logo"]}>
							{isMobile ? (
								<HiCamera size={23} />
							) : (
								<>
									<HiCamera size={23} />
									<span>Photo Search</span>
								</>
							)}
						</div>
					</Link>
				</div>
				<Search />
				<div className={styles["favourites-wrapper"]}>
					<div className={styles["favourites"]}>
						<HiOutlineHeart size={22} /> <span>{favourites?.length}</span>
					</div>
				</div>
			</div>
		</header>
	);
}
