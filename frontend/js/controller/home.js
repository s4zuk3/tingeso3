tingesoApp.controller('HomeController',function($scope,$rootScope,$location,Productos_service){
	$scope.productos = {};
	
	Productos_service.getAllProductos().then(function(response) {
		    $rootScope.idProducto = 0;
        	$scope.productos = response.data;
   			var data = response.data;
   			alert($rootScope.idProducto);
   			for(pro in data){
   				alert("entre");
   				if(pro.idProducto > $rootScope.idProducto){
   					$rootScope.idProducto = pro.idProducto;
   					alert($rootScope.idProducto);
   				}
   			}
        });

});
