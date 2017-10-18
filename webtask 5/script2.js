function changeImage(event) {
	var src = event.currentTarget.src;
	var newImg = document.createElement("img");
	newImg.src = src;
	var cur = document.getElementById("bigImage").childNodes[1];
	document.getElementById("bigImage").replaceChild(newImg, cur);
}
