tingesoApp.controller('ProductoFormController',function($scope,$location,Productos_service){
	$scope.newProducto = {
		'fotoProducto':'test.jpg'
	};

	$scope.submit = function(newProducto){
		//Funciones de validaciones
		// Si hay algun error se cambian los scope.error y return;

		//Logica variada

		Productos_service.createProducto(newProducto).then(function(response) {

			if(response.status == 200) // creacion OK
			{
				 //alert("Creación correcta. Status code 200");
				 $location.path('/');

			}
			else if(response.status == 403) // ya existe ID
			{
				 alert(response.data.mensaje+". Status code 403");
			}
			else
			{
				$scope.newProducto = JSON.stringify(response);
				alert("Algun error raro sucedió. Status code "+response.status);
			}

         });
		return;
	};
});