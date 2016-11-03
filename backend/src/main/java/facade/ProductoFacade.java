package facade;

import java.util.List;
import javax.ejb.Local;
import model.Producto;

@Local
public interface ProductoFacade {

	public void create(Producto entity);

	public List<Producto> findAll();
}