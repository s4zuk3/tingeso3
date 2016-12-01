package service;

import java.util.List;
import java.util.logging.Logger;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import facade.ProductoFacade;
import model.Producto;

@Path("/productos")
public class ProductoService {
	
	@EJB 
	ProductoFacade productoFacadeEJB;
	
	Logger logger = Logger.getLogger(ProductoService.class.getName());
	
	@GET
	@Produces({"application/xml", "application/json"})
	public List<Producto> findAll(){
		return productoFacadeEJB.findAll();
	}
	
	@POST
    @Consumes({"application/xml", "application/json"})
    public void create(Producto entity) {
        productoFacadeEJB.create(entity);
        return Response.status(Status.OK).build();
    }

}