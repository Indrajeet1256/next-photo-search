import Image from "next/image";
import styles from "./SinglePhoto.module.css";
import { HiOutlineUser, HiOutlineHeart, HiHeart } from "react-icons/hi";
import { MdOutlineDescription } from "react-icons/md";

export default function SinglePhoto({ photo, addFavourite }) {
	return (
		<article className={styles["photo-wrapper"]}>
			<div className={styles["image-wrapper"]}>
				<Image
					layout="responsive"
					priority="true"
					src={photo.src.medium}
					alt={photo.alt}
					width={photo.width}
					height={photo.height}
				/>
				<button
					type="button"
					style={{
						backgroundColor: photo.liked ? "#cc2b5e" : "#ffffff",
					}}
					className={styles["image-wrapper-button"]}
					onClick={() => addFavourite(photo?.id)}>
					{photo.liked ? (
						<HiHeart size={18} color="#fff" />
					) : (
						<HiOutlineHeart size={18} color="#000" />
					)}
				</button>
			</div>
			<div className={styles["photo-details"]}>
				<ul>
					<li className={styles["photo-details-item"]}>
						<div>
							<p>
								<MdOutlineDescription
									size={20}
									className={styles["photo-icon"]}
								/>{" "}
								<span>{photo.alt}</span>
							</p>
						</div>
					</li>
					<li className={styles["photo-details-item"]}>
						<div>
							<p>
								<HiOutlineUser size={20} className={styles["photo-icon"]} />{" "}
								<span>{photo.photographer}</span>
							</p>
						</div>
					</li>
				</ul>
				<a
					href={photo.photographer_url}
					rel="noopener noreferrer"
					target="_blank"
					className={styles["profile-button"]}>
					View Profile
				</a>
			</div>
		</article>
	);
}
