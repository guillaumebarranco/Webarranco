<link rel="stylesheet" href="<?=$this->request->base?>/css/prism.css">
<script src="<?=$this->request->base?>/js/prism.js"></script>


<div class="page-blog"></div>
<div class="blog" style="max-width: 600px;">
	<div class="article-page">
		<div class="right">
			<a href="/Webarranco/Blog">Retour</a>
		</div>
		<h1><?= $article['Blog']['title'] ?></h1>
		<i class="date">Ecrit le <?= substr($article['Blog']['created'], 0, 10) ?></i>
		<!-- <?= $article['Blog']['content'] ?> -->

		<p>
			Aujourd'hui, je souhaite vous partager une petite expérience rapide avec Node.js et socket.io pour faire du temps réel Smartphone - PC. <br /><br />

			L'idée de base est de faire communiquer son Smartphone avec son Ordinateur avec du Node.js. Jusque là pour ceux qui ont déjà essayé cette technologie, ça va. Si ce n'est pas le cas, pas de soucis, on y viendra ;) <br /><br />

			La différence qu'il y aura dans notre application avec un simple Chat ou un temps réel classique, c'est que nous allons nous servir de notre Smartphone pour "piloter" notre Ordinateur, ça sonne classe non ? <br /><br />
		</p>

		<h2>Introduction</h2>

		<p>Pour les novices en Node.js, voilà ce qu'il faut savoir :</p>

			Node.js est une technologie :
			<ul>
				<li>Javascript</li>
				<li>Qui s'éxécute côté serveur (comme le PHP)</li>
				<li>Qui permet du temps réel très facilement</li>
				<li>De bas niveau, c'est à dire qu'on doit créer nous-même le serveur http (pas de panique, ça prend 2 lignes)</li>
			</ul>
	
		<p>
			Je compte me servir du Framework Express dans ce tutoriel, qui permet de passer outre toute la "complexité" de la création du serveur. Pour ceux qui souhaitent découvrir Node.js à la base avant de commencer ce tutoriel, vous avez <a target="_blank" href="https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js">l'excellent (comme toujours) cours d'OpenClassrooms</a> ou bien <a target="_blank" href="http://nodejs.developpez.com/tutoriels/javascript/node-js-livre-debutant/">une très bonne introduction par Developpez.com</a> . <br /><br />
		</p>

		<h2>La mise en place de l'environnement</h2>

		<p>Nous allons donc commencer par le début, à savoir créer nos fichiers. Voici l'arborescence que vous devrez avoir : <br /><br /></p>

		<ul>
			<li>public
				<ul>
					<li>css
						<ul>
							<li>styles.css</li>
						</ul>
					</li>
				</ul>
				<ul>
					<li>js
						<ul>
							<li>main.js</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>app.js</li>
			<li>template
				<ul>
					<li>home.ejs</li>
				</ul>
			</li>
		</ul>
		<br />

		<p>
			Une fois cette arborescence faite, nous pouvons commencer à installer les outils. <br /><br />

			Pour ceux qui ont déjà Node.js et npm d'installés sur leur machine, vous pouvez <a href="#beginning">passer au début du codage</a><br /><br />

			Pour les autres, il va falloir installer Node.js, qui est désormais livré avec la commande NPM. <br /><br />

			Je vous invite à aller sur le <a target="_blank" href="https://nodejs.org/">Site officiel</a> pour télécharger et installer Node.js. Une fois que vous aurez fait toutes les étapes et que vous aurez des réponses cohérentes en tapant "npm" dans votre console, vous pourrez passer à la suite ;) (désolé de ne pas expliquer comment l'installer en détails, mais ce n'est pas vraiment l'objectif du tutoriel)

		</p>

		<h2 id="beginning">Les premières lignes de code</h2>

		<p>
			Node.js est présent sur la machine, la commande npm marche, everything is ok. <br /><br />

			Nous allons pouvoir commencer à mettre en place le serveur Node dans le fichier <u>app.js</u>. <br /><br />

			Effectuez tout d'abord la commande "npm init" en étant à la racine de votre dossier, appuyez sur entrée à chaque fois jusqu'à la création du fichier package.json. <br /><br />

			Une fois ceci fait, vous pouvez tapper <code>npm install express</code> dans votre console. <br /><br />

			Express étant installé, le code va pouvoir enfin vraiment commencer, voici les premières lignes à entrer.
		</p>

<pre>
<code class="language-javascript">
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var server = app.listen(1818);
</code>
</pre>
		<p>
			4 lignes pour créer un serveur et le faire marcher avec Node.js et Express. La troisième ne compte même pas, donc 3 lignes, sympa non ? <br /><br />

			Pour décortiquer un peu, après avoir installer express avec la commande npm, on l'inclut dans notre javascript avec le <code>require('express');</code> <br /><br />

			On le met ensuite dans une variable qui va définir notre application. Le préfixe <u>app</u> va donc être utiliser pour chaque action souhaitant être effectué sur le serveur (comme le dossier cible défini ci-dessus, le dossier "public" dans notre cas) <br /><br />

			Pour finir, on "écoute" le serveur sur le port 1818. Tous les ports du monde (en 4 chiffres je crois) peuvent marcher, vous pouvez essayer 8080, 8888, 1000, bref, tout marche. <br /><br />

			Notre serveur est maintenant mis en place, on va passer au HTML. <br /><br />
		</p>

		<h2>Vue et templating EJS</h2>

		<p>Pour l'HTML, on va commencer par ce que tout bon document devrait avoir au minimum :</p>

<pre class="language-markup">
<code class="language-markup">
&lt;!DOCTYPE HTML>
&lt;html lang="fr">
	&lt;head>
		&lt;title>Remote Control&lt;/title>
		&lt;meta charset="utf-8" />
	&lt;/head>
	&lt;body>
		
	&lt;/body>
&lt;/html>
</code>
</pre>
		<p>Maintenant qu'on a ça dans notre fichier <u>home.ejs</u>, on peut démarrer. On va créer une div avec la class <em>red_round</em> avec juste en-dessous, un button avec la class <em>my_button</em> et l'attribut <em>data-color</em></p>

<pre class="language-markup">
<code class="language-markup">
&lt;div class="round red_round"> &lt;/div>
&lt;button class="my_button" data-color="red">Bouton rouge &lt;/button>
</code>
</pre>

		<p>On ajoute du style classique dans un fichier CSS :</p>

<pre class="language-css">
<code class="language-css">
<style>.round {
	width: 100px;
	height: 100px;
}
.red_round {
	background-color: red;
}</style>
</code>
</pre>

		<p>On passe au Javascript (j'utilise JQuery personnellement pour aller plus vite, je sais les perfs, tout ça...)</p>
			
<pre class="language-markup">
<code class="language-markup">
&lt;script src="http://code.jquery.com/jquery-1.11.2.min.js">&lt;/script>
</code>
</pre>
		Et dans le fichier <u>main.js</u> :

<pre class="language-javascript">
<code class="language-javascript">
$(document).ready(function() {

	$('.round').hide();

    $('.my_button').on('click', function() {
        var color = $(this).attr('data-color');
        $('.'+color+'_round').show();
    });
});
</code>
</pre>

		<p>
			Voilà, on a un beau code maintenant, voici ce que ça donne : <br /><br />

			Contenu du <u>home.ejs</u>
		</p>

<pre class="language-markup">
<code class="language-markup">
&lt;!DOCTYPE HTML>
&lt;html lang="fr">
	&lt;head>
		&lt;title>Remote Control&lt;/title>
		&lt;meta charset="utf-8" />

		&lt;link rel="stylesheet" href="css/styles.css">
	&lt;/head>

	&lt;body>

		&lt;div class="round red_round">&lt;/div>
		&lt;button class="my_button" data-color="red">Bouton rouge&lt;/button>

		&lt;script src="http://code.jquery.com/jquery-1.11.2.min.js">&lt;/script>
		&lt;script src="js/main.js">&lt;/script>

	&lt;/body>

&lt;/html>
</code>
</pre>

		<p>Contenu du styles.css</p>

<pre class="language-css">
<code class="language-css">
	.round {
		width: 100px;
		height: 100px;
	}
	.red_round {
		background-color: red;
	}
</code>
</pre>

		<p>Contenu du main.js</p>

<pre class="language-javascript">
<code class="language-javascript">
	$(document).ready(function() {

		$('.round').hide();

        $('.my_button').on('click', function() {
            var color = $(this).attr('data-color');
            $('.'+color+'_round').show();
        });

    });
</code>
</pre>
		
		<p>
			Etant donné qu'on a monté le serveur avec Node.js, pour accéder à la page il va falloir faire tourner Node.js (oui c'est embêtant, mais pour la suite ça ca se révéler très utile) <br /><br />

			On va tapper un node app.js dans la console pour démarrer le serveur. <br /><br />

			En allant sur l'url <em>localhost:1818</em>, on aperçoit un beau petit "Cannot GET/" <br /><br />

			La raison est très simple, nous n'avons défini nulle part où était notre fichier html (le fichier home.ejs est tout seul) <br /><br />

			D'ailleurs pour utiliser EJS, le plugin de templating, il faudrait l'installer <br /><br />

			<code>npm install ejs</code> <br /><br />

			Ensuite, il faudrait l'inclure dans notre serveur puis définir que la page d'accueil est cette page home.ejs dans le dossier template <br /><br />

			On stoppe le serveur dans la console avec un Ctrl+C, puis on le redémarre avec node app.js <br /><br />

			Et là, miracle ! On retrouve notre page ! Du coup on peut tester notre code. En cliquant sur le bouton, le carré rouge s'affiche, super non !? <br /><br />

			Bon, pas vraiment. Maintenant qu'on a un serveur qui tourne, un template qui s'affiche, et un bouton qui gère l'appariation d'un carré, il va falloir passer à la vitesse supérieuse. <br /><br />

			Que socket.io soit ! <br /><br />

		</p>

		<h2>socket.io et le temps réel</h2>

		<p>
			socket.io est une des choses qui a rendu Node.js aussi célèbre. Il s'agit d'une technologie qui en gros, facilite le temps réel. C'est à dire que si deux personnes sont connectés sur un même site, et que l'un fait une action, l'autre pourra voir le résultat de cette action sans même avoir touché quoique ce soit ni recharger la page. C'est magique ! <br /><br />

			Les codes permettant l'utilisation des websockets (la technologie sur laquelle se base socket.io) avec ce package est très simple. <br /><br />

			<code>npm install socket.io</code>
		</p>

<pre class="language-javascript">
<code class="language-javascript">
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	// Ecoute des sockets ici
});
</code>
</pre>
		<p>
			En rajoutant ça à la fin de notre app.js, on a notre écoute du serveur avec socket.io. Simple non ? <br /><br />

			A l'intérieur de la fonction de l'écoute des sockets, on peut maintenant y insérer un évènement.
		</p>

<pre class="language-javascript">
<code class="language-javascript">
socket.on('buttonColor', function (color) {
    socket.broadcast.emit('showColor', color);
});
</code>
</pre>
		<p>
			On est prêt à recevoir la fonction avec pour nom d'envoi "buttonColor" pour renvoyer ensuite la un socket "showColor" <br /><br />

			On va inclure socket.io dans le template EJS maintenant
		</p>

<pre class="language-markup">
<code class="language-markup">
&lt;script src="/socket.io/socket.io.js">&lt;/script>
</code>
</pre>

		<p>Puis on l'importe dans le javascript de main.js</p>

<pre class="language-javascript">
<code class="language-javascript">
var app_url = 'http://localhost:1818';
var socket = io.connect(app_url);
</code>
</pre>

		<p>Maintenant il ne reste plus qu'à faire des appels à ce même socket dans le Javascript, par exemple au clic sur le bouton. On supprime le show() et on le remplace par :</p>

<pre class="language-javascript">
<code class="language-javascript">
socket.emit('buttonColor', {color: color});
</code>
</pre>

		<p>Ensuite toujours dans le code Javascript, on écrit :</p>

<pre class="language-javascript">
<code class="language-javascript">
socket.on('showColor', function(color) {
    $('.'+color.color+'_round').show();
});
</code>
</pre>
		<p>
			On refait un Ctrl+C puis un node app.js <br />rb	

			Et là que se passe t-il ? On ne voit rien en cliquant sur le bouton. <br />rb	

			C'est normal ! Ouvrez la même URL sur un autre navigateur (Mozilla, Chrome...) <br />rb	

			Mettez les deux à côtés, et cliquer sur le bouton. <br />rb	

			Magie, dans l'autre navigateur, le carré rouge s'est affiché ! Vous venez d'utiliser votre premier websocket. <br />rb	
			
			Et voilà, on a fait du temps réel ! :) <br /><br />

			Pour aller un poil plus loin, nous allons créer d'autres boutons et d'autres carrés de couleur (toujours associés aux boutons) <br /><br />

			On peut également faire disparaitre les carrés après leur affichage, voilà ce que donnerais le HTML :
		</p>

<pre class="language-markup">
<code class="language-markup">
&lt;div class="round red_round">&lt;/div>
&lt;div class="round blue_round">&lt;/div>
&lt;div class="round purple_round">&lt;/div>

&lt;button class="my_button" data-color="red">Bouton rouge&lt;/button>
&lt;button class="my_button" data-color="blue">Bouton bleu&lt;/button>
&lt;button class="my_button" data-color="blue">Bouton violet&lt;/button>
</code>
</pre>
		<p>Le Javascript maintenant (pas très compliqué). A la suite du .show() dans la réception du socket, on rajoute :</p>

<pre class="language-javascript">
<code class="language-javascript">
setTimeout(function() {
    $('.'+color.color+'_round').hide();
}, 200);
</code>
</pre>
		<p>
			Et voilà, en cliquant sur un bouton, c'est bien le carré à la couleur associée qui va apparaitre sur l'autre navigateur ! <br /><br />

			Alors bon par contre, on est pas encore arrivés au bout. Il est où le "Remote Control" avec le smartphone qui fait super classe ?? <br /><br />

			Eh bien au final c'est tout simple. Il suffit de mettre une petite condition de taille ! <br /><br />

			Attention, étant donné que vous êtes en local, vous n'allez pas pouvoir utiliser votre smartphone. Il faudra mettre cette application sur votre serveur en ligne pour essayer. Mais pas de panique, on peut remplaçer ça facilement pour montrer que ça marche bien ;)
		</p>

<pre class="language-javascript">
<code class="language-javascript">
$('.round').hide();

if($(window).width() < 600) {
    $('.my_button').on('click', function() {
        var color = $(this).attr('data-color');
        socket.emit('buttonColor', {color: color});
    });
} else {
    $('.my_button').hide();
    socket.on('showColor', function(color) {
        $('.'+color.color+'_round').show();
        setTimeout(function() {
            $('.'+color.color+'_round').hide();
        }, 200);
    });
}
</code>
</pre>
		<p>
			Et voilà le code complet, et tout roule ;) On obtient seulement accès aux boutons en étant sur un écran de petite taille (vous pouvez resizer votre navigateur pour simuler un petit écran) et les carrés de couleur apparaissent bien sur l'autre navigateur ! Si vous mettez ça en ligne sur votre serveur, vous pourrez "piloter" à distance votre site depuis votre smartphone. <br /><br />

			Evidemment, les exemples de boutons et de carrés de couleurs sont clairement un premier pas, concrètement cela n'a aucune utilité. Mais après quelques réflexions, je suis sûr que vous trouverez quoi faire de ces possibilités, comme piloter un jeu sur pc avec le smartphone comme manette, tout ça ;)


		</p>
	
		<a href="<?=$this->request->base?>/<?=$article['Blog']['source']?>">Télécharger les sources</a>


	</div>
</div>