<!DOCTYPE HTML>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
	
		<title>Porfolio Guillaume Barranco - Développeur Web Full Stack</title>

		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/> 
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
		
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Découvrez le Portefolio d'un développeur passionné par son métier qui cherche sans cesse à parfaire sa curiosité Web !" />
		<meta property="og:title" content="Portefolio d'un Développeur Full Stack - Guillaume Barranco" />
		<meta name="twitter:creator" content="@Webarranco"/>

		<?= $this->Html->css('foundation') ?>
		<?= $this->Html->css('foundation-icons/foundation-icons') ?>
		<?= $this->Html->css('index') ?>
		<?= $this->Html->script('jquery-1.11.1.min') ?>
		<?= $this->Html->script('https://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js') ?>

	</head>

	<body>
		
		<header id="header">
			<nav id="navigation">
				<ul class="menu">
					<li><a class="link-nav link-home" href="/Webarranco/">Accueil</a></li>
					<li class="li-top"><a class="link-nav link-blog" href="/Webarranco/Blog">Blog</a></li>
					<li class="li-bottom"><a class="link-nav link-skills" href="/Webarranco/Skills">Compétences</a></li>
					<li class="logo"><a href="/Webarranco/Home"><img src="/Webarranco/img/link2.png"  width="130" alt="Logo du site" /></a></li>
					<li class="li-bottom"><a class="link-nav link-projects" href="/Webarranco/Projects">Projets</a></li>
					<li class="li-top"><a class="link-nav link-about" href="/Webarranco/About">A Propos</a></li>
					<li><a class="link-nav link-contact" href="/Webarranco/Contact">Contact</a></li>
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
		</header>

			<?= $this->fetch('content'); ?>

		<footer id="footer">
		</footer>

		<!--<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/plugins/CSSPlugin.min.js"></script>-->
		<!--<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/easing/EasePack.min.js"></script>-->
		<!--<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/TweenLite.min.js"></script>-->
		<?= $this->Html->script('main') ?>

	</body>

</html>