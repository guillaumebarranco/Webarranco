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
		<?= $article['Blog']['content'] ?>
	
		<a href="<?=$this->request->base?>/<?=$article['Blog']['source']?>">Télécharger les sources</a>


	</div>
</div>