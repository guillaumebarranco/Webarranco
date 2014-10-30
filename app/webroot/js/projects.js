$(document).ready(function() {

	var data_id;
	var data_type;
	var projects_content;
	var timeline_content;

	displayProjects('Personnel');

	$('.project-type li a').off('click');
	$('.project-type li a').on('click', function(e) {
		e.preventDefault();
		$('.project-type li a').removeClass('active-project');
		$(this).addClass('active-project');

		if(parseInt($(this).attr('data-display')) === 0) {
			$('.project-type li a').attr('data-display', 0);
			$(this).attr('data-display', 1);
			$('.timeline').empty();
			$('.all-projects').empty();
			data_type = $(this).attr('data-type');
			displayProjects(data_type);
		}

	});

	$(document).off('click', '.timeline-circle');
	$(document).on('click', '.timeline-circle', function() {
		$('.project').hide();
		data_id = $(this).attr('data-timeline');
		$('.project[data-project='+data_id+']').show(800);
	});

	function displayProjects(type, callback) {
		$.ajax({
			type : "POST",
			url : "/Webarranco/Projects/view/"+type,
			success: function(response){
				console.log(response);

				for (var t = 0; t < response.projects.length; t++) {
					timeline_content =
						'<div class="timeline-line"></div>' +
						'<div class="timeline-circle" data-timeline="'+(t+1)+'">'+
							'<img width="70" src="'+response.projects[t].Project.Cover +'" alt="'+response.projects[t].Project.Alt +'"/>' +
							'<div class="bubble">'+response.projects[t].Project.Name +'</div>' +
						'</div>' +
						'<div class="timeline-line"></div>'
					;

					$('.timeline').append(timeline_content);
				}

				for (var p = 0; p < response.projects.length; p++) {
					projects_content = 
						'<div class="project" data-project="'+(p+1)+'">'+
							'<div class="project-picture">' +
								'<img width="300" src="'+response.projects[p].Project.Cover +'" alt="'+response.projects[p].Project.Alt +'" />' +
							'</div>' +
							'<div class="project-content">' +
								'<h2 class="project-title">'+response.projects[p].Project.Name +'</h2>' +
							
								'<p class="project-description">' +
									response.projects[p].Project.Content +
								'</p>'+
								'<a href="#" class="button">Voir le projet</a>' +
							'</div>' +
							
						'</div>'
					;
					$('.all-projects').append(projects_content);
				}
			},

			error: function(){
				console.log('error');
            }
		});

		/*$('.timeline-circle').off('click');
		$('.timeline-circle').on('click', function() {
			$('.project').hide();
			data_id = $(this).attr('data-timeline');
			$('.project[data-project='+data_id+']').show(800);
		});*/

		if(callback) callback();
	}


});