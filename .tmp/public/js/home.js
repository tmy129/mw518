$(document).ready(function() {
	for(var i=1; i<=12; i++) {
		$("#month").append($("<option></option>").attr("value", i).text(i.toString()));
	}
	$("#month").change(function() {
		// alert($("#month option:selected").val());
		$("#day").find("option").remove();
		switch($("#month option:selected").val()) {
			case "2":
				if($("#year").val()%4==0) {
					var dayNum=29;
				} else {
					var dayNum=28;
				}
				break;
			case "4":
			case "6":
			case "9":
			case "11":
				var dayNum=30;
				break;
			default:
				var dayNum=31;

		}
		for(var i=1; i<=dayNum; i++) {
			$("#day").append($("<option></option>").attr("value", i).text(i.toString()));
		}
	}).change();
	$("#year").change(function() {

	})
});


