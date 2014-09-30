function closeThis (argDiv){
	var divToHide =  document.getElementById(argDiv);	
	divToHide.style.display = "none";
}

var buttonClose =  document.getElementById("close");
buttonClose.addEventListener("click", function(){

	closeThis("alert");

});