$(document).ready(function() {
	$("#sendbtn").click(function(){
		var name = $("#user_info").val();
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		var acnt = $("#area_a").val();
		var bcnt = $("#area_b").val();
		var ccnt = $("#area_c").val();
		var dcnt = $("#area_d").val();

		$.post("/editSend", {name: name, year: year, month: month, day: day, acnt: acnt, bcnt: bcnt, ccnt: ccnt, dcnt: dcnt}, function(res){
			if(res.err){
				alert("資料庫發生錯誤，請稍候再試！");
			}
			else if(res.editOK){
				alert("新增成功");
			}
			else{
				alert(res.editFail);
			}
		});
	});
});