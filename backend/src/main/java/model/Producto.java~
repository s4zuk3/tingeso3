package model;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name="producto")
public class Producto implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id_producto", unique=true, nullable=false)
	private Integer idProducto;

	@Column(name="codigo_producto", length=50)
	private String codigoProducto;

	@Column(name="nombre_producto", length=100)
	private String nombreProducto;

	@Column(name="descripcion_producto", length=210)
	private String descripcionProducto;

	@Column(name="precio_producto")
	private Integer precioProducto;

	@Column(name="foto_producto", length=200)
	private String fotoProducto;

	@Column(name="cuidad_producto", length=50)
	private String cuidadProducto;

	@Column(name="nombre_anunciante_producto", length=50)
	private String nombreAnuncianteProducto;

	@Column(name="telefono_anunciante_producto", length=100)
	private String telefonoAnuncianteProducto;

	@Column(name="descripcion", nullable=true, length=400)
	private String descripcion;
		
	public Producto() {
	}

	public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public String getCodigoProducto() {
        return codigoProducto;
    }

    public void setCodigoProducto(String codigoProducto) {
        this.codigoProducto = codigoProducto;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcionProducto() {
        return descripcionProducto;
    }

    public void setDescripcionProducto(String descripcionProducto) {
        this.descripcionProducto = descripcionProducto;
    }

    public Integer getPrecioProducto() {
        return precioProducto;
    }

    public void setPrecioProducto(Integer precioProducto) {
        this.precioProducto = precioProducto;
    }

    public String getFotoProducto() {
        return fotoProducto;
    }

    public void setFotoProducto(String fotoProducto) {
        this.fotoProducto = fotoProducto;
    }

    public String getCuidadProducto() {
        return cuidadProducto;
    }

    public void setCuidadProducto(String cuidadProducto) {
        this.cuidadProducto = cuidadProducto;
    }

    public String getNombreAnuncianteProducto() {
        return nombreAnuncianteProducto;
    }

    public void setNombreAnuncianteProducto(String nombreAnuncianteProducto) {
        this.nombreAnuncianteProducto = nombreAnuncianteProducto;
    }

    public String getTelefonoAnuncianteProducto() {
        return telefonoAnuncianteProducto;
    }

    public void setTelefonoAnuncianteProducto(String telefonoAnuncianteProducto) {
        this.telefonoAnuncianteProducto = telefonoAnuncianteProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }


	@Override
	public boolean equals(Object a){
		return ((Producto)a).idProducto == this.idProducto;
	}

	@Override
    	public int hashCode() {
    		return this.idProducto;
    	}
	
}