//= require_tree .

$(document).ready(function(){
    
	maximizeTitle()
    setupScrollSpy();

}); 

function maximizeTitle() {
	textFit($('#title')[0], {maxFontSize: 250})
    $('#subtitle').css("top", $(".textFitted").css("font-size")); //Subtitle just below big title
    textFit($('#subtitle')[0], {maxFontSize: 250})
}


function setupScrollSpy() {
	$('.section').each(function(i) {
		var section = $(this);
		var position = section.position();
        var backgroundURL = section.css("background-image");
		section.scrollspy({
			min: position.top - Math.round(section.height()/2),
			max: position.top + Math.round(section.height()/2),
			onEnter: function(element, position) {
				$("#link-"+element.id).addClass('active');
                $("#article-"+element.id).fadeIn(600);
                transitionBackgrounds(backgroundURL)
			},
			onLeave: function(element, position) {
				$("#link-"+element.id).removeClass('active');
                $("#article-"+element.id).fadeOut();
			}
		});
	});
}

function transitionBackgrounds(backgroundURL) {
	$("#oldbackground").css("background-image", $("#background").css("background-image")).show();
    $("#background").hide().css("background-image", backgroundURL);
    $("#background").fadeIn(1200);
}
