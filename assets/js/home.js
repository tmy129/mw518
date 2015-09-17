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
		if($("#month option:selected").val()=="2"){
			if($("#year").val()%4==0){
				$("#day").find("option").remove();
				for(var i=1; i<=29; i++){
					$("#day").append($("<option></option>").attr("value", i).text(i.toString()));
				}
			} else {
				$("#day").find("option").remove();
				for(var i=1; i<=28; i++){
					$("#day").append($("<option></option>").attr("value", i).text(i.toString()));
				}
			}
		}
	}).change();
	$("#searchbtn").click(function(){
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		$.post("/search", {year: year, month: month, day: day}, function(res){
			if(res.err){
				alert("資料庫發生錯誤，請稍候再試！");
			}
			else{
				$("#A").html(res.lA);
				$("#B").html(res.lB);
				$("#C").html(res.lC);
				$("#D").html(res.lD);
				$("#status").css("display","block");
			}
		});
	});
});


