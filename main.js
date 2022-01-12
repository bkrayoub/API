var searchInput = document.getElementById("trans");
var result = document.getElementById("result");

fetch("https://yandextranslatezakutynskyv1.p.rapidapi.com/detectLanguage", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "YandexTranslatezakutynskyV1.p.rapidapi.com"
	},
	"body": {
		"apiKey": "<REQUIRED>",
		"text": "<REQUIRED>"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});