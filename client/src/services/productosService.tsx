'use client';

import axios from 'axios';
import cookieServiceClient from './cookieServiceClient';

const baseUrl = 'http://localhost:8000/api/productos/';

export class productosService {
  getProductos = async () => {
    /*
    const response = await fetch(baseUrl);
    return await response.json();
    */
    const response = await axios.get(baseUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${cookieServiceClient.getToken()}`,
      },
    });
    return await response.data;
  };

  getProductoById = async (id: any) => {
    /*
    const response = await fetch(`${baseUrl}${id}/`);
    return await response.json();
    */
    const response = await axios.get(`${baseUrl}${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${cookieServiceClient.getToken()}`,
      },
    });
    return await response.data;
  };

  createProducto = async (producto: any) => {
    /*
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });
    return await response.json();
    */
    return await axios.post(baseUrl, producto, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${cookieServiceClient.getToken()}`,
      },
    });
  };

  updateProducto = async (id: any, producto: any) => {
    /*
    const response = await fetch(`${baseUrl}${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });
    return await response.json();
    */

    return await axios.put(`${baseUrl}${id}/`, producto, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${cookieServiceClient.getToken()}`,
      },
    });
  };

  deleteProducto = async (id: any) => {
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
        Authorization: `Token ${cookieServiceClient.getToken()}`,
      },
    });
  };

  // Agrega métodos para actualizar y eliminar productos
}
