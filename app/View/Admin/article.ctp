<form action="<?=$this->request->base?>/admin/article/<?= $article['Blog']['id']?>" method="post">
	<textarea name="content" id="" cols="30" rows="10"><?= $article['Blog']['content']?> </textarea>
	<button>Modifier</button>
</form>