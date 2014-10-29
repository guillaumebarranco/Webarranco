<?php
class ScoreController extends AppController {
	public $uses = array('Score');
	public $components = array('RequestHandler');

	public function index() {
	}

	public function insertScore($name = "", $score = 1, $quizz ="") {
		$this->layout = null;
		$this->Score->save(array(
			'name' => $name,
			'score' => $score,
			'quizz' => $quizz
		));
	}

}

?>