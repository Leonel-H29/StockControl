const baseUrl = 'http://localhost:8000/api/proveedores/';

export class proveedorService {
  getProveedores = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
  };

  createProveedor = async (proveedor: any) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proveedor),
    });
    return await response.json();
  };

  // Agrega métodos para actualizar y eliminar proveedores
}
