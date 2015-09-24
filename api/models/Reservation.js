/**
* Reservation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
    },
  	year: {
  		type: 'string',
  	},
  	month: {
  		type: 'string',
  	},
  	day: {
  		type: 'string',
  	},
  	areaA: {
  		type: 'integer',
  	},
   	areaB: {
  		type: 'integer',
  	},
   	areaC: {
  		type: 'integer',
  	},
   	areaD: {
  		type: 'integer',
  	},
  }
};

