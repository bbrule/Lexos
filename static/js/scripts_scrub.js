  $(function() {
	// Close sub-panels on load (but advanced options are open)
	$(".level2").nextAll( ".expandable" ).toggle();
  
    var options = {"easing" : "easeInOutQuad"};
	$('.level1').click(function(){
		$(this).find('.chevron').toggleClass( "fa-angle-right fa-angle-down", options, 1000 );
		$( ".expandable" ).toggle( "blind", options, 400 );
	});
	$('.level2').click(function(){
		$(this).find('.chevron').toggleClass( "fa-angle-right fa-angle-down" );
		$(this).nextAll(".expandable").first().toggle( "blind", options, 250 );
	});
  });

$(function() {
	// display additional options on load
	//var advancedOptions = $("#advanced-title");
	//advancedOptions.find('.icon-arrow-right').addClass("showing");
	//advancedOptions.siblings('.expansion').slideToggle(0);

	$('.scrub-upload').change(function(ev) {
		filename = ev.target.files[0].name;

		$(this).siblings('.bttnfilelabels').html(filename);
	});

	$(".bttnfilelabels").click( function() {
		var filetype = $(this).attr('id').replace('bttnlabel', '');
		usingCache = $('#usecache'+filetype).attr('disabled') != 'disabled';

		if ((usingCache) || ($(this).attr('id') != '')) {
			$(this).siblings('.scrub-upload').attr('value', '');
			$("#usecache"+filetype).attr('disabled', 'disabled');
			$(this).text('');
		}
	});

	$("#punctbox").click( function() {
		var timeToToggle = 100;
		if ($(this).children('input').is(':checked')) {
			$("#aposhyph").fadeIn(timeToToggle);
		}
		else {
			$("#aposhyph").fadeOut(timeToToggle);
		}
	});
});