tingesoApp.service("Productos_service", function($http) {
    this.getAllProductos = function() {
      return $http.get(URL_API+"/productos").
        then(function(response) {
            return response;
        }, function(response) {
            console.log("Error get AllProductos: "+JSON.stringify(response));
            return response;
        });
    }
    
    this.createProducto = function(newProducto) {
            return $http.post(URL_API+"/productos", newProducto).
                then(function(response) {
                    return response;
                }, function(response) {
                    console.log("Error creating new Producto: "+JSON.stringify(response));
                    return response;
                });
    }
});