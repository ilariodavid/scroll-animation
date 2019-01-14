function animations(e) {
	
	var target = e && e.target ? e.target : document.body;
	
	var height = target.offsetHeight;
	var scrollTop = target.scrollTop;
	
	var offset = height + scrollTop;
	
	var animatables = document.querySelectorAll('.animatable, .animated');
	
	//32 = 16px margin top and 16px margin bottom.
	var heightAprox = (animatables.length > 0 ? animatables[0].offsetHeight : 0); 
	
	animatables.forEach(function(el, i) {
		if( ( i * heightAprox ) < offset ) {
			el.classList.remove('animatable');
			el.classList.add('animated');
		}
	});
	
};