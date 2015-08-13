<?php 
require_once('config_url.php');
?>

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

		
			<?= $this->Html->css('foundation') ?>
			<?= $this->Html->css('foundation-icons') ?>
			<?= $this->Html->css('lightbox') ?>
			<?= $this->Html->css('index') ?>
		

		<!--<?= $this->Html->css('min') ?>-->

		<script>
			var WEB_URL = "<?=WEB_URL?>";
			var SITE_URL = "<?=SITE_URL?>";
		</script>

		<?= $this->Html->script('jquery-1.11.1') ?>

	</head>

	<body>
		<header id="header">

			<nav id="navigation">
				<ul class="menu">
					<li>
						<a class="link-nav link-home cbutton" href="<?=WEB_URL?>/home">Accueil</a>
					</li>
					<li>
						<a class="link-nav link-blog cbutton" href="<?=WEB_URL?>/blog">Blog</a>
					</li>
					<li>
						<a class="link-nav link-skills cbutton" href="<?=WEB_URL?>/skills">Compétences</a>
					</li>
					<li class="logo">
						<a href="<?=WEB_URL?>/home">
							<img src="<?=WEB_URL?>/img/link2.png"  width="130" alt="Logo du site" />
						</a>
					</li>
					<li>
						<a class="link-nav link-projects cbutton" href="<?=WEB_URL?>/projects">Projets</a>
					</li>
					<li>
						<a class="link-nav link-about cbutton" href="<?=WEB_URL?>/about">A Propos</a>
					</li>
					<li>
						<a class="link-nav link-contact cbutton" href="<?=WEB_URL?>/contact">Contact</a>
					</li>
				</ul>

				<div class="menu_mobile">
					<div class="traits_menu">
					</div>

					<div class="div_menu">Menu</div>

					<ul class="list-menu">
						<li><a class="link-nav link-home" href="<?=WEB_URL?>/">Accueil</a></li>
						<li><a class="link-nav link-blog" href="<?=WEB_URL?>/blog">Blog</a></li>
						<li><a class="link-nav link-skills" href="<?=WEB_URL?>/skills">Compétences</a></li>
						<li><a class="link-nav link-projects" href="<?=WEB_URL?>/projects">Projets</a></li>
						<li><a class="link-nav link-about" href="<?=WEB_URL?>/about">A Propos</a></li>
						<li><a class="link-nav link-contact" href="<?=WEB_URL?>/contact">Contact</a></li>
					</ul>

				</div>
			</nav>

			<a href="<?=WEB_URL?>/home" class="logo_mobile">
				<img src="<?=WEB_URL?>/img/build/link2.png"  width="70" alt="Logo du site" />
			</a>

		</header>

		<?= $this->fetch('content'); ?>

		<footer id="footer">
			<div>© Copyright Webarranco 2015</div>
			
			<div class="separator"></div>

			<div class="footer-contact">
				<a href="<?=WEB_URL?>/contact">Contact</a>
			</div>
		</footer>

		<?= $this->Html->script('min') ?>

		<!--
			<?= $this->Html->script('main') ?>
			<?= $this->Html->script('modernizr.custom') ?>
			<?= $this->Html->script('lightbox.min') ?>

			<!--For links nav hover effect 
			<?= $this->Html->script('classie') ?>
		<!--

	</body>

</html>
