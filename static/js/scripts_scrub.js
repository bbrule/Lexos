  $(function() {
	// Close sub-panels on load (but advanced options are open)
	$(".level2").nextAll( ".expandable" ).toggle();
	$('.level1').find('.chevron').css({
        '-webkit-transform':'rotate(90deg)', 
        '-moz-transform':'rotate(90deg)',
        '-o-transform':'rotate(90deg)',
        '-ms-transform':'rotate(90deg)',
        'transform':'rrotate(90deg)'
    });
  
    var options = {"easing" : "easeInOutQuad"};
	$('.level1').click(function(){
		rotate($(this).find('.chevron'));
		$( ".expandable" ).toggle( "blind", 400, "easeInQuad" );
	});
	$('.level2').click(function(){
		rotate($(this).find('.chevron'));
		$(this).nextAll(".expandable").first().toggle( "blind", 400, "easeInQuad" );
	});
  });

  function rotate(el) {
	if (el.hasClass('showing')) {
		position = 0;
		el.removeClass( "showing" );
	} else {
		position = 90;
		el.addClass( "showing" );
	}
	el.css({
        '-webkit-transform':'rotate('+position+'deg)', 
        '-moz-transform':'rotate('+position+'deg)',
        '-o-transform':'rotate('+position+'deg)',
        '-ms-transform':'rotate('+position+'deg)',
        'transform':'rotate('+position+'deg)'
    });
  }
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