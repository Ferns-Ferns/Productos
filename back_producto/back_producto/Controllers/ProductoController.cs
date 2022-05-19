using back_producto.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace back_producto.Controllers
{
    [EnableCors(origins:"*" ,headers:"*" , methods:"GET, POST, PUT, DELETE, OPTIONS")]
    public class ProductoController : ApiController
    {
        // GET: api/Producto
        public IEnumerable<Producto> Get()
        {
            GestorProducto gProducto = new GestorProducto();
            return gProducto.getProducto();
        }

        // GET: api/Producto/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Producto
        public bool Post([FromBody]Producto producto)
        {
            GestorProducto gProducto = new GestorProducto();
            bool res = gProducto.addProducto(producto);

            return res;
        }

        // PUT: api/Producto/5
        public bool Put(int id, [FromBody]Producto producto)
        {
            GestorProducto gProducto = new GestorProducto();
            bool res = gProducto.updateProducto(id, producto);

            return res;
        }

        // DELETE: api/Producto/5
        public bool Delete(int id)
        {
            GestorProducto gProducto = new GestorProducto();
            bool res = gProducto.deleteProducto(id);

            return res;
        }
    }
}
