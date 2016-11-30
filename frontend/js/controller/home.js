tingesoApp.controller('HomeController',function($scope,$rootScope,$location,Productos_service){
	$scope.productos = {};
	$rootScope.idProducto = 0;
	Productos_service.getAllProductos().then(function(response) {
        	$scope.productos = response.data;
   			var data = response.data;
   			for(pro in data){
   				if(pro.idProducto > $rootScope.idProducto)
   					$rootScope.idProducto = pro.idProducto;
   			}
        });

});
