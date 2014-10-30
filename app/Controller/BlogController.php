<?php
class BlogController extends AppController {
	public $uses = array('Blog', 'Article');

	public function index() {
		
		$content = $this->Blog->find('all');

		//debug($content);
		//die('ok');

		$this->set(array(
            'content' => $content,
            '_serialize' => array('content')
        ));
	}

	public function article($url_article = '') {

		$article = $this->Article->findByUrl($url_article);
		if (!$article) {
	        throw new NotFoundException('Impossible de trouver cet article');
	    }

		$this->set(array(
            'article' => $article,
            '_serialize' => array('article')
        ));

		//debug($article);
		//die('ok');

	}

}

?>