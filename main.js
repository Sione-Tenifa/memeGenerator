const topText = document.querySelector("input[name = 'top-text']")
const bottomText = document.querySelector("input[name = 'bottom-text']")
const mainCanvas = document.querySelector("myCanvas")
const form = document.querySelector("#memeForm")
const imgURL = document.querySelector("input[name = 'imgURL']")


form.addEventListener("submit", function(e){
	e.preventDefault()
	const memeValues = createMeme(topText.value, bottomText.value, imgURL.value)
	// mainCanvas.appendChild(memeValues)

})

function createMeme(top, bottom, imgURL){
    console.log(top, bottom, imgURL)
}