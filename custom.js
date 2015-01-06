// Þegar DOM er ready
$(function() {

	// Init controller
	var scrollMagicController = new ScrollMagic();

	// Animation í 0.5s
	var tween = TweenMax.to('#animation', 0.5, {
		backgroundColor: 'rgb(255, 39, 46)',
		scale: 7,
		rotation: 360
	});

	// Þegar þetta scene sést þá fer animation í gang
	var scene = new ScrollScene({
		triggerElement: '#scene',
		offset: 150
	})
	.setTween(tween)
	.addTo(scrollMagicController);

});