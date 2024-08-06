import MovieCard from "./components/MovieCard";

import { inView, animate } from "motion";
import MovieDetail from "./MovieDetail";

export default async function Homepage() {
	const url = import.meta.env.VITE_MOVIEDB_URL;
	const token = import.meta.env.VITE_MOVIEDB_KEY;
	let page = 1;

	const response = await fetch(`${url}/movie/upcoming?page=${page}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const data = await response.json();

	document.querySelector("#app").innerHTML = `
		<div class="container mx-auto px-4">
			<div id="grid" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 z-50">
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

	window.addEventListener("scroll", async () => {
		if(window.innerHeight+window.scrollY > document.querySelector("#app").clientHeight - 400){
			page++;
			const response = await fetch(`${url}/movie/upcoming?page=${page}`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const data = await response.json();
			console.log(data);
			document.querySelector("#grid").innerHTML += data.results.map((movie) => MovieCard(movie)).join("")
		}
	});
}
