package ejb;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import facade.AbstractFacade;
import facade.ProductoFacade;
import model.Producto;

@Stateless
public class ProductoFacadeEJB extends AbstractFacade<Producto> implements ProductoFacade {
	
	
	@PersistenceContext(unitName = "tingesoAPI")
	private EntityManager em;
	
	public ProductoFacadeEJB() {
		super(Producto.class);
	}

	@Override
	protected EntityManager getEntityManager() {
		return this.em;
	}

}