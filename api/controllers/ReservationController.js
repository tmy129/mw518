/**
 * ReservationController
 *
 * @description :: Server-side logic for managing reservations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	search: function(req, res){
		var aA = 3, aB = 5, aC = 4, aD = 2;
		var rA = 0, rB = 0, rC = 0, rD = 0;
		var y = req.param("year");
		var m = req.param("month");
		var d = req.param("day");

		Reservation.find({year:y,month:m,day:d}).exec(function(err,result){ /*find year, month, day*/
			if(err){
				console.log(err);
				res.send(500,{err: "資料庫發生錯誤"});
			}
			else{
				for(var i=0; i<result.length; i++){
					rA+=result[i].areaA;
					rB+=result[i].areaB;
					rC+=result[i].areaC;
					rD+=result[i].areaD;
				}
				res.send({
					lA:aA-rA, lB:aB-rB, lC:aC-rC, lD:aD-rD
				})
			}
		});
	},
	edit: function(req, res){
		var aA = 3, aB = 5, aC = 4, aD = 2;
		var rA = 0, rB = 0, rC = 0, rD = 0;	
		Reservation.find({year:req.param("year"),month:req.param("month"),day:req.param("day")}).exec(function(err,result){ /*find year, month, day*/
			if(err){
				console.log(err);
				res.send(500,{err: "資料庫發生錯誤"});
			}
			else{
				for(var i=0; i<result.length; i++){
					rA+=result[i].areaA;
					rB+=result[i].areaB;
					rC+=result[i].areaC;
					rD+=result[i].areaD;
				}
				lA=aA-rA;
				lB=aB-rB;
				lC=aC-rC;
				lD=aD-rD;
				var nA = parseInt(req.param("acnt"));
				var nB = parseInt(req.param("bcnt"));
				var nC = parseInt(req.param("ccnt"));
				var nD = parseInt(req.param("dcnt"));
				if(lA>=nA && lB>=nB && lC>=nC && lD>=nD){
					Reservation.create({name:req.param("name"),year:req.param("year"),month:req.param("month"),day:req.param("day"),areaA:nA,areaB:nB,areaC:nC,areaD:nD}).exec(function(err,result){
						if(err){
							console.log(err);
							res.send(500,{err: "資料庫發生錯誤"});
						}
						else{
							res.send({editOK:result});
						}
					});
				}
				else{
					var error="";
					if(lA<nA){
						error+="A區位置不足\n";
					}
					if(lB<nB){
						error+="B區位置不足\n";
					}
					if(lC<nC){
						error+="C區位置不足\n";
					}
					if(lD<nD){
						error+="D區位置不足\n";
					}
					res.send({editFail:error});
				}
			}
		});
	},
	o_search: function(req,res){
		Reservation.find({}).exec(function(err,result){
			if(err){
				console.log(err);
				res.send(500,{err:"資料庫發生錯誤"});
			}
			else{
				res.send(result);
			}
		});
	}
};

