import { createClient } from "pexels";

const client = createClient(`${process.env.NEXT_APP_PEXELS_API_KEY}`);

export function getPhotos({ query, per_page = 10, page = 1 } = {}) {
	return client.photos.search({ query, per_page, page });
}
