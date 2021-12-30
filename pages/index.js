import { useEffect, useState } from "react";
import Head from "next/head";
import { getPhotos } from "../api";
import { Photos, Pagination, Header, Sidebar } from "../components";
import PhotosProvider from "../context/photoContext";

export default function Home({ page, photos, query }) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function handleResize(event) {
			return setIsMobile(
				event ? event.target.innerWidth <= 768 : window.innerWidth <= 768
			);
		}
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const data = {
		page,
		photos,
		isMobile,
		query,
	};

	return (
		<PhotosProvider data={data}>
			<Head>
				<title>Pexels Photo Search</title>
				<meta
					name="description"
					content="Search your favourite photos and videos!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Sidebar />
			<Pagination />
			<Photos />
		</PhotosProvider>
	);
}

export async function getServerSideProps(context) {
	const keyword = context?.query?.keyword || "Nature";
	const currentPage = context?.query?.page || 1;

	const response = await getPhotos({
		query: `${keyword}`,
		per_page: 20,
		page: currentPage,
	});

	const { page, photos } = response;

	if (photos?.length === 0) {
		return {
			NotFound: true,
		};
	}

	return {
		props: {
			page: page,
			photos: photos,
			query: keyword,
		},
	};
}
