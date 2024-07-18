import { animate } from "motion";

import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";

const uri = window.location.pathname;
const routes = {
	"/": Homepage,
	"/movie/detail": MovieDetail,
};

await routes[uri]();

/* document.querySelectorAll("a").forEach((link) => {
	console.log(link);
	link.addEventListener("click", async (e) => {
		e.preventDefault(); // prevent the default behavior of <a> tag
		history.pushState({}, "", e.target.href); // change url without reloading page
		const uri = window.location.pathname;
		await routes[uri](); 
	});
}); */

/* navbar animation */
let open = false;
document.querySelector("#menuToggleBtn").addEventListener("click", () => {
	if (!open) {
		animate("#mainNav", { transform: "translateY(0vh)" }, { duration: "2" });
	} else {
		animate("#mainNav", { transform: "translateY(10vh)" }, { duration: "2" });
	}
	open = !open;
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 640) {
		document.querySelector("#mainNav").removeAttribute("style");
		open = false;
	}
});
