function initApp(){
	$("#btnClear").on("click", clearJSign);
	$("#btnExport").on("click", jSignExport);
}

function clearJSign(){
	$("#signature").jSignature("clear");
}

function jSignExport(){
	alert($("#signature").jSignature("getData", "base30"));
}