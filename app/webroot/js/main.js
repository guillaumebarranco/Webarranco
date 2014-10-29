$(document).ready(function() {
	var position;

	console.log(document.location.href);
	if($('.page-about').length != 0) {
		$('.link-about').addClass('active');

	} else if($('.page-home').length != 0) {
		$('.link-home').addClass('active');

	} else if($('.page-projects').length != 0) {
		$('.link-projects').addClass('active');

	} else if($('.page-skills').length != 0) {
		$('.link-skills').addClass('active');

	} else if($('.page-contact').length != 0) {
		$('.link-contact').addClass('active');

	} else if($('.page-blog').length != 0) {
		$('.link-blog').addClass('active');
	}




	$(window).off('scroll');
	$(window).on('scroll', function() {
		$('.graphic-bar-html5').width(180);
		setTimeout(function(){$('.graphic-bar-css3').width(180);}, 200);
		setTimeout(function(){$('.graphic-bar-js').width(150);}, 400);
		setTimeout(function(){$('.graphic-bar-php').width(130);}, 600);
		setTimeout(function(){$('.graphic-bar-sql').width(130);}, 800);
		setTimeout(function(){$('.graphic-bar-curieux').width(220);}, 1000);
	});
	var letexte = '~ Vous venez d\'entrer dans la Warp Zone ~';
	var cmpt = 0;
	var koko = 0;
	var courant;

	function typewriter(){
	  lelien = document.getElementById('warp');
		  if(cmpt < letexte.length) {
		     courant = lelien.innerHTML.substring(0, lelien.innerHTML.length -1);
		     courant += letexte.charAt(cmpt)+"_";
		     lelien.innerHTML = courant;
		  
		  } else {
		     koko++;
		     if(koko < 1) {
		     	lelien.innerHTML = "";
		     	cmpt = -1;
		     }
		  }
		  cmpt++;
		  setTimeout(function(){typewriter()},80);

	}

	var cheat = 0;

	// CHEAT CODE

	$(document).keydown(function(e) {
		if(cheat === 1) {
			if(e.which == 40) {
				cheat = 2;
			} else {
				cheat = 0;
				$('.cheat').css('background', '#F4FA58');
				$('.cheat-a').css('background', '#2E64FE');
				$('.cheat-b').css('background', '#04B45F');
				$('.cheat').css('color', 'black');
			}
		} else if(cheat === 2) {
			if(e.which == 39) {
				cheat = 3;
			} else {
				cheat = 0;
				$('.cheat').css('background', '#F4FA58');
				$('.cheat-a').css('background', '#2E64FE');
				$('.cheat-b').css('background', '#04B45F');
				$('.cheat').css('color', 'black');
			}
		} else if(cheat === 3) {
			if(e.which == 37) {
				cheat = 4;
			} else {
				cheat = 0;
				$('.cheat').css('background', '#F4FA58');
				$('.cheat-a').css('background', '#2E64FE');
				$('.cheat-b').css('background', '#04B45F');
				$('.cheat').css('color', 'black');
			}
		}else if(cheat === 4) {
			if(e.which == 65) {
				cheat = 5;
			} else {
				cheat = 0;
				$('.cheat').css('background', '#F4FA58');
				$('.cheat-a').css('background', '#2E64FE');
				$('.cheat-b').css('background', '#04B45F');
				$('.cheat').css('color', 'black');
			}
		}else if(cheat === 5) {
			if(e.which == 66) {
				cheat = 6;
			} else {
				cheat = 0;
				$('.cheat').css('background', '#F4FA58');
				$('.cheat-a').css('background', '#2E64FE');
				$('.cheat-b').css('background', '#04B45F');
				$('.cheat').css('color', 'black');
			}
		} else {
			if(e.which == 38) {
				cheat = 1;
			} else {
				cheat = 0;
				$('.cheat').css('background', '#F4FA58');
				$('.cheat-a').css('background', '#2E64FE');
				$('.cheat-b').css('background', '#04B45F');
				$('.cheat').css('color', 'black');
			}
	    }

	    if(cheat === 1) {
	    	console.log('one time');
	    	$('.cheat-1').css('background', 'black');
	    } else if(cheat === 2) {
	    	console.log('two times');
	    	$('.cheat-2').css('background', 'black');
	    } else if(cheat === 3) {
	    	console.log('three times');
	    	$('.cheat-3').css('background', 'black');
	   	} else if(cheat === 4) {
	   		console.log('four times');
	   		$('.cheat-4').css('background', 'black');
	   	} else if(cheat === 5) {
	   		console.log('five times');
	   		$('.cheat-a').css('background', 'black');
	   		$('.cheat-a').css('color', '#FAFA58');
	   	} else if(cheat === 6) {

	   		$('body').append('<div class="warp-zone"><h1 id="warp"></h1></div>');
	   		$('.warp-zone').width($(window).width());
	   		$('.warp-zone').height($(window).height());

	   		$('.warp-zone').fadeIn(800);
	   		typewriter();
	   		//letexte = '~ Kokokokokokokokoko ~';
			//koko = 0;
			//typewriter();


	   		//TweenLite.to($('.warp-zone h1'), 2, {text:"~ Vous venez d\'entrer dans la Warp Zone ~", ease:Linear.easeNone});

	   		$('.cheat-b').css('background', 'black');

	   		$('.cheat-b').css('color', '#FAFA58');
	   		$('.cheat-a').css('color', '#FAFA58');
	   		
	   		setTimeout(function() {$('.cheat').css('background', '#F4FA58'); $('.cheat').css('color', 'black');$('.cheat-a').css('background', '#2E64FE');$('.cheat-b').css('background', '#04B45F');}, 500)
	   	}
	});

	var mousein = 0;
	var x;

	$('.bloc-one').on('mouseover', function(e) {

		if(mousein === 0) {
			//console.log('x', e.clientX);
			x = e.clientX;
			mousein = 1;
		} else if(mousein === 1) {
			//console.log('x2', e.clientX);
			if(e.clientX > x) {
				//console.log('ok');
				$('.circle-background').css('background-position', e.clientX - x+'px 0px');
			} else if(e.clientX < x) {
				//console.log('ok2');
				$('.circle-background').css('background-position', x - e.clientX+'px 0px');
			}
			x = e.clientX;
		}
	});


	// ABOUT

	console.log($('.bloc-about-manga').length);

	for (var i = 0; i < $('.bloc-about-manga').length; i++) {
		$('.bloc-about-manga:eq('+i+')').css('left', i*29+'px');
		$('.bloc-about-manga:eq('+i+')').css('background', '#8'+i+'2');
		$('.bloc-about-musique:eq('+i+')').css('left', i*29+'px');
		$('.bloc-about-musique:eq('+i+')').css('background', '#8'+i+'2');
	};

	for (var i = 0; i < $('.bloc-about-film').length; i++) {
		$('.bloc-about-film:eq('+i+')').css('left', '-'+i*29+'px');
		$('.bloc-about-film:eq('+i+')').css('background', '#8'+(i+1)+'2');
		$('.bloc-about-jeux:eq('+i+')').css('left', '-'+i*29+'px');
		$('.bloc-about-jeux:eq('+i+')').css('background', '#8'+(i+1)+'2');
	};

	$('.type-about a').on('click', function(e) {
		e.preventDefault();

		var $this_type = $(this).attr('data-type');
		if($this_type == 'all') {
			$('.bloc-about').css('opacity', '1');
			$('.separator').css('opacity', '1');
		} else {
			$('.bloc-about').css('opacity', '0.3');
			$('.separator').css('opacity', '0.3');
			$('.bloc-about-'+$this_type).css('opacity', '1');
		}
		
	});

	var check_menu = 0;

	$('.menu_mobile ul').hide();
	$('.menu_mobile').click(function() {
		if(check_menu == 0) {
			$('.menu_mobile ul').slideDown();
			$(this).css('height', 'auto');
			check_menu = 1;
		} else {
			$('.menu_mobile ul').slideUp();
			$(this).css('height', 'auto');
			check_menu = 0;
		}
	});

});



