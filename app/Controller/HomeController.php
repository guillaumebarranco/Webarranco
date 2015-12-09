<?php
class HomeController extends AppController {

	public function index() {
		$this->loadModel('Project');

		$newest = $this->Project->find('all', array(
			'conditions' => array(
				'Project.last_project' => 1
			)
		));

		$this->set(array(
            'newest' => $newest
        ));
	}
}

?>