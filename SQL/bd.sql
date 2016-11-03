SQL TINGESO
/*==============================================================*/
/* table: cliente                                              */
/*==============================================================*/
create table producto
(
   id_producto          int not null,
   codigo_producto      varchar(50),
   nombre_producto      varchar(100),
   descripcion_producto varchar(210),
   precio_producto      int,
   foto_producto        varchar(200),
   cuidad_prodcuto      varchar(50),
   nombre_anunciante_producto varchar(50),
   telefono_anunciante_producto  varchar(100),
   primary key (id_producto)
);
