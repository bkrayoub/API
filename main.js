var searchInput = document.getElementById("trans");
var moResult = document.getElementsByClassName("movies");
var search = "ha";
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + search, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "652492f9bcmshf24c46601b86b30p13088cjsn8b31ba67afaf"
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
	alert("")

}