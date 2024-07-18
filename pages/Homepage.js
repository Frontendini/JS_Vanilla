import MovieCard from "./components/MovieCard";

import { inView, animate } from "motion";
import MovieDetail from "./MovieDetail";

export default async function Homepage() {
	const url = import.meta.env.VITE_MOVIEDB_URL;
	const token = import.meta.env.VITE_MOVIEDB_KEY;

	const response = await fetch(`${url}/movie/upcoming`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();

	document.querySelector("#app").innerHTML = `
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 z-50">
                        ${data.results.map((movie) => MovieCard(movie)).join("")}
                    </div>
                </div>
            `;

	/* cards animation */
	inView(".grid > div", ({ target }) => {
		let duration = 1.5;
		animate(target, { opacity: 1 }, { duration });
		return ({ target }) => animate(target, { opacity: 0 }, { duration });
	});
}
