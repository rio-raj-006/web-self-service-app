(function(){
  'use strict';

  angular.module('selfService')

	.constant("BASE_URL", "https://192.168.250.150:8443/fineract-provider/api/v1")

	.constant('AUTH_EVENTS', {
		updateUser: 'update-user',
		notAuthorized: 'auth-not-authorized',
		notAuthenticated: 'auth-not-authenticated'
	})

	.constant("TENANT_IDENTIFIER", "default")

	.constant('USER_ROLES', {
		user: 'USER'
	});
})();
