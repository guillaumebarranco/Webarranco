<?= $this->Html->css('zelda'); ?>
<h1>Oups ! La page recherchée n'a pas été trouvée !</h1>
<p style="color: blue;">
	Vous pouvez revenir <a href="/Webarranco/">sur l'accueil</a> Ou bien <a class="launch">tenter un petit jeu !</a>
</p>
<h2 id="msg"></h2>

<canvas id="canvas" width="1700" height="940"></canvas>
<?= $this->Html->script('zelda/movement'); ?>