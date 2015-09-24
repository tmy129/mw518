$(document).ready(function() {
	$("#add").click(function(){
		window.location.assign("/edit");
	});
	order_search("","","","");
});

function order_search(y,m,d,user){
	$.post("/order_search",{year:y,month:m,day:d,name:user},function(res){
		if(res.err){
			alert("查詢錯誤，請稍候再試");
		}
		else{
			for(var i=0; i<res.length; i++){
				var areaCount = 0;
				var areaInfo = new Array();
				if(res[i].areaA!=0){
					areaInfo[areaCount]=new Array(2);
					areaInfo[areaCount][0] = "A";
					areaInfo[areaCount][1] = res[i].areaA.toString();
					areaCount++;
				}
				if(res[i].areaB!=0){
					areaInfo[areaCount]=new Array(2);
					areaInfo[areaCount][0] = "B";
					areaInfo[areaCount][1] = res[i].areaA.toString();
					areaCount++;
				}
				if(res[i].areaC!=0){
					areaInfo[areaCount]=new Array(2);
					areaInfo[areaCount][0] = "C";
					areaInfo[areaCount][1] = res[i].areaA.toString();
					areaCount++;
				}
				if(res[i].areaD!=0){
					areaInfo[areaCount]=new Array(2);
					areaInfo[areaCount][0] = "D";
					areaInfo[areaCount][1] = res[i].areaA.toString();
					areaCount++;
				}
				$("#result").append("<tr><td rowspan=\""+areaCount.toString()+"\">"+res[i].name+"</td><td rowspan=\""+areaCount.toString()+"\">"+res[i].year+"-"+res[i].month+"-"+res[i].day+"</td><td>"+areaInfo[0][0]+"</td><td>"+areaInfo[0][1]+"</td></tr>");
				for(var j=1; j<areaCount; j++){
					$("#result").append("<tr><td>"+areaInfo[j][0]+"</td><td>"+areaInfo[j][1]+"</td></tr>");
				}
			}
		}
	});
}