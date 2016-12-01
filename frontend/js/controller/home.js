tingesoApp.controller('HomeController',function($scope,$rootScope,$location,Productos_service){
	$scope.productos = {};
	Productos_service.getAllProductos().then(function(response) {
		    $rootScope.idProducto = 0;
        	$scope.productos = response.data;
   			var data = response.data;
			for (var i = 0; i < data.length; i++){
    			 var pro = data[i];
   				if(pro.idProducto > $rootScope.idProducto){
   					$rootScope.idProducto = pro.idProducto;
   				}
			}
        });
});
