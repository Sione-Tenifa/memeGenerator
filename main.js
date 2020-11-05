const topText = document.querySelector("input[name = 'top-text']")
const bottomText = document.querySelector("input[name = 'bottom-text']")
const mainCanvas = document.querySelector("#myCanvas")
const form = document.querySelector("#memeForm")
const imgURL = document.querySelector("input[name = 'imgURL']")

form.addEventListener("submit", function(e){
	e.preventDefault()
	createMeme(topText.value, bottomText.value, imgURL.value)

})

function createMeme(top, bottom, imgURL){
    console.log(top, bottom, imgURL)
    
     var ctx = mainCanvas.getContext("2d");

    const background = new Image();
    background.src = imgURL;
    background.onload = function(){
        ctx.drawImage(background, 0, 0, 600, 500);   
        ctx.textAlign = "center";
        ctx.font = "50px Impact,sans-serif";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = "2";
        // ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        ctx.fillText(top, mainCanvas.width/2, 40);
        ctx.fillText(bottom, mainCanvas.width/2, 480)
      }
    
}
    


    