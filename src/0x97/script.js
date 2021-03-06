/*----------------------------------------*\
  256x256x256 - script.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-27 12:27:03
  @Last Modified time: 2019-03-05 19:34:53
\*----------------------------------------*/
//http://qnimate.com/detect-shake-using-javascript/
document.addEventListener("DOMContentLoaded", setup);

function resizedHandler(){
	top.postMessage('SUCCESS', '*');
	console.log("resizedHandler");
}

function setup(){
	//check if shake is supported or not.
    if(!("ondevicemotion" in window)){
		alert("Not Supported");
		return;
	}
	var shakeEvent = new Shake({threshold: 5});
	shakeEvent.start();
	window.onShake = shakeHandler;
    interact('.trigger')
	.on("hold", tapHandler)
}

//stop listening
function stopShake(){
    shakeEvent.stop();
}

function shakeHandler(){
   open("https://www.youtube.com/watch?v=w0AOGeqOnFY");
}


function tapHandler (event){
	top.postMessage('SUCCESS', '*');
	console.log("tapHandler");
	event.target.style.backgroundColor="yellow";
}
