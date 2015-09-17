<div class="page-home"></div>
<div id="large-header" class="bloc-one">
	<div class="index" style="color: white;">
		<h1>Un développeur web pétillant pour vous !</h1>

		<p>
			Un projet à proposer, une idée impossible à mettre en oeuvre ? <br />
			Rien n'est impossible ! N'hésitez pas à <a href="/contact">me contacter</a> pour n'importe quelle demande que ce soit !
		</p>
	</div>

	<canvas id="demo-canvas" style="position: absolute;left: 0;top: 0;"></canvas>
</div>
<section class="wrapper">
	<div class="row">
		<div class="bloc large-4 columns">
			<h2>Qui suis-je ?</h2>
			<div>
				<img class="willchange" src="img/build/myPicture.jpg" alt="Photo de Guillaume Barranco" width="140" class="myPicture" />
			</div>
			<p>
				Un jeune développeur passionné par le web depuis des années et actuellement en Licence Chef de Projet Multimedia travaillant pour l'entreprise <a href="http://www.playapp.net">Playapp</a>. <br />
				Un inconditionnel fan de manga, les plus curieux et passionnés pourront en trouver <a href="/about">un exemple ici</a> !<br />
				Un pro avant tout, un jeune curieux et avide de connaissances qui ne demande qu'à apprendre et transmettre après.
			</p>
		</div>

		<div class="bloc large-4 columns">
			<h2>Mes compétences</h2>
			<p>
				Toutes les technologies de développement web les plus connues (HTML5, CSS3, Javascript, PHP, SQL), agrémenté des sciences d'intégration étudiées pour le plaisir de se parfaire (Référencement, Ergonomie, Accessibilité) ainsi que de frameworks bien utiles. Vous pouvez les trouver et mieux les comprendre sur la <a href="/skills">page de mes compétences</a>.
			</p>
			<ul class="graphic">
				<li class="li-graphic-percent">
					<div class="graphic-percent">25</div>
					<div class="graphic-percent">50</div>
					<div class="graphic-percent">75</div>
					<div class="graphic-percent">100</div>
				</li>
				<li>
					<div class="graphic-name">HTML5</div>
					<div class="graphic-bar graphic-bar-html5"></div>
				</li>
				<li>
					<div class="graphic-name">CSS3</div>
					<div class="graphic-bar graphic-bar-css3"></div>
				</li>
				<li>
					<div class="graphic-name">Javascript</div>
					<div class="graphic-bar graphic-bar-js"></div>
				</li>
				<li>
					<div class="graphic-name">PHP</div>
					<div class="graphic-bar graphic-bar-php"></div>
				</li>
				<li>
					<div class="graphic-name">SQL</div>
					<div class="graphic-bar graphic-bar-sql"></div>
				</li>
				<li>
					<div class="graphic-name">Curiosité</div>
					<div class="graphic-bar graphic-bar-curieux"></div>
				</li>
			</ul>
		</div>

		<div class="bloc large-4 columns">
			<h2>Blog de Webarranco</h2>
			<p>
				Lorsqu'on a appris sur le web, avec des tutoriels, des vidéos, des supers articles qu'on a vite gardé dans les favoris, on a envie de partager son évolution avec les autres. L'expérience, les avis professionnels peuvent aider bon nombre de jeunes développeurs. C'est ainsi qu'est né <a href="/blog">mon Blog</a>, que vous pourrez observer se remplir au fur et à mesure.
			</p>
			<div>
				<img src="img/build/linkou3.png" alt="Photo de moi version Link" width="200" />
			</div>
		</div>
	</div>

	<div class="row">
		<div class="bloc large-4 columns">
			<h2>Mes Projets</h2>
			<p>
				Dernier projet en date : 
				<a href="<?= $newest[0]['Project']['link_website'] ?>" target="_blank" class="img-projet last_project_home">
					<img src="<?= $newest[0]['Project']['Cover'] ?>" alt="Image du dernier projet en date" />
				</a>
				Je fais partie de ceux qui pensent que l'on fonctionne par projet. L'apprentissage d'un langage, d'un CMS, d'un framework sans son utilisation sur un projet concret ne dépassera jamais les 40% de pertinence. Se lancer un projet personnel ou professionnel, y'a que ça de vrai. Je vous invite donc à regarder <a href="/projects">mon Portfolio</a>, en espérant qu'il vous amusera !
			</p>
		</div>

		<div class="bloc large-4 columns">
			<h2>Me Contacter</h2>
			<div>guillaume.barranco@playapp.net</div>
			<a href="/contact" class="mail">
				<i class="fi-mail size-80"></i>
			</a>
			<ul class="socials">
				<li class="twitter">
					<a href="https://twitter.com/Webarranco" target="_blank">
						<i class="fi-social-twitter size-34"></i>
					</a>
				</li>
				<li class="linkedin">
					<a href="https://www.linkedin.com/profile/view?id=224191169&trk=nav_responsive_tab_profile" target="_blank">
						<i class="fi-social-linkedin size-34"></i>
					</a>
				</li>
				<li class="github">
					<a href="https://github.com/guillaumebarranco/" target="_blank">
						<i class="fi-social-github size-34"></i>
					</a>
				</li>
			</ul>
			<a href="img/build/CV.jpg" data-lightbox="roadtrip" class="myCV">
				<img src="img/build/CV.jpg" width="100" alt="Miniature de mon CV"/>
			</a>
			<a class="download_CV" target="_blank" href="img/CV_Barranco_Guillaume.pdf">Télécharger mon CV</a>
		</div>

		<div class="bloc large-4 columns">
			<h2>Bonus</h2>
			<ul class="like">J'aime :
				<li>- Manger</li>
				<li>- Le chocolat</li>
				<li>- Les mangas</li>
				<li>- Les Quizz</li>
				<li>- Coder</li>
				<li>- Faire du sport</li>
				<li>- Ecrire</li>
				<li>- Le Coca Cherry</li>
			</ul>
			<ul class="dislike">Je n'aime pas :
				<li>- M'ennuyer</li>
			</ul>
			<p>
				Pour plus d'informations sur moi, mes passions, mes mangas favoris, je vous invite à regarder <a href="/about">ma page perso</a>.
			</p>
			<div class="txt-cheat-code">Toujours plus marrant d'avoir un cheat code !</div>
			<div class="cheat-code">
				<div class="cheat-1 cheat"><div></div></div>
				<div class="cheat-2 cheat"><div></div></div>
				<div class="cheat-3 cheat"><div></div></div>
				<div class="cheat-4 cheat"><div></div></div>
				<div class="cheat-a cheat">A</div>
				<div class="cheat-b cheat">B</div>
			</div>
		</div>
	</div>
	<?php
                // $tab = "Ackerman, Aokiji', Astria, Barbe . Pourpre, ben422, chefbonheur, Cygheks, Daikhi, darkpotatoes, Diable D Sanji, Eishi, G-rome974, Gear 2nd, Getsu, Gohanssj3, HashiRonan, Hiken', Hyorin, hypnotiser, inuyasha190, Jaaws, Journey, Kakashi D Reborn, kevv, Kptain-Ussopeuh, KURAMA-Naruto, Le seigneur dés kabyles, LeBaka, Linelia, Lucifer, Maddog, madman, Master of Madness, Mervix, MONKEY D KOALA, Monkey D. Julio, Monkey.D Tôshiro, Monkey.D.64, Mrs-Fatale, natsu45, Ninarbi, Nono D Broly, OMEGA97, panini_no_nutella, pepiin, Perona Sama, pikel999, Raleygh 009, Rijix, Samael, Santarashi, Say D. Dorian, Shika', Shiro_38, Skull_joke, Strix, Sun guardian, sygfried94, Tobias, Tobiuo Riders, totor92, Uchiwa-Luffy, Udine, Und3r, Unholyscream, Zetsu-yan, Zoltal";

                // $the_tab = explode(',', $tab);
                // var_dump(count($the_tab));


            ?>
</section>