<!DOCTYPE HTML>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
	
		<title>Porfolio Guillaume Barranco - Développeur Web Full Stack</title>

		<link rel="shortcut icon" href="img/favicon.ico.png" type="image/x-icon"/> 
		<link rel="icon" href="img/favicon.ico.png" type="image/x-icon"/>
		
		<meta name="viewport" content="width=device-width, initial-scale=1" user-scalable="yes" />
		<meta name="description" content="Découvrez le Portefolio d'un développeur passionné par son métier qui cherche sans cesse à parfaire sa curiosité Web !" />
		<meta property="og:title" content="Portefolio d'un Développeur Full Stack - Guillaume Barranco" />
		<meta name="twitter:creator" content="@Webarranco"/>
		<link rel="publisher" href="https://plus.google.com/105422105949000889772">

		<!--
			<?= $this->Html->css('foundation') ?>
			<?= $this->Html->css('foundation-icons/foundation-icons') ?>
			<?= $this->Html->css('lightbox') ?>
			<?= $this->Html->css('index') ?>
		-->

		<?= $this->Html->css('min') ?>

		<?= $this->Html->script('jquery-1.11.1') ?>

	</head>

	<body>
		<header id="header">

			<nav id="navigation">
				<ul class="menu">
					<li>
						<a class="link-nav link-home cbutton" href="/home">Accueil</a>
					</li>
					<li>
						<a class="link-nav link-blog cbutton" href="/blog">Blog</a>
					</li>
					<li>
						<a class="link-nav link-skills cbutton" href="/skills">Compétences</a>
					</li>
					<li class="logo">
						<a href="/home">
							<img src="/img/build/link2.png"  width="130" alt="Logo du site" />
						</a>
					</li>
					<li>
						<a class="link-nav link-projects cbutton" href="/projects">Projets</a>
					</li>
					<li>
						<a class="link-nav link-about cbutton" href="/about">A Propos</a>
					</li>
					<li>
						<a class="link-nav link-contact cbutton" href="/contact">Contact</a>
					</li>
				</ul>

				<div class="menu_mobile">
					<div class="traits_menu">
					</div>

					<div class="div_menu">Menu</div>

					<ul class="list-menu">
						<li><a class="link-nav link-home" href="/">Accueil</a></li>
						<li><a class="link-nav link-blog" href="/blog">Blog</a></li>
						<li><a class="link-nav link-skills" href="/skills">Compétences</a></li>
						<li><a class="link-nav link-projects" href="/projects">Projets</a></li>
						<li><a class="link-nav link-about" href="/about">A Propos</a></li>
						<li><a class="link-nav link-contact" href="/contact">Contact</a></li>
					</ul>

				</div>
			</nav>

			<a href="/Home" class="logo_mobile">
				<img src="/img/build/link2.png"  width="70" alt="Logo du site" />
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

		<?= $this->Html->script('min') ?>

		<!--
			<?= $this->Html->script('main') ?>
			<?= $this->Html->script('modernizr.custom') ?>
			<?= $this->Html->script('lightbox.min') ?>

			For links nav hover effect 
			<?= $this->Html->script('classie') ?>
		-->

	</body>

</html>
