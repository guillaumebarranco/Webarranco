<?= $this->Html->css('reveal') ?>
<?= $this->Html->css('default') ?>
<div class="page-skills"></div>
<style>
	.reveal {
		background: url('img/a.png');
		width: 700px;
		height: 500px;
		border: solid 1px black;
		margin: 0 auto;
		margin-top: 50px;
	}

	.mer h2 {
		margin-top: -30px;
	}
</style>
		<div class="reveal">

	<div class="slides">

		<section class="mer">
			<img src="img/windwaker.jpg" width="800" height="400"/>
			<h1>Webarranco</h1><br />
			<h2>L'aventure d'un développeur</h2>
			
		</section>

		<section>
			<p>Il était une fois, dans une campagne reculée, un développeur toujours en quête d'apprentissage et de nouvelles technologies. Il rencontra un jour une formation qui lui fit créer son premier site web, et ce fut le bonheur, il avait trouvé sa voie.</p>
		</section>

		<section class="prevhtml5">
			<p>La guerre du web éclata, et le développeur n'eu d'autres choix que de trouver les armes nécessaires poursurvivre et avoir un jour espoir de la gagner. Il lui fallait les bons outils.</p>
		</section>

		<section id="mine">
			<h2>L'épée et le bouclier : HTML5 et CSS3</h2>
			<img src="img/html5sword.png" width="200" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/css3shield.png" width="200" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<div class="fragment">
				
				<p>Que serait une quête sans une épée et un bouclier ? L'attaque et la défense sont indissociables et forment une complétion parfaite, à l'image d'un ordinateur et d'internet, d'un dessin et sa couleur, de l'HTML et son CSS.</p>
			</div>
				
		</section>

		<section>
			<h2>Les flèches: Javascript</h2>
			<img src="img/jsarrow.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<p class="fragment">Une épée, c'est bien. Mais pouvoir attaquer à distance, c'est mieux. Ainsi donc, les flèches deviennent indispensable au développeur dans sa grande aventure.</p>
		</section>

		<section>
			<h2>L'arc: JQuery</h2>
			<img src="img/jquerybow.png" width="350" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<p class="fragment">Des flèches, très bonne idée. Des flèches sans arc, c'est un peu moins bien. Javascript sans JQuery, c'est un tennisman sans raquette. Bonne chance pour gagner Roland-Garros avec les mains.</p>
		</section>

		<section>
			<h2>Le boomerang: PHP</h2>
			<img src="img/phpboomerang.png" width="300" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<p class="fragment">On en revient toujours au même problème. L'attaque au corps à corps, c'est bon. L'attaque de loin, c'est bon. La défense, aussi. Il ne nous manque donc rien. Vous êtes sûrs ? Vous ne pensez vraiment pas qu'un outil permettant d'attaquer dans toutes les directions et de défendre de n'importe quel angle, c'est important ? Eh bien vous avez tort, le PHP existe bel et bien.</p>
		</section>

		<section>
			<h2>Le grappin: MySQL</h2>
			<img src="img/sqlgrappin.png" width="200" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<p class="fragment">Le PHP existe, certes, c'est bien et même vraiment bien. Mais le boomerang est un peu lent pour la récupération des objets, et un peu trop bourrin. Il manquerait bien un petit dernier pour compléter la panoplie. Un qui permette de sélectionner, de viser avec précision, et de ramener l'objet à soi à la vitesse de l'éclair. Comment ça vous ne me croyez pas ? Testez donc le SQL.</p>
		</section>

		<section>
			
			<h2>Les petits flacons revigorants: Les Outils du Dev moderne</h2>
			<img src="img/flaconzf2.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flaconcake.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flacondoctrine.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flaconsass.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flaconcompass.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flaconbootstrap.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flaconangular.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<img src="img/flacongit.png" width="100" class="sword fragment" style="background: none; border: none; box-shadow: none;"/>
			<p class="fragment">Zend Framework 2, CakePHP, Doctrine, SASS, Compass, Bootstrap, AngularJS, Git</p>
			
		</section>				

	</div>

</div>

	<script src="lib/js/head.min.js"></script>
	<script src="js/reveal.min.js"></script>

		<script>

			// Full list of configuration options available here:
			// https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
				transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

				// Optional libraries used to extend on reveal.js
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
					// { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
					// { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
				]
			});

		</script>