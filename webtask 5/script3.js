function add(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var fac = document.getElementById("faculty").value;

	if(name==""){
		document.getElementById("name").style.border="3px solid red";
		return;
			}
    if(surname==""){
		document.getElementById("surname").style.border="3px solid red";
		return;
			}
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");

	td1.innerHTML = name;
	td2.innerHTML = surname;
	td3.innerHTML = "<strong>" + fac + "</strong>";


	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	var table = document.getElementById("students");
	table.appendChild(tr);
}