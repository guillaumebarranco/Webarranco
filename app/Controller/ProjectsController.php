<?php
class ProjectsController extends AppController {
	public $uses = array('Project');
	public $components = array('RequestHandler');

	public function index($type = 'Personnel') {
		//$this->RequestHandler->renderAs($this, 'json');
		
		$projects = $this->Project->find('all', 
			array(
				'conditions' => array(
					'Project.Type' => $type
				)
			)
		);

		//debug($projects);
		//die('ok');

		$this->set(array(
            'projects' => $projects,
            '_serialize' => array('projects')
        ));

       	//$this->render('/Projects/js');
	}

	public function view($type = 'Professionnel') {
		$this->RequestHandler->renderAs($this, 'json');
		$this->layout = null;
		
		$projects = $this->Project->find('all', 
			array(
				'conditions' => array(
					'Project.Type' => $type
				)
			)
		);

		//debug($projects);
		//die('ok');

		$this->set(array(
            'projects' => $projects,
            '_serialize' => array('projects')
        ));

       	//$this->render('/Projects/index');
	}

}

?>