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
	}
};

