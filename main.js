var searchInput = document.getElementById("trans");
var moResult = document.getElementsByClassName("movies");
var search = "hell";
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + search, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "0be463ade2mshcff878ea173edc7p1cd779jsn32841bb5fd95"
	}
})
.then(response => response.json())
.then(data => {
	const lista = data.d
	console.log(data)
	lista.map((item) => {
		
		const moName = item.l;
		const poster = item.i.imageUrl;
		const movie = `<li><img src="${poster}"><h3>${moName}</h3></li>`;
		document.querySelector('.movies').innerHTML += movie;

	})
})
.catch(err => {
	console.error(err);
});
function btn(){


}