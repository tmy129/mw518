$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
    	lang: 'zh-tw'
        // put your options and callbacks here
    });
});
$(document).ready(function() {
    $('#calendar').fullCalendar({
    	defaultDate: '2015-08-11',
    	businessHours: true,
		editable: true,
	    events: [
	        {
	            title  : '吳小姐',
	            start  : '2015-08-09',
	            constraint: 'businessHours' 
	        },
	        {
	            title  : '蔡先生',
	            start  : '2015-08-05',
	            end    : '2015-08-07',
	            constraint: 'businessHours'
	        },
	        {
	            title  : '陳先生',
	            start  : '2015-08-11',//T12:30:00',
	            constraint: 'businessHours'
	            //allDay : false // will make the time show
	        }
	    ]
	});
});