<?php

App::uses('Security', 'Utility'); 

class AdminController extends AppController {
	public $uses = array('Admin', 'Blog');
	// public $components = array('Security');

	public function index() {

		if(null !== $this->Session->read('is_admin') && $this->Session->read('is_admin') === true) {

			$articles = $this->Blog->find('all');

			$this->set(array(
	            'articles' => $articles,
	            '_serialize' => array('articles')
	        ));


		} else {
			return $this->redirect(
	            array('controller' => 'admin', 'action' => 'login')
	        );
		}
	}

	public function login() {
			
		if(!empty($this->request->data)) {

			$admin = $this->Admin->find('all', array(
				'conditions' => array(
					'username' => $this->request->data['username']
				)
			));

			$sent_password = Security::hash($this->request->data['password'], 'sha1', true);

			if($sent_password === $admin[0]['Admin']['password']) {
				$this->Session->write('is_admin', true);
				return $this->redirect(
		            array('controller' => 'admin', 'action' => 'index')
		        );
			}
		}
	}

	public function article($id) {
		
		$article = $this->Blog->findById($id);

		if($this->request->data) {
			$this->Blog->id = $id;
			$this->Blog->save($this->request->data);

			$article = $this->Blog->findById($id);
		}

		$this->set(array(
            'article' => $article,
            '_serialize' => array('article')
        ));
	}

}

?>