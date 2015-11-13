$(document).ready(function() {

	function startListeningAudio() {

		//if($(window).width() < 900) {

			if (annyang && $('.page-home').length !== 0) {

				var commands = {
					'home': function() {
						window.location.href =  SITE_URL+"/home";
					},
					'blog': function() {
						window.location.href =  SITE_URL+"/blog";
					},
					'skills': function() {
						window.location.href =  SITE_URL+"/skills";
					},
					'projects': function() {
						window.location.href =  SITE_URL+"/projects";
					},
					'contact': function() {
						window.location.href =  SITE_URL+"/contact";
					},
					'about': function() {
						window.location.href =  SITE_URL+"/about";
					},
					'superman': function() {
						window.location.href =  SITE_URL+"/games/superman";
					},
					'question': function() {
						window.location.href =  SITE_URL+"/other/quizz";
					},
					'tony': function() {
						$('body').empty().append('<h1>Alléééééééééééééééééé totoooooooooooooooooooo !</h1>');
					}
				};

				annyang.addCommands(commands);
				annyang.start();
			}
		//}
	}

	startListeningAudio();

	// Gère les classes actives des liens du menu en fonction de la page courante
	function putActiveOnLink() {
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
	}

	function getPSN() {
		$.ajax({
			type : "GET",
			url : SITE_URL+":3000/PSN/guillaumanga",
			success: function(response){
				console.log(response);
				var trophies = response.trophySummary.earnedTrophies;
				$('.bronze .trophies').append(trophies.bronze);
				$('.silver .trophies').append(trophies.silver);
				$('.gold .trophies').append(trophies.gold);
				$('.platinum .trophies').append(trophies.platinum);
			},
			error: function(){
				console.log('error');
            }
		});
	}

	// if($('.page-about').length != 0) getPSN();


	// Déclenche l'animation des graphiques de compétences au scroll de la page
	$(window).off('scroll');
	$(window).on('scroll', function() {
		$('.graphic-bar-html5').width(180);
		setTimeout(function(){$('.graphic-bar-css3').width(180);}, 200);
		setTimeout(function(){$('.graphic-bar-js').width(150);}, 400);
		setTimeout(function(){$('.graphic-bar-php').width(150);}, 600);
		setTimeout(function(){$('.graphic-bar-sql').width(130);}, 800);
		setTimeout(function(){$('.graphic-bar-curieux').width(220);}, 1000);
	});

	// Fonction utilisée par la réussite du Cheat Code

	function typewriter(letexte, check_courant, cmpt, koko){
		if(check_courant == 0) {
			var courant;
		}

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
		  setTimeout(function(){typewriter(letexte, 1, cmpt, koko);},80);
	}

	// CHEAT CODE

	var begin_game = 0;

	var cheat = 0,
		tab_cheat = [38, 40, 39, 37, 65, 66];

	var love = 0,
		tab_love = [74, 69, 84, 52, 65, 73, 77, 69];

	var warp_loaded = false;

	function checkCode(e, counter, tab_enter, callback) {

		for (var i = 0; i < tab_enter.length; i++) {

			if(counter === (tab_enter.length - 1)) {

				if(e.which == tab_enter[counter]) {
					callback(true);
				} else {
					counter = 0;
				}
				
			} else {

				if(counter === i) {

					if(e.which === tab_enter[counter]) {
						counter++;
						callback(counter);
						break;
					} else {
						counter = 0;
						break;
					}
				}
			}
		}

		callback(counter);
	}

	function afterWarp() {

		$('body').append('<div class="warp-zone"><h1 id="warp"></h1></div>');
   		$('html, body').css('overflow', 'hidden');
   		$('.warp-zone').width($(window).width());
   		$('.warp-zone').height($(window).height());

   		$('.warp-zone').fadeIn(800);
   		
   		$('.warp-zone').append('<video class="warpzonevideo" src="img/warpzone.mp4" muted autoplay="true" />');
   		$('html, body').css('overflow', 'hidden');

   		setTimeout(function() {
   			$('html, body').css('overflow', 'auto');
   			$('.warpzonevideo').remove();
   			typewriter("~ Vous venez d\'entrer dans la Warp Zone ~", 0, 0, 0);

   			setTimeout(function() {
   				$('.warp-zone').append('<img src="img/mask.png" class="theclip"/>');

   				setTimeout(function() {
   					$('.warp-zone').append('<a href="#" class="leave_warp">Quitter la Warp Zone</a>');

   					begin_game = 1;
   					var check_mm = 0;
   					var mm = 0;
   					var check_jo = 0;
   					var jo = 0;
   					var check_mb = 0;
   					var mb = 0;
   					var check_mi = 0;
   					var mi = 0;

   					//Une fois dans la warp zone
					$(document).keydown(function(e) {
						console.log(e.which);
						if(begin_game === 1) {
							if(check_mm === 0) {
								if(mm == 0) {
									if(e.which == 77) {
										mm = 1;
									} else {
										mm = 0;
									}
								} else if(mm == 1) {
									if(e.which == 65) {
										mm = 2;
									} else {
										mm = 0;
									}
								} else if(mm == 2) {
									if(e.which == 74) {
										mm = 3;
									} else {
										mm = 0;
									}
								} else if(mm == 3) {
									if(e.which == 79) {
										mm = 4;
									} else {
										mm = 0;
									}
								} else if(mm == 4) {
									if(e.which == 82) {
										mm = 5;
									} else {
										mm = 0;
									}
								} else if(mm == 5) {
									if(e.which == 65) {
										check_mm = 1;
										$('#warp').empty();
										typewriter("Bien joué ! 1ère réponse trouvée !",0, 0, 0);
										setTimeout(function() {
											$('.theclip').attr('src', 'img/jo.jpg');
										}, 3000);
									} else {
										mm = 0;
									}
								}
							} else if(check_mm === 1 && check_jo === 0) {
								if(jo == 0) {
									if(e.which == 74) {
										jo = 1;
									} else {
										jo = 0;
									}
								} else if(jo == 1) {
									if(e.which == 79) {
										jo = 2;
									} else {
										jo = 0;
									}
								} else if(jo == 2) {
									if(e.which == 75) {
										jo = 3;
									} else {
										jo = 0;
									}
								} else if(jo == 3) {
									if(e.which == 69) {
										jo = 4;
									} else {
										jo = 0;
									}
								} else if(jo == 4) {
									if(e.which == 82) {
										check_jo = 1;
										$('#warp').empty();
										typewriter("Bien joué ! 2ème réponse trouvée !",0, 0, 0);
										setTimeout(function() {
											$('.theclip').attr('src', 'img/smb.jpg');
										}, 3000);
									} else {
										jo = 0;
									}
								}
							} else if(check_jo === 1 && check_mb === 0) {
								if(mb == 0) {
									if(e.which == 77) {
										mb = 1;
									} else {
										mb = 0;
									}
								} else if(mb == 1) {
									if(e.which == 69) {
										mb = 2;
									} else {
										mb = 0;
									}
								} else if(mb == 2) {
									if(e.which == 65) {
										mb = 3;
									} else {
										mb = 0;
									}
								} else if(mb == 3) {
									if(e.which == 84) {
										mb = 4;
									} else {
										mb = 0;
									}
								} else if(mb == 4) {
									if(e.which == 66) {
										mb = 5;
									} else {
										mb = 0;
									}
								} else if(mb == 5) {
									if(e.which == 79) {
										mb = 6;
									} else {
										mb = 0;
									}
								} else if(mb == 6) {
									if(e.which == 89) {
										check_mb = 1;
										$('#warp').empty();
										typewriter("Bien joué ! 3ème réponse trouvée !",0, 0, 0);
										setTimeout(function() {
											$('.theclip').attr('src', 'img/glitch.jpg');
										}, 3000);
									} else {
										mb = 0;
									}
								}
							} else if(check_mb === 1 && check_mi === 0) {
								if(mi == 0) {
									if(e.which == 77) {
										mi = 1;
									} else {
										mi = 0;
									}
								} else if(mi == 1) {
									if(e.which == 73) {
										mi = 2;
									} else {
										mi = 0;
									}
								} else if(mi == 2) {
									if(e.which == 83) {
										mi = 3;
									} else {
										mi = 0;
									}
								} else if(mi == 3) {
									if(e.which == 83) {
										mi = 4;
									} else {
										mi = 0;
									}
								} else if(mi == 4) {
									if(e.which == 73) {
										mi = 5;
									} else {
										mi = 0;
									}
								} else if(mi == 5) {
									if(e.which == 78) {
										mi = 6;
									} else {
										mi = 0;
									}
								} else if(mi == 6) {
									if(e.which == 71) {
										mi = 7;
									} else {
										mi = 0;
									}
								} else if(mi == 7) {
									if(e.which == 78) {
										mi = 8;
									} else {
										mi = 0;
									}
								} else if(mi == 8) {
									if(e.which == 79) {
										check_mi = 1;
										$('#warp').empty();
										typewriter("Bien joué ! 4ème réponse trouvée !",0, 0, 0);
										setTimeout(function() {
											$('.theclip').attr('src', 'img/koko.jpg');
										}, 3000);
									} else {
										mb = 0;
									}
								}
							}
						}
					});

   				}, 500);
   			}, 3500);

   		}, 3000);

   		//TweenLite.to($('.warp-zone h1'), 2, {text:"~ Vous venez d\'entrer dans la Warp Zone ~", ease:Linear.easeNone});

   		$('.cheat-b').css('background', 'black');

   		$('.cheat-b').css('color', '#FAFA58');
   		$('.cheat-a').css('color', '#FAFA58');
   		
   		setTimeout(function() {$('.cheat').css('background', '#F4FA58'); $('.cheat').css('color', 'black');$('.cheat-a').css('background', '#2E64FE');$('.cheat-b').css('background', '#04B45F');}, 500);
	}

	function resetCheatButtons() {
		$('.cheat').css('background', '#F4FA58');
		$('.cheat-a').css('background', '#2E64FE');
		$('.cheat-b').css('background', '#04B45F');
		$('.cheat').css('color', 'black');
	}

	/*
	*	CHEAT CODE
	*/

	$(document).keydown(function(e) {

		checkCode(e, love, tab_love, function(response) {

			if(response === true) {
				$('.bloc').css('background', '#EF597B');
				$('.bloc').css('color', 'black');
			} else {
				love = response;
			}
		});

		checkCode(e, cheat, tab_cheat, function(response) {

			if(response === true) {

				if(!warp_loaded) {
					warp_loaded = true;
			   		afterWarp();
				}

		   	} else {
		   		cheat = response;

		   		if(cheat === 0) {
		   			resetCheatButtons();
		   		} else if(cheat === 1) {
			    	$('.cheat-1').css('background', 'black');
			    } else if(cheat === 2) {
			    	$('.cheat-2').css('background', 'black');
			    } else if(cheat === 3) {
			    	$('.cheat-3').css('background', 'black');
			   	} else if(cheat === 4) {
			   		$('.cheat-4').css('background', 'black');
			   	} else if(cheat === 5) {
			   		$('.cheat-a').css('background', 'black');
			   		$('.cheat-a').css('color', '#FAFA58');
			   	}
		   	}
		});
	});

	function leaveWarp(e) {
		
		warp_loaded = false;
		e.preventDefault();
		$('#warp').empty();
		typewriter("Au revoir niark niark", 0, 0, 0);
		setTimeout(function() {
			$('.warp-zone').fadeOut(500);

			setTimeout(function() {
				$('.warp-zone').remove();
				$('html,body').css('overflow', 'initial');
				$('html').css('overflow-x', 'hidden');
			}, 500);
		}, 2000);
	}


	$(document).on('click', '.leave_warp', function() {
		leaveWarp(e);
	});

	/*
	* Page About, gère les couleurs du W
	*/

	function makeW() {

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
	}

	makeW();


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

	function checkHoverDirection(there) {

		if(previous !== '') {

			// Si on vient d'un bloc en dessous
			if(
				$('.bloc-about[data-name='+previous+']').offset().top > there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left == there.offset().left
			) {
				new_class = 'y_moins_150';

			// Quand on vient d'un bloc au-dessus
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top < there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left == there.offset().left
			) {
				new_class = 'y_plus_150';

			// Quand on vient d'un bloc pile à gauche
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top == there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left > there.offset().left
			) {
				new_class = 'x_moins_150';

			// Quand on vient d'un bloc pile à droite
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top == there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left < there.offset().left
			) {
				new_class = 'x_plus_150';

			// Quand on vient d'un bloc en-dessous et à gauche
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top > there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left < there.offset().left
			) {
				new_class = 'xy_moins_150';

			// Quand on vient d'un bloc au-dessus et à gauche
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top < there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left < there.offset().left
			) {
				new_class = 'xy_plus_150';

			// Quand on vient d'un bloc en-dessous et à droite
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top > there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left > there.offset().left
			) {
				new_class = 'yx_plus_150';

			// Quand on vient d'un bloc en-dessous et à droite
			} else if(
				$('.bloc-about[data-name='+previous+']').offset().top < there.offset().top &&
				$('.bloc-about[data-name='+previous+']').offset().left > there.offset().left
			) {
				new_class = 'yx_moins_150';
			}

		} else {
			new_class = 'y_moins_150';
		}

		there.find('div').addClass(new_class);
	}

	function retablyHover(there) {
		previous = there.attr('data-name');
		there.find('div').removeClass(new_class);
	}

	$('.bloc-about.bloc-about-selected').hover(
		function() {
			checkHoverDirection($(this));
		}, function() {
			retablyHover($(this));
		}
	);

	// S'occupe de gérer les clicks sur le menu mobile

	var check_menu = 0;
	$('.menu_mobile').find('.traits_menu').append('<span></span><span></span><span></span>');

	$('.menu_mobile ul').hide();
	$('.menu_mobile').click(function() {

		$(this).find('.traits_menu').empty();
		if(check_menu === 0) {
			$(this).find('.traits_menu').append('X');
			$('.menu_mobile ul').slideDown();
			$(this).css('height', 'auto');
			check_menu = 1;
		} else {
			$(this).find('.traits_menu').append('<span></span><span></span><span></span>');
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
				//if(response.check == 'OK') {
					$('.form_contact').prepend('<h3 style="color:green;">Votre message a été envoyé avec succès !</h3>');
				//} else {
				//	$('.form_contact').prepend('<h3 style="color:red;">Il y a eu un problème avec l\'envoi de votre message !</h3>');
				//}
			},
			error: function(){
				$('.form_contact').prepend('<h3 style="color:green;">Votre message a été envoyé avec succès !</h3>');
            }
		});
	});

	var x;
    var y;
    var width;
    var div;
    var uniqid;

	// $('a, button, input, p').click(function(e) {
	// 	e.stopPropagation();
	// });

	function makeAnimOnClick(e) {

		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
  		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 

        width = 20;

        x = x - (width/2);
        y = y - (width/2);

        uniqid = (new Date()).getTime()

        div =
            '<div class="koko" data-id="'+uniqid+'" style="position:absolute;top:'+y+'px; left:'+x+'px;width:'+width+'px;height:'+width+'px; background-color:#008cba;border-radius:50%;opacity: .6;-webkit-transition: 0.6s;">'+

            '</div>'
        ;

        $('body').append(div);

        setTimeout(function() {          

            // $('.koko').css('width',  (width*2)+'px');
            // $('.koko').css('height',  (width*2)+'px');

            // $('.koko').css('top',  (y-width/2)+'px');
            // $('.koko').css('left',  (x-width/2)+'px');

            // $('.koko').css('opacity',  '.3');

            $('.koko[data-id='+uniqid+']').css('width',  (width*2)+'px');
            $('.koko[data-id='+uniqid+']').css('height',  (width*2)+'px');

            $('.koko[data-id='+uniqid+']').css('top',  (y-width/2)+'px');
            $('.koko[data-id='+uniqid+']').css('left',  (x-width/2)+'px');

            $('.koko[data-id='+uniqid+']').css('opacity',  '.3');

            setTimeout(function() {
                $('.koko[data-id='+uniqid+']').remove();

                $('.koko').each(function() {

                    if(parseInt($(this).attr('data-id')) != uniqid) {
                        if(parseInt($(this).attr('data-id')) < (uniqid+350)) {
                            $(this).remove();
                        }
                    }
                    
                });

            }, 350);

        }, 20);

        
        // $('.koko').css('left',  $('.koko').css('left')+(width+'px'));
        // $('.koko').css('width',  $('.koko').css('width')+((width*2)+'px'));
        // $('.koko').css('height',  $('.koko').css('height')+((width*2)+'px'));
	}

	// $(document).on('click', function(e) {
	// 	makeAnimOnClick(e);
	// });
	

});