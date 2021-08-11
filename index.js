const img = document.querySelector("img");

fetch(
	"https://api.giphy.com/v1/gifs/translate?api_key=Ov6f2QLfP2N2MdUGNrNlJ8vaPw2l9wWA&s=anime",
	{ mode: "cors" }
)
	.then(function (response) {
		return response.json();
	})
	.then(function (response) {
		img.src = response.data.images.original.url;
	});
