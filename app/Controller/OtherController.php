<?php
class OtherController extends AppController {
	public $uses = array('Quizz', 'Question');
	public $components = array('RequestHandler');

	public function index() {
	}

	public function quizz() {
		$quizz = $this->Quizz->find('all');

		$this->set(array(
            'quizz' => $quizz,
            '_serialize' => array('quizz')
        ));
	}

	public function question($type = 2, $offset = 1) {
		$this->RequestHandler->renderAs($this, 'json');
		$this->layout = null;

		$questions = $this->Question->find('all', 
			array(
				'conditions' => array(
					'Question.Type' => $type,
					'Question.Offset' => $offset
				)
			)
		);
		//debug($questions);
		//die('ok');

		$this->set(array(
            'questions' => $questions,
            '_serialize' => array('questions')
        ));
	}

	public function zelda() {
		
	}

}

?>