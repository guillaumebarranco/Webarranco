<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Errors
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
?>
<?= $this->Html->css('zelda'); ?>
<h1>Oups ! La page recherchée n'a pas été trouvée !</h1>
<h3 style="color: blue;">
	Vous pouvez revenir <a href="/Webarranco/">sur l'accueil</a> Ou bien <a class="launch">tenter un petit jeu !</a>
</h3>
<h2 id="msg"></h2>

<canvas id="canvas" width="1700" height="940"></canvas>
<?= $this->Html->script('zelda/movement'); ?>
<!--<h2><?php echo $message; ?></h2>-->
<!--<p class="error">
	<strong><?php echo __d('cake', 'Error'); ?>: </strong>
	<?php printf(
		__d('cake', 'The requested address %s was not found on this server.'),
		"<strong>'{$url}'</strong>"
	); ?>
</p>-->
<?php
/*if (Configure::read('debug') > 0):
	echo $this->element('exception_stack_trace');
endif;*/
?>
