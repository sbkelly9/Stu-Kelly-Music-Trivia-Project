document.getElementById("submitbutton").addEventListener("click", myFunction);

function myFunction(event) {
  console.log("Click")
	event.preventDefault()
	topact = parseInt(document.querySelector('input[name = "topact"]:checked').value);
	prince = parseInt(document.querySelector('input[name = "prince"]:checked').value);
	clapton = parseInt(document.querySelector('input[name = "clapton"]:checked').value);
	elvis = parseInt(document.querySelector('input[name = "elvis"]:checked').value);
	jay = parseInt(document.querySelector('input[name = "jay"]:checked').value);
	thriller = parseInt(document.querySelector('input[name = "thriller"]:checked').value);
	jimi = parseInt(document.querySelector('input[name = "jimi"]:checked').value);
	tool = parseInt(document.querySelector('input[name = "tool"]:checked').value);
	passaway = parseInt(document.querySelector('input[name = "passaway"]:checked').value);
	manson = parseInt(document.querySelector('input[name = "manson"]:checked').value);
	phish = parseInt(document.querySelector('input[name = "phish"]:checked').value);
	rhcp = parseInt(document.querySelector('input[name = "rhcp"]:checked').value);
	billie = parseInt(document.querySelector('input[name = "billie"]:checked').value);
	marvin = parseInt(document.querySelector('input[name = "marvin"]:checked').value);
	dave = parseInt(document.querySelector('input[name = "dave"]:checked').value);
	aretha = parseInt(document.querySelector('input[name = "aretha"]:checked').value);
	mtv = parseInt(document.querySelector('input[name = "mtv"]:checked').value);
	bowie = parseInt(document.querySelector('input[name = "bowie"]:checked').value);
	zeppelin = parseInt(document.querySelector('input[name = "zeppelin"]:checked').value);
	floyd = parseInt(document.querySelector('input[name = "floyd"]:checked').value);

		   result = topact + prince + clapton + elvis + jay + thriller + jimi + tool + passaway + manson + phish + rhcp + billie + marvin + dave + aretha + mtv + bowie + zeppelin + floyd;
	   
	document.getElementById("grade").innerHTML = result;
	   


return false; 
}

