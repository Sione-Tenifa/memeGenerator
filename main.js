const topText = document.querySelector("input[name = 'top-text']")
const bottomText = document.querySelector("input[name = 'bottom-text']")
const mainCanvas = document.querySelector("#myCanvas")
const form = document.querySelector("#memeForm")
const imgURL = document.querySelector("input[name = 'imgURL']")


form.addEventListener("submit", function(e){
	e.preventDefault()
	const memeValues = createMeme(topText.value, bottomText.value, imgURL.value)

})

function createMeme(top, bottom, imgURL){
    console.log(top, bottom, imgURL)
    
     var ctx = mainCanvas.getContext("2d");
    // // var img = document.getElementById("screamhttps://i.memeful.com/media/post/Wdn7mNw_700wa_0.gif");
    // ctx.drawImage(imgURL, 10, 10)

    const background = new Image();
    background.src = imgURL;
    background.onload = function(){
      ctx.drawImage(background, 0, 0);   
    }

    
    ctx.textAlign = "center";
    ctx.font = "50px Impact,sans-serif";
    // ctx.fillStyle = "white";
    // ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.fillText(top, 10, 50);
}