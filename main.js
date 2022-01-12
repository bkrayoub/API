var searchInput = document.getElementById("trans");
var result = document.getElementById("result");

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "2195fc1f9dmsh109f121195f64c0p10b5b4jsn5639135863dc"
	}
})
.then(response => response.jason())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});