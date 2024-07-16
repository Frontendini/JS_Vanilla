import { animate } from "motion";

import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";

const uri = window.location.pathname.slice(1).split("/");

if (uri.includes("")){
	Homepage();
}else if(uri.includes("movie") && uri.includes("detail")){
	MovieDetail(uri[1]);
}else{
	console.log("404");
}


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
