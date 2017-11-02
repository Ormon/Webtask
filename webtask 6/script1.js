let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};
for(let i=0;i<countries.length;i++)
	document.getElementById("countries").innerHTML+="<option>"+countries[i]+"</option>";
function myFunction() {
	var selectobject=document.getElementById("cities")
 	while(selectobject.length>0){
 		selectobject.remove(0);
 	}
	if(document.getElementById("countries").value!="Select country"){
		let city = cities_by_country[document.getElementById("countries").value];
		for(var i=0;i<city.length;i++)
			document.getElementById("cities").innerHTML+="<option>"+city[i]+"</option>";
	}
	else 
		document.getElementById("cities").innerHTML="<option>Select city</option>";
}
document.getElementById("countries").addEventListener("change",myFunction);