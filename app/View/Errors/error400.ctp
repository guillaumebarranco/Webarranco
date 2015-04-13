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
<?= $this->Html->css('404'); ?>
<div class="wrapper">
	<a href="/home">Retour à l'accueil</a style="font-size: 25px;">
</div>
<div class="container">
	<div class="content">
		<svg viewBox="0 0 700 200">

			<symbol id="s-text">
				<text text-anchor="middle" x="50%" y="50%" dy=".35em">
					404
				</text>
			</symbol>

			<!-- Duplicate symbols -->
			<use xlink:href="#s-text" class="text"></use>
			<use xlink:href="#s-text" class="text"></use>
			<use xlink:href="#s-text" class="text"></use>
			<use xlink:href="#s-text" class="text"></use>
			<use xlink:href="#s-text" class="text"></use>

		</svg>
		
	</div>
</div>

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
