<div class="page-blog"></div>
<div class="blog">
	<h1>Le Blog de Webarranco</h1>

	<?php for($n = 0; $n < count($content); $n++) { ?>

		<div class="article">
			<div class="cover">
				<img src="<?=$this->request->base?>/<?= $content[$n]['Blog']['cover'] ?>" alt="<?= $content[$n]['Blog']['alt'] ?>" />
			</div>
			<div class="article-preview">
				<h2><?= $content[$n]['Blog']['title'] ?></h2>
				<p><?= $content[$n]['Blog']['content_pres'] ?></p>

				<div class="right">
					<a href="<?=$this->request->base?>/blog/article/<?= $content[$n]['Blog']['url'] ?>" class="btn_article">Voir l'article</a>
				</div>
			</div>
		</div>
		
	<?php } ?> 

</div>