var user = {
	userRole: 'tester',
	permissions: [
		'execute',
		'write'
	]
},
    write = 'write',
    read = 'read',
    url = '';

switch (user.userRole) {
	case 'tester':
    	console.log('the current user is tester');
		if (user.permissions.indexOf(write) > -1) {
			url = 'https://www.myapp.com/testers/admin';
		} else {
			url = 'https://www.myapp.com/testers/index';
		}
		break;
	case 'developer':
    	console.log('the current user is developer');
		if (user.permissions.indexOf(write) > -1) {
			url = 'https://www.myapp.com/developers/admin';
		} else {
			url = 'https://www.myapp.com/developers/index';
		}
		break;
	case 'manager':
		console.log('the current user is manager');
		if (user.permissions.indexOf(write) > -1) {
			url = 'https://www.myapp.com/managers/admin';
		} else {
			url = 'https://www.myapp.com/managers/index';
		}
    break;
	case 'devops':
		console.log('the current user is devop');
		if (user.permissions.indexOf(write) > -1) {
			url = 'https://www.myapp.com/devops/admin';
		} else {
			url = 'https://www.myapp.com/devops/index';
		}
		break;
	case 'executive':
		console.log('the current user is executive');
		if (user.permissions.indexOf(write) > -1) {
			url = 'https://www.myapp.com/executives/admin';
		} else {
			url = 'https://www.myapp.com/executives/index';
		}
		break;
	default:
		console.log('error: the user does not have a role.');
		url = 'https://www.myapp.com/error?type=unauthorized';
		break;
}
console.log(url);
//location.assing(url);