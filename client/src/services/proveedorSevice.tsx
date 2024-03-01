import axios from 'axios';
const baseUrl = 'http://localhost:8000/api/proveedores/';

export class proveedorService {
  getProveedores = async () => {
    /*
    const response = await fetch(baseUrl);
    return await response.json();
    */
    const response = await axios.get(baseUrl);
    return await response.data;
  };

  getProveedorById = async (id: any) => {
    /*
    const response = await fetch(`${baseUrl}${id}/`);
    return await response.json();
    */
    const response = await axios.get(`${baseUrl}${id}/`);
    return await response.data;
  };

  createProveedor = async (proveedor: any) => {
    /*
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proveedor),
    });
    return await response.json();
    */
    return await axios.post(baseUrl, proveedor, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  updateProveedor = async (id: any, proveedor: any) => {
    /*
    const response = await fetch(`${baseUrl}${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proveedor),
    });
    return await response.json();
    */
    return await axios.put(`${baseUrl}${id}/`, proveedor, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  deleteProveedor = async (id: any) => {
    /*
    const response = await fetch(`${baseUrl}${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
    */
    return await axios.delete(`${baseUrl}${id}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  // Agrega métodos para actualizar y eliminar proveedores
}
