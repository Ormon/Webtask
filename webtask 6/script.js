function myFunction(event){ 
	event.currentTarget.parentNode.setAttribute("data-status","done");
}
for(let i = 0;i<5;i++)
	document.querySelectorAll("#tasks button")[i].onclick=myFunction; 
