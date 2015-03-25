<!DOCTYPE HTML>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
	
		<title>Porfolio Guillaume Barranco - Développeur Web Full Stack</title>

		<link rel="shortcut icon" href="img/favicon.ico.png" type="image/x-icon"/> 
		<link rel="icon" href="img/favicon.ico.png" type="image/x-icon"/>
		
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Découvrez le Portefolio d'un développeur passionné par son métier qui cherche sans cesse à parfaire sa curiosité Web !" />
		<meta property="og:title" content="Portefolio d'un Développeur Full Stack - Guillaume Barranco" />
		<meta name="twitter:creator" content="@Webarranco"/>

		<?= $this->Html->css('foundation') ?>
		<?= $this->Html->css('foundation-icons/foundation-icons') ?>
		<?= $this->Html->css('index') ?>
		<?= $this->Html->css('lightbox') ?>

		<!--<?= $this->Html->script('build/min') ?>-->

		<?= $this->Html->script('modernizr.custom') ?>

		<?= $this->Html->script('jquery-1.11.1') ?>
		<?= $this->Html->script('main') ?>
		<?= $this->Html->script('lightbox.min') ?>

	</head>

	<body>
		
		<header id="header">
			<nav id="navigation">
				<ul class="menu">
					<li>
						<a class="link-nav link-home cbutton cbutton--effect-milan" href="/Webarranco/Home">Accueil</a>
					</li>
					<li class="li-top">
						<a class="link-nav link-blog cbutton cbutton--effect-milan" href="/Webarranco/Blog">Blog</a>
					</li>
					<li class="li-bottom">
						<a class="link-nav link-skills cbutton cbutton--effect-milan" href="/Webarranco/Skills">Compétences</a>
					</li>
					<li class="logo">
						<a href="/Webarranco/Home"><img src="/Webarranco/img/build/link2.png"  width="130" alt="Logo du site" /></a>
					</li>
					<li class="li-bottom">
						<a class="link-nav link-projects cbutton cbutton--effect-milan" href="/Webarranco/Projects">Projets</a>
					</li>
					<li class="li-top">
						<a class="link-nav link-about cbutton cbutton--effect-milan" href="/Webarranco/About">A Propos</a>
					</li>
					<li>
						<a class="link-nav link-contact cbutton cbutton--effect-milan" href="/Webarranco/Contact">Contact</a>
					</li>
				</ul>
				<div class="menu_mobile">
					<div class="div-menu">Menu</div>
					<ul class="list-menu">
						<li><a class="link-nav link-home" href="/Webarranco/">Accueil</a></li>
						<li class="li-top"><a class="link-nav link-blog" href="/Webarranco/Blog">Blog</a></li>
						<li class="li-bottom"><a class="link-nav link-skills" href="/Webarranco/Skills">Compétences</a></li>
						<li class="li-bottom"><a class="link-nav link-projects" href="/Webarranco/Projects">Projets</a></li>
						<li class="li-top"><a class="link-nav link-about" href="/Webarranco/About">A Propos</a></li>
						<li><a class="link-nav link-contact" href="/Webarranco/Contact">Contact</a></li>
					</ul>
				</div>
			</nav>
			<a href="/Webarranco/Home" class="logo_mobile">
				<img src="/Webarranco/img/build/link2.png"  width="70" alt="Logo du site" />
			</a>
		</header>

			<?= $this->fetch('content'); ?>

		<footer id="footer">
			<div>© Copyright Webarranco 2015</div>
			
			<div class="separator"></div>

			<div class="footer-contact">
				<a href="/contact">Contact</a>
			</div>
		</footer>

		<?= $this->Html->script('classie') ?>

		<script>
			(function() {

				/*var support = { animations : Modernizr.cssanimations },
					animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
					animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];*/

				[].slice.call( document.querySelectorAll( '.cbutton' ) ).forEach( function(el) {
					el.addEventListener( 'mouseenter', function(ev) {
						classie.add( el, 'cbutton--click' );
					});
					el.addEventListener( 'mouseleave', function(ev) {
						classie.remove( el, 'cbutton--click' );
					});
				});

			})();
		</script>
	</body>

</html>