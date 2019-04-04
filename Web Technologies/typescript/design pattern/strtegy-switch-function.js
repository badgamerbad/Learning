var user = {
	    role: 'tester',
	    permissions: [
	    	'execute',
	    	'write'
	    ]
    }, 
    UserRoleScheme = function (user) {
        
        var write = 'write';
      
        function getUrl (subUrl) {
            if (user.permissions.indexOf(write) > -1) {
			    return 'https://www.myapp.com/' + subUrl + '/admin';
		    } else {
			    return 'https://www.myapp.com/' + subUrl + '/index';
		    }
        }
      
        function logUserRole () {
          console.log('the current user is ' + user.role);
        }
      
        this.tester = function () {
            logUserRole ();
		    return getUrl('testers');
        };
        
        this.developer = function () {
            logUserRole ();
		    return getUrl('developers');
        };
        
        this.manager = function () {
            logUserRole ();
		    return getUrl('managers');
        };
        
        this.devops = function () {
            logUserRole ();
		    return getUrl('devops');
        };
        
        this.executive = function () {
            logUserRole ();
		    return getUrl('executives');
        };
        
        this.default = function () {
            console.log('error: the user does not have a role.');
		    return 'https://www.myapp.com/error?type=unauthorized';
        };
    },
    currentRoleHandler = new UserRoleScheme(user);

if (currentRoleHandler[user.role]) {
    console.log(currentRoleHandler[user.role]());
} else { 
    //otherwise call the default strategy
    currentRoleHandler['default']();
}