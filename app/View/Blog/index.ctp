<div class="blog page-blog" role="main">
	<h1>Le Blog de Webarranco</h1>

	<?php 
		foreach ($content as $article) {

			if($article['Blog']['content'] != null && $article['Blog']['content'] != '') { ?>

				<div class="article">
					<div class="cover">
						<img src="<?=$this->request->base?>/<?= $article['Blog']['cover'] ?>" alt="<?= $article['Blog']['alt'] ?>" />
					</div>
					<div class="article-preview">
						<h2><?= $article['Blog']['title'] ?></h2>
						<p><?= $article['Blog']['content_pres'] ?></p>

						<div class="right">
							<a href="<?=$this->request->base?>/blog/article/<?= $article['Blog']['url'] ?>" title="Voir l'article" aria-label="<?= $article['Blog']['title'] ?> (Voir l'article)" class="btn_article">Voir l'article</a>
						</div>
					</div>
				</div>
		
	<?php
	 		} 
		} 
	?> 
</div>
