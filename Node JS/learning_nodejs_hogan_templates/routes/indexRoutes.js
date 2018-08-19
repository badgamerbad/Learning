var getRoutes = function(app){
	//Index page ejs Routing
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
	return app;
};
module.exports.getRoutes = getRoutes;