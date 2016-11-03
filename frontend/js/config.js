tingesoApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'})
	.when('/new', {
		templateUrl: 'views/productoForm.html',
		controller: 'productoFormController'})
	.otherwise({
		redirectTo: '/'
	});
}]);
