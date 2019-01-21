//load an external google sheet and display it in the carteret format

$(function(){

	//get the script reference and sheet id
	var $script = $('script[src*="spreadsheet.js?id="]');
	var src = $script.attr('src');
	var sheet_id = src.substr(src.lastIndexOf('=') + 1);

	$.getJSON('https://spreadsheets.google.com/feeds/list/' + sheet_id + '/1/public/values?alt=json', function(data){

		var current_day, output = '', meetings = [];

		//parse data
		for (var i = 0; i < data.feed.entry.length; i++) {
			var meeting = {};
			$.map(data.feed.entry[i], function(v, i){
				if (i.substr(0, 4) == 'gsx$') {
					meeting[i.substr(4)] = v['$t'];
				}
			});
			if (meeting.time && meeting.name && meeting.day && meeting.address) {
				meetings.push(meeting);
			}
		}

		//console.table(meetings);

		//build output
		for (var i = 0; i < meetings.length; i++) {

			//for readability
			var meeting = meetings[i];

			//heading
			if (meeting.day !== current_day) {
				output += '<h2><a name="' + meeting.day + '">' + meeting.day + '</a></h2>';
				current_day = meeting.day;
			}

			//output meeting
			output += '<p><strong>' + meeting.name + '</strong><br>';
			output += meeting.time + ' ' + meeting.types.replace(',', '') + '<br>';
			if (meeting.notes) output += '(' + meeting.notes + ') ';
			output += meeting.location + '<br>';
			output += meeting.address + ', ' + meeting.city + '<br>';
			output += '<strong><em>Enter your starting address:</em></strong>';
			output += '<form action="http://maps.google.com/maps" method="get" target="_blank">';
			output += '<input type="text" name="saddr">';
			output += '<input type="hidden" name="daddr" value="' + meeting.address + ', ' + meeting.city + ', ' + meeting.state + '">';
			output += '<input type="submit" value="Get Directions">';
			output += '</form>';
			output += '</p>';
			output += '&nbsp;';

		}

		//add output to page
		$script.after(output);
	});
});
