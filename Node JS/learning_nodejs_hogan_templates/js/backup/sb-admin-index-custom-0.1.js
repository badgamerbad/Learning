$(document).ready(function(){
	$.ajax({
        type: "GET",
		url: "/newComments",
        success: function(comments, ){
            console.log(comments);
            var data;
            $('#view').html('');
            for(index in comments){
                console.log(comments[index]);
                data = {
                    postId: comments[index].postId,
                    id: comments[index].id,
					name: comments[index].name,
					email: comments[index].email,
					body: comments[index].body
                };
                var template = Hogan.compile('<a href="#" class="list-group-item">'+
								'<i class="fa fa-comment fa-fw"></i>{{id}}' + 
								'<span class="pull-right text-muted small"><em>{{postId}} minutes ago</em>'+
								'</span></a>');
                var output = template.render(data);
                $('#view').append(output);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
        }
    });
	$('a[href="#newComments"]').click(function(){
        //alert('newComments'); 
        $.ajax({
            type: "GET",
            url: "/newComments",
            success: function(comments){
                console.log(comments);
                var data;
                $('#view').html('');
                for(index in comments){
                    console.log(comments[index]);
                    data = {
                        msg: comments[index].msg,
                        time: comments[index].time
                    };
                    var template = Hogan.compile('<a href="#" class="list-group-item">'+
									'<i class="fa fa-comment fa-fw"></i>{{msg}}' + 
									'<span class="pull-right text-muted small"><em>{{time}} minutes ago</em>'+
									'</span></a>');
                    var output = template.render(data);
                    $('#view').append(output);
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
            }
        });
    }); 
    $('a[href="#newTasks"]').click(function(){
        //alert('newComments'); 
        $.ajax({
            type: "GET",
            url: "/newTasks",
            success: function(tasks){
                console.log(tasks);
                var data;
                $('#view').html('');
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
                    $('#view').append(output);
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
            }
        });
    }); 
    $('a[href="#newOrders"]').click(function(){
        //alert('newComments'); 
        $.ajax({
            type: "GET",
            url: "/newOrders",
            success: function(orders){
                console.log(orders);
                var data;
                $('#view').html('');
                for(index in orders){
                    console.log(orders[index]);
                    data = {
                        order: orders[index].order,
                        time: orders[index].time
                    };
                    var template = Hogan.compile('<a href="#" class="list-group-item">'+
									'<i class="fa fa-comment fa-fw"></i>{{order}}' + 
									'<span class="pull-right text-muted small"><em>{{time}} minutes ago</em>'+
									'</span></a>');
                    var output = template.render(data);
                    $('#view').append(output);
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
            }
        });
    }); 
    $('a[href="#supportTickets"]').click(function(){
        //alert('newComments'); 
        $.ajax({
            type: "GET",
            url: "/supportTickets",
            success: function(tickets){
                console.log(tickets);
                var data;
                $('#view').html('');
                for(index in tickets){
                    console.log(tickets[index]);
                    data = {
                        ticket: tickets[index].ticket,
                        cost: tickets[index].cost
                    };
                    var template = Hogan.compile('<a href="#" class="list-group-item">'+
									'<i class="fa fa-comment fa-fw"></i>{{ticket}}' + 
									'<span class="pull-right text-muted small"><em>{{cost}} minutes ago</em>'+
									'</span></a>');
                    var output = template.render(data);
                    $('#view').append(output);
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
            }
        });
    }); 
});