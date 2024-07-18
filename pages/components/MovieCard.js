import { formatDate } from "../../utils/formatDate";


export default function MovieCard(movie){
    return `
        <div class="bg-no-repeat bg-cover bg-[center_-130px] sm:bg-[130px_center] rounded-lg opacity-0 hover:shadow-none" style="background-image: url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')">
            <div class="size-full p-5 bg-gradient-to-t sm:bg-gradient-to-r from-neutral-950 from-50% rounded-lg">
                <div class="mt-20 sm:mt-0 sm:w-2/3">
                    <div class="flex gap-5">
                        <img class="w-24" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                        <div>
                            <p class="text-2xl text-white line-clamp-1 rounded-lg sm:hover:pe-2 sm:hover:line-clamp-none sm:hover:text-nowrap sm:hover:bg-neutral-950 hover:z-20">
                                ${movie.title}
                            </p>
                            <p>${formatDate(movie.release_date)}</p>		
                        </div>
                    </div>
                    <p class="line-clamp-4 mt-4 text-sm">${movie.overview}</p>
                    <a href="/movie/detail?id=${movie.id}" class="inline-block bg-red-600 text-white py-1 px-2 rounded-md mt-10">Detail</a>
                </div>
            </div>
        </div>
    `;
}