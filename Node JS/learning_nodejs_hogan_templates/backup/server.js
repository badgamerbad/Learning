var express = require("express"),
	app = express(),
    port = process.argv[2] || 8888,
	bodyParser = require('body-parser'),
	mongoClient = require('mongodb').MongoClient;

var fetch = require('node-fetch');
	
app.use(express.static(__dirname));

app.get('/newComments', function(req, response){
	fetch('https://jsonplaceholder.typicode.com', 
	{
		method: 'GET'
		, headers: {}        // request header. format {a:'1'} or {b:['1','2','3']}
		, redirect: 'follow' // set to `manual` to extract redirect headers, `error` to reject redirect
		, follow: 20         // maximum redirect count. 0 to not follow redirect
		, timeout: 0         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
		, compress: true     // support gzip/deflate content encoding. false to disable
		, size: 0            // maximum response body size in bytes. 0 to disable
		, body: {}        // request body. can be a string, buffer, readable stream
		, agent: null        // http.Agent instance, allows custom proxy, certificate etc.
	}
	).then(function(res) {
		var linkHeader = res.headers.get('Link');
		//console.log(linkHeader);
		var linkHeader_comma = linkHeader.split(',');
		var linkHeader_final = [];
		for(index in linkHeader_comma){
			linkHeader_final.push(linkHeader_comma[index].split(';')[0]);
		}
		var t1 = linkHeader_final[3].search('_page=');
		console.log(linkHeader_final[3].charAt(t1-1+7));
		//console.log(linkHeader_final);
		console.log(res.text());
		response.send(res.text());
		response.end();
	});
});
app.get('/newComments/next/:currentPage', function(req, res){
	var currentPage = request.params.currentPage;
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/comments?_page=2&_limit=7",
        success: function(comments, textStatus, request){
			var linkHeader = request.getResponseHeader('Link');
			console.log(linkHeader);
			var linkHeader_comma = linkHeader.split(',');
			var linkHeader_final = [];
			for(index in linkHeader_comma){
				linkHeader_final.push(linkHeader_comma[index].split(';')[0]);
			}			
			console.log(linkHeader_final);
            console.log(comments);
            res.send(comments, v2, v3);
			res.end();
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
        }
    });
    res.send(comments);
    res.end();
});
app.get('/newComments/prev/:currentPage', function(req, res){
	var currentPage = request.params.currentPage;
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/comments?_page=2&_limit=7",
        success: function(comments, textStatus, request){
			var linkHeader = request.getResponseHeader('Link');
			console.log(linkHeader);
			var linkHeader_comma = linkHeader.split(',');
			var linkHeader_final = [];
			for(index in linkHeader_comma){
				linkHeader_final.push(linkHeader_comma[index].split(';')[0]);
			}
			var t1 = linkHeader_final.search('_page=');
			console.log(linkHeader_final.charAt(t1-1+7));
			var totalPages;
			console.log(linkHeader_final);
            console.log(comments);
            res.send(comments, v2, v3);
			res.end();
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log("Error, Status = " + textStatus+ ", " + "Error thrown: " + errorThrown);
        }
    });
    res.send(comments);
    res.end();
});



app.get('/newTasks', function(req, res){
    var tasks = [
        {
            task: 'Task 1',
            time: '4'
        },
        {
            task: 'Task 2',
            time: '5'
        },
        {
            task: 'Task 3',
            time: '2'
        },
        {
            task: 'Task 4',
            time: '1'
        },
    ];
    res.send(tasks);
    res.end();
});
app.get('/newOrders', function(req, res){
    var orders = [
        {
            order: 'Order 1',
            time: '4'
        },
        {
            order: 'Order 2',
            time: '3'
        }
    ];
    res.send(orders);
    res.end();
});
app.get('/supportTickets', function(req, res){
    var tickets = [
        {
            ticket: 'Ticket 1',
            cost: '23'
        },
        {
            ticket: 'Ticket 2',
            cost: '12'
        },
        {
            ticket: 'Ticket 3',
            cost: '55'
        },
        {
            ticket: 'Ticket 4',
            cost: '88'
        },
    ];
    res.send(tickets);
    res.end();
});

var urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.post('/addTask', urlEncodedParser, (req, res) => {
	var taskStartDate = req.body.taskStartDate.split('/');
	var taskEndDate = req.body.taskEndDate.split('/');
	var taskApproval;
	if(req.body.taskApproval == 1){
		taskApproval = 1;
	}
	else{
		taskApproval = 0;
	}
	var taskFormData = {
		taskName: req.body.taskName,
		taskDescription: req.body.taskDescription,
		taskStartDate: taskStartDate[2] + '-' + taskStartDate[0] + '-' + taskStartDate[1],
		taskEndDate: taskEndDate[2] + '-' + taskEndDate[0] + '-' + taskEndDate[1],
		taskPriority: req.body.taskPriority,
		taskLevel: req.body.taskLevel,
		taskApproval: taskApproval
	}
	mongoClient.connect('mongodb://localhost:27017/admin2_app', (err, database) => {
		if (err) return console.log(err);
		else{
			database.collection('tasks').insert(taskFormData, {w:1}, (err, result) => {
				if(err){
					console.log(err);
				}
				else{
					console.log(result);
				}
			});
		}
	});
	res.redirect('/tasks');
	res.end(0);
});

app.set('view engine', 'ejs');
app.get('/index', (req, res) => {
	var src = {
		wrapper_src:'dashboard/dashboard.ejs',
		script_src:'dashboard/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/flot', (req, res) => {
	var src = {
		wrapper_src:'flot/flot.ejs',
		script_src:'flot/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/morris', (req, res) => {
	var src = {
		wrapper_src:'morris/morris.ejs',
		script_src:'morris/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/tables', (req, res) => {
	var src = {
		wrapper_src:'tables/tables.ejs',
		script_src:'tables/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/forms', (req, res) => {
	var src = {
		wrapper_src:'forms/forms.ejs',
		script_src:'forms/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/panels-wells', (req, res) => {
	var src = {
		wrapper_src:'panels-wells/panels-wells.ejs',
		script_src:'panels-wells/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/buttons', (req, res) => {
	var src = {
		wrapper_src:'buttons/buttons.ejs',
		script_src:'buttons/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/notifications', (req, res) => {
	var src = {
		wrapper_src:'notifications/notifications.ejs',
		script_src:'notifications/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/typography', (req, res) => {
	var src = {
		wrapper_src:'typography/typography.ejs',
		script_src:'typography/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/icons', (req, res) => {
	var src = {
		wrapper_src:'icons/icons.ejs',
		script_src:'icons/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/grid', (req, res) => {
	var src = {
		wrapper_src:'grid/grid.ejs',
		script_src:'grid/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/blank', (req, res) => {
	var src = {
		wrapper_src:'blank/blank.ejs',
		script_src:'blank/script_src.ejs'
	};
	res.render('index', {src:src});
});
app.get('/login', (req, res) => {
	res.redirect('/');
});
app.get('/tasks', (req, res) => {
	var src = {
		wrapper_src:'tasks/tasks.ejs',
		script_src:'tasks/script_src.ejs'
	};
	res.render('index', {src:src});
});

app.listen(port, () => {
	console.log(`server is up on port: ${port}`);
});