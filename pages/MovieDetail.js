import { formatDate } from "../utils/formatDate";

export default async function MovieDetail(id) {
	const url = import.meta.env.VITE_MOVIEDB_URL;
	const token = import.meta.env.VITE_MOVIEDB_KEY;

	const options = {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await fetch(`${url}/movie/${id}`, options);
	const movie = await response.json();

	console.log(movie);

	document.querySelector("#app").innerHTML = `
        <div class="h-[40vh] relative">
            <img class="h-[40vh] w-full object-cover" src="https://image.tmdb.org/t/p/original${movie.backdrop_path}">
            <div class="size-full absolute top-0 bg-gradient-to-t from-black" />
        </div>
        <div class="container mx-auto relative -mt-36 bg-neutral-950 rounded-3xl p-10 flex gap-5">
            <img class="hidden sm:block w-1/4" src="https://image.tmdb.org/t/p/original${movie.poster_path}">
            <div>
                <div class="flex flex-col sm:flex-row items-center gap-2">
                    <h1 class="text-white text-3xl sm:text-4xl font-bold">${movie.title}</h1>
                    <p class="text-lg">(${formatDate(movie.release_date)})</p>
                </div>
                <h2 class="hidden sm:block text-xl mt-2">${movie.tagline}<h2>
                <p class="mt-10">${movie.overview}</p>
                <p class="text-neutral-500 mt-16">
                    ${movie.genres.reduce((acc, gnre) => {
                        acc.push(" " + gnre.name);
                        return acc;
                    }, [])}
                </p>
            </div>
        </div>
    `;
}
