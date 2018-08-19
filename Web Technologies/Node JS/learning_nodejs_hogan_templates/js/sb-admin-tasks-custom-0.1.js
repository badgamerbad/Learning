$(document).ready(function(){
	$("#addTasks").hide();
	$("#viewTasks").hide();
	
	$('a[href="#addTasks"]').click(function(){
		$("#addTasks").fadeIn();
		$("#viewTasks").fadeOut();
	});
	
	$('a[href="#newTasks"]').click(function(){
        //alert('newComments'); 
        $.ajax({
            type: "GET",
            url: "/newTasks",
            success: function(tasks){
                console.log(tasks);
                var data;
                $('#viewTasksPanel').html('');
                for(index in tasks){
                    console.log(tasks[index]);
                    data = {
                        task: tasks[index].task,
                        time: tasks[index].time
                    };
                    var template = Hogan.compile('<a href="#" class="list-group-item">'+
									'<i class="fa fa-comment fa-fw"></i>{{task}}' + 
									'<span class="pull-right text-muted small"><em>{{time}} minutes ago</em>'+
									'</span></a>');
                    var output = template.render(data);
                    $('#viewTasksPanel').append(output);
					$('#viewTasks').fadeIn();
					$("#addTasks").fadeOut();
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
            }
        });
    });
	
	$( "#taskStartDate" ).datepicker();
	$( "#taskEndDate" ).datepicker();
	
	var req = new XMLHttpRequest();
	req.open('GET', document.location, false);
	req.send(null);
	var headers = req.getAllResponseHeaders().toLowerCase();
	console.log(headers);
});