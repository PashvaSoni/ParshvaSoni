const typedTextSpan=document.querySelector(".typed-text");
const textArray=[" to all who visit this site and thankyou !", "rajvi shah", "mitesh vyas"];
const typingDelay=200;
const erasingDelay=100;
const newTextDelay = 800;

let textArrayIndex=0;
let charIndex=0;

function type(){
	if(charIndex<textArray[textArrayIndex].length){
		typedTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type,typingDelay);
	}
	
}
function removeNode(){
		const myDiv = document.getElementById("yo");
		const parent = myDiv.parentNode;
		parent.removeChild(myDiv);
}
document.addEventListener("DOMContentLoaded",function(){
	setTimeout(type,newTextDelay);
});