$(function () {
	setTimeout(function () {
		$('h1').text('Jquery is working!');
		
		$.getJSON( "http://api.tripadvisor.com/api/partner/2.0/map/42.730172,-73.678802?key=55c559bc-e184-49ac-ab81-43b20e2f6b45", function( data ) {
			  var items = [];
			  $.each( data, function( key, val ) {
				//tems.push( "<li id='" + key + "'>" + val + "</li>" );
				for (var i=0; i<val.length; i++) {
					console.log(val[i]);
				}
			  });
			 
		});
		
	}, 1000);
});