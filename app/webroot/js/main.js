$(document).ready(function() {

	// Gère les classes actives des liens du menu en fonction de la page courant

	if($('.page-about').length !== 0) {
		$('.link-about').addClass('active');

	} else if($('.page-home').length !== 0) {
		$('.link-home').addClass('active');

	} else if($('.page-projects').length !== 0) {
		$('.link-projects').addClass('active');

	} else if($('.page-skills').length !== 0) {
		$('.link-skills').addClass('active');

	} else if($('.page-contact').length !== 0) {
		$('.link-contact').addClass('active');

	} else if($('.page-blog').length !== 0) {
		$('.link-blog').addClass('active');
	}

	// Déclenche l'animation des graphiques de compétences au scroll de la page

	$(window).off('scroll');
	$(window).on('scroll', function() {
		$('.graphic-bar-html5').width(180);
		setTimeout(function(){$('.graphic-bar-css3').width(180);}, 200);
		setTimeout(function(){$('.graphic-bar-js').width(150);}, 400);
		setTimeout(function(){$('.graphic-bar-php').width(130);}, 600);
		setTimeout(function(){$('.graphic-bar-sql').width(130);}, 800);
		setTimeout(function(){$('.graphic-bar-curieux').width(220);}, 1000);
	});

	// Fonction utilisée par la réussite du Cheat Code

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
		  setTimeout(function(){typewriter();},80);

	}

	// CHEAT CODE

	var cheat = 0;

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
	    	//console.log('one time');
	    	$('.cheat-1').css('background', 'black');
	    } else if(cheat === 2) {
	    	//console.log('two times');
	    	$('.cheat-2').css('background', 'black');
	    } else if(cheat === 3) {
	    	//console.log('three times');
	    	$('.cheat-3').css('background', 'black');
	   	} else if(cheat === 4) {
	   		//console.log('four times');
	   		$('.cheat-4').css('background', 'black');
	   	} else if(cheat === 5) {
	   		//console.log('five times');
	   		$('.cheat-a').css('background', 'black');
	   		$('.cheat-a').css('color', '#FAFA58');
	   	} else if(cheat === 6) {

	   		$('body').append('<div class="warp-zone"><h1 id="warp"></h1></div>');
	   		$('.warp-zone').width($(window).width());
	   		$('.warp-zone').height($(window).height());

	   		$('.warp-zone').fadeIn(800);
	   		
	   		$('#warp').append('<video class="warpzonevideo" src="img/warpzone.mp4" style="position: fixed; right: 0; bottom: 0;min-width: 100%; min-height: 100%;width: auto; height: auto; z-index: -100;background: url(img/prev.png) no-repeat;background-size: cover;" autoplay="true" />');
	   		$('html, body').css('overflow', 'hidden');

	   		setTimeout(function() {
	   			$('html, body').css('overflow', 'auto');
	   			$('.warpzonevideo').remove();
	   			typewriter();
	   		}, 3000);

	   		//TweenLite.to($('.warp-zone h1'), 2, {text:"~ Vous venez d\'entrer dans la Warp Zone ~", ease:Linear.easeNone});

	   		$('.cheat-b').css('background', 'black');

	   		$('.cheat-b').css('color', '#FAFA58');
	   		$('.cheat-a').css('color', '#FAFA58');
	   		
	   		setTimeout(function() {$('.cheat').css('background', '#F4FA58'); $('.cheat').css('color', 'black');$('.cheat-a').css('background', '#2E64FE');$('.cheat-b').css('background', '#04B45F');}, 500);
	   	}
	});

	// Page About, gère les couleurs du W

	var bloc_width = 150;
	var bloc_width_41 = bloc_width + 70;

	var toomuch = 0;

	$('.bloc-about-film').css('left', bloc_width);
	$('.bloc-about-musique').css('left', bloc_width*2);
	$('.bloc-about-jeux').css('left', bloc_width*3);

	for (var i = 0; i < $('.bloc-about-manga').length; i++) {

		if((i*bloc_width_41)+bloc_width_41 < $('.w').height()) {
			$('.bloc-about-manga:eq('+i+')').css('top', i*bloc_width_41+'px');
			$('.bloc-about-musique:eq('+i+')').css('top', i*bloc_width_41+'px');
		} else {

			$('.bloc-about-manga:eq('+i+')').css('left', bloc_width*4+'px');
			$('.bloc-about-manga:eq('+i+')').css('top', toomuch*bloc_width_41+'px');
			toomuch = toomuch+1;

			$('.bloc-about-musique:eq('+i+')').css('left', bloc_width*4+'px');
			$('.bloc-about-musique:eq('+i+')').css('top', toomuch*bloc_width_41+'px');
			toomuch = toomuch+1;
			
		}
		
		$('.bloc-about-manga:eq('+i+')').css('background-color', '#8'+i+'2');
		$('.bloc-about-musique:eq('+i+')').css('background-color', '#8'+i+'2');
	}

	for (var j = 0; j < $('.bloc-about-film').length; j++) {

		if(105+(j*bloc_width_41)+bloc_width_41 < $('.w').height()) {
			$('.bloc-about-film:eq('+j+')').css('top', 105+j*bloc_width_41+'px');
			$('.bloc-about-jeux:eq('+j+')').css('top', 105+j*bloc_width_41+'px');
		} else {
			$('.bloc-about-film:eq('+j+')').css('left', bloc_width*4+'px');
			$('.bloc-about-film:eq('+j+')').css('top', toomuch*bloc_width_41+'px');
			toomuch = toomuch+1;

			$('.bloc-about-jeux:eq('+j+')').css('left', bloc_width*4+'px');
			$('.bloc-about-jeux:eq('+j+')').css('top', toomuch*bloc_width_41+'px');
			toomuch = toomuch+1;
		}

		$('.bloc-about-film:eq('+j+')').css('background-color', '#8'+(j+1)+'2');
		
		$('.bloc-about-jeux:eq('+j+')').css('background-color', '#8'+(j+1)+'2');
	}

	/*
	*	ABOUT
	*/

	$('.bloc-about').addClass('bloc-about-selected');

	$('.type-about a').on('click', function(e) {
		e.preventDefault();

		var $this_type = $(this).attr('data-type');
		if($this_type === 'all') {
			$('.bloc-about').removeClass('bloc-about-selected');
			$('.bloc-about').addClass('bloc-about-selected');
			$('.separator').css('opacity', '1');
		} else {
			$('.bloc-about').removeClass('bloc-about-selected');
			$('.bloc-about-'+$this_type).addClass('bloc-about-selected');
			$('.separator').css('opacity', '0.3');
		}
		
	});

	var previous = '';
	var new_class;

	$('.bloc-about.bloc-about-selected').hover(
		function() {
			if(previous !== '') {

				// Si on vient d'un bloc en dessous
				if(
					$('.bloc-about[data-name='+previous+']').offset().top > $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left == $(this).offset().left
				) {
					new_class = 'y_moins_150';

				// Quand on vient d'un bloc au-dessus
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top < $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left == $(this).offset().left
				) {
					new_class = 'y_plus_150';

				// Quand on vient d'un bloc pile à gauche
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top == $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left > $(this).offset().left
				) {
					new_class = 'x_moins_150';

				// Quand on vient d'un bloc pile à droite
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top == $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left < $(this).offset().left
				) {
					new_class = 'x_plus_150';

				// Quand on vient d'un bloc en-dessous et à gauche
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top > $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left < $(this).offset().left
				) {
					new_class = 'xy_moins_150';

				// Quand on vient d'un bloc au-dessus et à gauche
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top < $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left < $(this).offset().left
				) {
					new_class = 'xy_plus_150';

				// Quand on vient d'un bloc en-dessous et à droite
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top > $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left > $(this).offset().left
				) {
					new_class = 'yx_plus_150';

				// Quand on vient d'un bloc en-dessous et à droite
				} else if(
					$('.bloc-about[data-name='+previous+']').offset().top < $(this).offset().top &&
					$('.bloc-about[data-name='+previous+']').offset().left > $(this).offset().left
				) {
					new_class = 'yx_moins_150';
				}

			} else {
				new_class = 'y_moins_150';
			}

			$(this).find('div').addClass(new_class);
		},

		function() {
			previous = $(this).attr('data-name');
			$(this).find('div').removeClass(new_class);
		}
	);

	// S'occupe de gérer les clicks sur le menu mobile

	var check_menu = 0;

	$('.menu_mobile ul').hide();
	$('.menu_mobile').click(function() {
		if(check_menu === 0) {
			$('.menu_mobile ul').slideDown();
			$(this).css('height', 'auto');
			check_menu = 1;
		} else {
			$('.menu_mobile ul').slideUp();
			$(this).css('height', 'auto');
			check_menu = 0;
		}
	});

	// PAGE ZELDA

	$('.launch').click(function() {
		var to = ($('html, body').offset().top) + $('html, body').height();
		$('html, body')
       .stop()
       .animate({scrollTop: to}, 1000 );
	});

	/*
	*	CONTACT
	*/

	$('.form_contact').on('submit', function(e) {
		e.preventDefault();

		var name = $(this).find('input[name=name]').val();
		var email = $(this).find('input[name=email]').val();
		var message = $(this).find('textarea[name=message]').val();

		$.ajax({
			type : "POST",
			url : "/contact/sendMessage",
			data : {
				name : name,
				email : email,
				message : message
			},
			success: function(response){
				console.log(response);
				if(response.check == 'OK') {
					$('.form_contact').prepend('<h3 style="color:green;">Votre message a été envoyé avec succès !</h3>');
				} else {
					$('.form_contact').prepend('<h3 style="color:red;">Il y a eu un problème avec l\'envoi de votre message !</h3>');
				}
			},
			error: function(){
				console.log('error');
            }
		});
	});

});