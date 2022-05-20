using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_producto.Models
{
    public class Producto
    {
        public int id_producto { get; set; }
        public string nombre { get; set; }
        public int cantidad { get; set; }
        public string descripcion { get; set; }


        public Producto() { }

        public Producto(int id, string Nombre, int Cantidad, string desc)
        {
            id_producto = id;
            nombre = Nombre;
            cantidad = Cantidad;
            descripcion = desc;

        }

        public Producto(string Nombre, int Cantidad, string desc)
        {
            nombre = Nombre;
            cantidad = Cantidad;
            descripcion = desc;
        }
    }
}   