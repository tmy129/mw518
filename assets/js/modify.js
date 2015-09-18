$(document).ready(function() {
	$("#add").click(function(){
		window.location.assign("/edit");
	});
});

function order_search(y,m,d,user){
	$.POST("/o_search",{year:y,month:m,day:d,name:user},function(res){
		if(res.err){
			alert("查詢錯誤，請稍候再試");
		}
		else{
			$(#)
		}
	});
}