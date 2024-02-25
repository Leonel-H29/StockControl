const baseUrl = 'http://localhost:8000/api/productos/';

export class productosService {
  getProductos = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
  };

  getProductoById = async (id: any) => {
    const response = await fetch(`${baseUrl}${id}/`);
    return await response.json();
  };

  createProducto = async (producto: any) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });
    return await response.json();
  };

  updateProducto = async (id: any, producto: any) => {
    const response = await fetch(`${baseUrl}${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });
    return await response.json();
  };

  // Agrega métodos para actualizar y eliminar productos
}
