$(document).ready(function(){
	var linkHeader_final = [];
	$.ajax({
		async: false,
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5",
        success: function(posts, textStatus, request){
			var linkHeader = request.getResponseHeader('Link');
			console.log(linkHeader);
			var linkHeader_comma = linkHeader.split(',');
			linkHeader_final = [];
			linkHeader_final[0] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
			linkHeader_final[1] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
			linkHeader_final[2] = (linkHeader_comma[1].split(';')[0]).slice(2, -1);
			linkHeader_final[3] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
			//var t1 = linkHeader_final[3].search('_page=');
			//console.log(linkHeader_final[3].charAt(t1-1+7));		
			//console.log(linkHeader_final);
            //console.log(comments);
            var data;
            $('#accordion').html('');
			var count = 1;
			var commentsGlobal = '';
            for(index in posts){
                //console.log(comments[index]);
				$.ajax({
					async: false,
					type: "GET",
					url: "https://jsonplaceholder.typicode.com/comments?postId="+posts[index].id+"",
					success: function(comments, textStatus, request){
						commentsGlobal = '<div class="panel-group" id="accordion'+count+'">';
						var commentsCount = 1;
						for(commentsIndex in comments){
							commentsGlobal += '<div class="panel panel-default">'
											+'<div class="panel-heading">'
												+'<h4 class="panel-title">'
													+'<a data-toggle="collapse" data-parent="#accordion'+count+'" href="#collapse'+count+commentsCount+'">'+comments[commentsIndex].id+' '+comments[commentsIndex].name+'</a>'
												+'</h4>'
											+'</div>'
											+'<div id="collapse'+count+commentsCount+'" class="panel-collapse collapse">'
												+'<div class="panel-body">'
													+ comments[commentsIndex].body
												+'</div>'
											+'</div>'
										+'</div>';
							commentsCount++;			
						}
						commentsGlobal += '</div>';
						//console.log(commentsGlobal);
						data = {
							userId: posts[index].userId,
							id: posts[index].id,
							title: posts[index].title,
							body: posts[index].body,
							comments: commentsGlobal,
							count: count
						};
						//console.log(data);
						var template = Hogan.compile(
							'<div class="panel panel-default">'
							   +'<div class="panel-heading">'
									+'<h4 class="panel-title">'
										+'<a data-toggle="collapse" data-parent="#accordion" href="#collapse{{count}}">{{id}} {{body}}</a>'
									+'</h4>'
								+'</div>'
								+'<div id="collapse{{count}}" class="panel-collapse collapse">'
									+'<div class="panel-body">'
										+'{{{comments}}}'
									+'</div>'
								+'</div>'
							+'</div>'
						);
						var output = template.render(data);
						$('#accordion').append(output);
						count++;
					},
					error: function(jqXHR, textStatus, errorThrown){
						console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
					}
				});
            }
			$("#page li:nth-child(1)").hide();
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
        }
    });
	
	$('a[href="#newComments"]').click(function(){
		$.ajax({
			type: "GET",
			url: "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5",
			success: function(posts, textStatus, request){
				var linkHeader = request.getResponseHeader('Link');
				var linkHeader_comma = linkHeader.split(',');
				linkHeader_final = [];
				linkHeader_final[0] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
				linkHeader_final[1] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
				linkHeader_final[2] = (linkHeader_comma[1].split(';')[0]).slice(2, -1);
				linkHeader_final[3] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
				var data;
				$('#accordion').html('');
				var count = 1;
				var commentsGlobal = '';
				for(index in posts){
					$.ajax({
						async: false,
						type: "GET",
						url: "https://jsonplaceholder.typicode.com/comments?postId="+posts[index].id+"",
						success: function(comments, textStatus, request){
							commentsGlobal = '<div class="panel-group" id="accordion'+count+'">';
							var commentsCount = 1;
							for(commentsIndex in comments){
								commentsGlobal += '<div class="panel panel-default">'
												+'<div class="panel-heading">'
													+'<h4 class="panel-title">'
														+'<a data-toggle="collapse" data-parent="#accordion'+count+'" href="#collapse'+count+commentsCount+'">'+comments[commentsIndex].id+' '+comments[commentsIndex].name+'</a>'
													+'</h4>'
												+'</div>'
												+'<div id="collapse'+count+commentsCount+'" class="panel-collapse collapse">'
													+'<div class="panel-body">'
														+ comments[commentsIndex].body
													+'</div>'
												+'</div>'
											+'</div>';
								commentsCount++;			
							}
							commentsGlobal += '</div>';
							data = {
								userId: posts[index].userId,
								id: posts[index].id,
								title: posts[index].title,
								body: posts[index].body,
								comments: commentsGlobal,
								count: count
							};
							var template = Hogan.compile(
								'<div class="panel panel-default">'
								   +'<div class="panel-heading">'
										+'<h4 class="panel-title">'
											+'<a data-toggle="collapse" data-parent="#accordion" href="#collapse{{count}}">{{id}} {{body}}</a>'
										+'</h4>'
									+'</div>'
									+'<div id="collapse{{count}}" class="panel-collapse collapse">'
										+'<div class="panel-body">'
											+'{{{comments}}}'
										+'</div>'
									+'</div>'
								+'</div>'
							);
							var output = template.render(data);
							$('#accordion').append(output);
							count++;
						},
						error: function(jqXHR, textStatus, errorThrown){
							console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
						}
					});
				}
				$("#page li:nth-child(1)").hide();
            },
			error: function(jqXHR, textStatus, errorThrown){
				console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
			}
        });
    }); 
	$('a[href="#prev"]').click(function(){
		$("#page li:nth-child(2)").show();
		console.log(linkHeader_final[1].slice(2, -1));
		$.ajax({
			type: "GET",
			url: linkHeader_final[1],
			success: function(posts, textStatus, request){
				var linkHeader = request.getResponseHeader('Link');
				console.log(linkHeader);
				var linkHeader_comma = linkHeader.split(',');
				linkHeader_final = [];
				if(linkHeader_comma.length == 3){
					linkHeader_final[0] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
					linkHeader_final[1] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
					linkHeader_final[2] = (linkHeader_comma[1].split(';')[0]).slice(2, -1);
					linkHeader_final[3] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
					$("#page li:nth-child(1)").hide();
				}
				else{
					linkHeader_final[0] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
					linkHeader_final[1] = (linkHeader_comma[1].split(';')[0]).slice(2, -1);
					linkHeader_final[2] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
					linkHeader_final[3] = (linkHeader_comma[3].split(';')[0]).slice(2, -1);
				}
				var data;
				$('#accordion').html('');
				var count = 1;
				var commentsGlobal = '';
				for(index in posts){
					$.ajax({
						async: false,
						type: "GET",
						url: "https://jsonplaceholder.typicode.com/comments?postId="+posts[index].id+"",
						success: function(comments, textStatus, request){
							commentsGlobal = '<div class="panel-group" id="accordion'+count+'">';
							var commentsCount = 1;
							for(commentsIndex in comments){
								commentsGlobal += '<div class="panel panel-default">'
												+'<div class="panel-heading">'
													+'<h4 class="panel-title">'
														+'<a data-toggle="collapse" data-parent="#accordion'+count+'" href="#collapse'+count+commentsCount+'">'+comments[commentsIndex].id+' '+comments[commentsIndex].name+'</a>'
													+'</h4>'
												+'</div>'
												+'<div id="collapse'+count+commentsCount+'" class="panel-collapse collapse">'
													+'<div class="panel-body">'
														+ comments[commentsIndex].body
													+'</div>'
												+'</div>'
											+'</div>';
								commentsCount++;			
							}
							commentsGlobal += '</div>';
							data = {
								userId: posts[index].userId,
								id: posts[index].id,
								title: posts[index].title,
								body: posts[index].body,
								comments: commentsGlobal,
								count: count
							};
							var template = Hogan.compile(
								'<div class="panel panel-default">'
								   +'<div class="panel-heading">'
										+'<h4 class="panel-title">'
											+'<a data-toggle="collapse" data-parent="#accordion" href="#collapse{{count}}">{{id}} {{body}}</a>'
										+'</h4>'
									+'</div>'
									+'<div id="collapse{{count}}" class="panel-collapse collapse">'
										+'<div class="panel-body">'
											+'{{{comments}}}'
										+'</div>'
									+'</div>'
								+'</div>'
							);
							var output = template.render(data);
							$('#accordion').append(output);
							count++;
						},
						error: function(jqXHR, textStatus, errorThrown){
							console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
						}
					});
				}
            },
			error: function(jqXHR, textStatus, errorThrown){
				console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
			}
        });
    }); 
	$('a[href="#next"]').click(function(){
		$("#page li:nth-child(1)").show();
		console.log(linkHeader_final[1].slice(2, -1));
        $.ajax({
			type: "GET",
			url: linkHeader_final[2],
			success: function(posts, textStatus, request){
				var linkHeader = request.getResponseHeader('Link');
				console.log(linkHeader);
				var linkHeader_comma = linkHeader.split(',');
				linkHeader_final = [];
				if(linkHeader_comma.length == 3){
					linkHeader_final[0] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
					linkHeader_final[1] = (linkHeader_comma[1].split(';')[0]).slice(1, -1);
					linkHeader_final[2] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
					linkHeader_final[3] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
					$("#page li:nth-child(2)").hide();
				}
				else{
					linkHeader_final[0] = (linkHeader_comma[0].split(';')[0]).slice(1, -1);
					linkHeader_final[1] = (linkHeader_comma[1].split(';')[0]).slice(2, -1);
					linkHeader_final[2] = (linkHeader_comma[2].split(';')[0]).slice(2, -1);
					linkHeader_final[3] = (linkHeader_comma[3].split(';')[0]).slice(2, -1);
				}
				var data;
				$('#accordion').html('');
				var count = 1;
				var commentsGlobal = '';
				for(index in posts){
					$.ajax({
						async: false,
						type: "GET",
						url: "https://jsonplaceholder.typicode.com/comments?postId="+posts[index].id+"",
						success: function(comments, textStatus, request){
							commentsGlobal = '<div class="panel-group" id="accordion'+count+'">';
							var commentsCount = 1;
							for(commentsIndex in comments){
								commentsGlobal += '<div class="panel panel-default">'
												+'<div class="panel-heading">'
													+'<h4 class="panel-title">'
														+'<a data-toggle="collapse" data-parent="#accordion'+count+'" href="#collapse'+count+commentsCount+'">'+comments[commentsIndex].id+' '+comments[commentsIndex].name+'</a>'
													+'</h4>'
												+'</div>'
												+'<div id="collapse'+count+commentsCount+'" class="panel-collapse collapse">'
													+'<div class="panel-body">'
														+ comments[commentsIndex].body
													+'</div>'
												+'</div>'
											+'</div>';
								commentsCount++;			
							}
							commentsGlobal += '</div>';
							data = {
								userId: posts[index].userId,
								id: posts[index].id,
								title: posts[index].title,
								body: posts[index].body,
								comments: commentsGlobal,
								count: count
							};
							var template = Hogan.compile(
								'<div class="panel panel-default">'
								   +'<div class="panel-heading">'
										+'<h4 class="panel-title">'
											+'<a data-toggle="collapse" data-parent="#accordion" href="#collapse{{count}}">{{id}} {{body}}</a>'
										+'</h4>'
									+'</div>'
									+'<div id="collapse{{count}}" class="panel-collapse collapse">'
										+'<div class="panel-body">'
											+'{{{comments}}}'
										+'</div>'
									+'</div>'
								+'</div>'
							);
							var output = template.render(data);
							$('#accordion').append(output);
							count++;
						},
						error: function(jqXHR, textStatus, errorThrown){
							console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
						}
					});
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