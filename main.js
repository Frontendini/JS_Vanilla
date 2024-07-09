const url = "https://api.themoviedb.org/3/movie/upcoming";
const token =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDk0MTJjZmQ2OWQyMmYxMTZhNTMxYzIyYjU2MjU1MiIsIm5iZiI6MTcyMDU0NjY2Mi43MDQ3Nywic3ViIjoiNjU2MjE3NTZhNmMxMDQwMGFjYTdhNGJhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.m2JORSHJzDNN-sTiV3ZO9v4DORExH5O0HfXYKF3TBXQ";

fetch(url, {
	method: "GET",
	headers: {
		Authorization: `Bearer ${token}`,
	},
})
	.then((response) => response.json())
	.then((data) => {
		data.results.forEach((movie) => {
			let imgTag = `<img class="p-5 hover:scale-125" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">`;
			document.querySelector("#moviesContainer").innerHTML += imgTag;
		});

		console.log(data);
	});
