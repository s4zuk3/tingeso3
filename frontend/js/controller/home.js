tingesoApp.controller('HomeController',function($scope,$location,Productos_service){
	$scope.productos = {};
	Productos_service.getAllProductos().then(function(response) {
        	$scope.productos = response.data;
   
        });

});
