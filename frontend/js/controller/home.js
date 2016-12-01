tingesoApp.controller('HomeController',function($scope,$rootScope,$location,Productos_service){
	$scope.productos = {};
	
	Productos_service.getAllProductos().then(function(response) {
		    $rootScope.idProducto = 0;
        	$scope.productos = response.data;
   			var data = response.data;
   			alert(JSON.stringify(data));
   			for(pro in data){
   				alert(JSON.stringify(pro));
   				alert(pro.idProducto + " "+ $rootScope.idProducto);
   				if(pro.idProducto > $rootScope.idProducto){
   					$rootScope.idProducto = pro.idProducto;
   					alert($rootScope.idProducto);
   				}
   			}
        });

});
