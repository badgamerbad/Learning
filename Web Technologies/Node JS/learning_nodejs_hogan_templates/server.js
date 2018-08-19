var express = require("express"),
	app = express(),
    port = process.argv[2] || 8888,
	bodyParser = require('body-parser'),
	request = require('request'),
	mongoClient = require('mongodb').MongoClient;

var routes = require('./routes/indexRoutes');
	
app.use(express.static(__dirname));

app = routes.getRoutes(app);	

app.get('/newComments', function(req, res){
	request('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=5', function(error, response, body){
		console.log(error);
		res.send(response);
	});
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

app.listen(port, () => {
	console.log(`server is up on port: ${port}`);
});