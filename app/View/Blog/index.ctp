<div class="page-blog"></div>
<div class="blog">
	<h1>Le Blog de Webarranco</h1>

	<?php for($n = 0; $n < count($content); $n++) { ?>

		<div class="article">
			<div class="cover">
				<img src="<?= $content[$n]['Blog']['cover'] ?>" alt="<?= $content[$n]['Blog']['alt'] ?>" />
			</div>
			<div class="article-preview">
				<h2><?= $content[$n]['Blog']['Title'] ?></h2>
				<p><?= $content[$n]['Blog']['Content'] ?></p>

				<div class="right">
					<a href="Blog/Article/<?= $content[$n]['Blog']['url'] ?>" class="btn_article">Voir l'article</a>
				</div>
			</div>
		</div>
		
	<?php } ?> 

</div>