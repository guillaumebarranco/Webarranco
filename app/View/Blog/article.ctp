<div class="page-blog"></div>
<div class="blog">
	<div class="article-page">
		<div class="right">
			<a href="/Webarranco/Blog">Retour</a>
		</div>
		<h1><?= $article['Article']['Title'] ?></h1>
		<i class="date">Ecrit le <?= substr($article['Article']['created'], 0, 10) ?></i>
		<p><?= $article['Article']['Content'] ?></p>
	</div>
</div>