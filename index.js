const img = document.querySelector("img");
const nextGifBtn = document.getElementById("next-gif");
const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("search-button");
const errorDisplay = document.getElementById("error");

async function loadGif(paraQuery, query = "aesthetic") {
	query = paraQuery ? paraQuery : query;
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=Ov6f2QLfP2N2MdUGNrNlJ8vaPw2l9wWA&s=${query}`,
			{ mode: "cors" }
		);
		const responseData = await response.json();
		img.src = responseData.data.images.original.url;
		errorDisplay.innerHTML = null;
	} catch {
		errorDisplay.innerHTML = "GIF Guru can't find what you want right now :(";
	}
}

window.onload = loadGif();

nextGifBtn.addEventListener("click", () => {
	loadGif(searchBox.value);
});

searchBtn.addEventListener("click", () => {
	loadGif(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
	if (event.key !== "Enter") return;
	searchBtn.click();
	event.preventDefault;
});
