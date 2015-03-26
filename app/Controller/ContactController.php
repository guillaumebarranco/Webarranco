<?php
class ContactController extends AppController {
	public $components = array('RequestHandler');

	public function index() {
	}

	public function sendMessage() {
		$this->layout = null;
		$this->RequestHandler->renderAs($this, 'json');

		if(isset($this->request->data) && $this->request->data != null) {
			$data = $this->request->data;

			$check = 'KO';

			$entete = "X-Priority:1"."\n"."From: <guillaume.barranco8@hotmail.fr>"."\n"; 
			$entetec.= "Content-type: text/html; charset=UTF-8\n";

			$titre = "Formulaire de contact par " . $data['name']. "."; 
			$corps = 'Quelqu\'un appelé "'  . $data['name'] . '" vous a laissé un message avec comme message : "' . $data['message'] . '" . Son mail pour le recontacter est : "'  . $data['email'] . '"'; // Phrase reçue lors du mail suite au remplissement du formulaire

			if(mail('guillaume.barranco8@hotmail.fr', $titre, $corps, $entete)) {
				$check = 'OK';
			}

			$this->set(array(
	            'check' => $check,
	            '_serialize' => array('check')
	        ));
		}
	}

}

?>