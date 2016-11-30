tingesoApp.controller('HomeController',function($scope,$location,Productos_service){
	$scope.productos = {};
	$scope.testing = [{nombre:'hola'},{nombre:'chao'}];
	Productos_service.getAllProductos().then(function(response) {
        	$scope.productos = response.data;
        	alert(JSON.stringify($scope.productos));
        });
	$scope.nametest = 'Test OK';

});
