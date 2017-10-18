function Determinant(){
	var x1 = parseInt(document.querySelector("#s11").value);
	var y1 = parseInt(document.querySelector("#s12").value);
	var z1 = parseInt(document.querySelector("#s13").value);
	
	var x2 = parseInt(document.querySelector("#s21").value);
	var y2 = parseInt(document.querySelector("#s22").value);
	var z2 = parseInt(document.querySelector("#s23").value);
	
	var x3 = parseInt(document.querySelector("#s31").value);
	var y3 = parseInt(document.querySelector("#s32").value);
	var z3 = parseInt(document.querySelector("#s33").value);
	
	var det = (x1*y2*z3 + x2*y3*z1 + x3*y1*z2) - (z1*y2*x3 + z2*y3*x1 + z3*y1*x2);
	var res = document.querySelector("#result");
	res.innerHTML = '';
	var div = document.createElement("div");
	div.textContent = det;
	document.querySelector("#result").appendChild(div);
	//3 5 1     1 4 2     7 1 9 
}
const button = document.querySelector("#determinant");
button.addEventListener('click',Determinant);