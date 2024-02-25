'use client';

import { useState, useEffect } from 'react';
import { productosService } from '@/services/productosService';
import { proveedorService } from '@/services/proveedorSevice';
import { useRouter } from 'next/navigation';

function CrearProductoPage() {
  const [proveedores, setProveedores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stockActual, setStockActual] = useState('');
  const [proveedor, setProveedor] = useState('');

  const router = useRouter();

  useEffect(() => {
    const cargarProveedores = async () => {
      const IProv = new proveedorService();
      const proveedoresData = await IProv.getProveedores();
      setProveedores(proveedoresData);
      if (proveedoresData) {
        setProveedor(proveedoresData[0]['idproveedor']);
        console.log('Proveedor:', proveedor);
        //console.log('Type:', proveedor);
      }
    };

    cargarProveedores();
  }, []);

  /* 
  useEffect(() => {
    if (proveedores) {
      setProveedor(proveedores[0]['idproveedor']);
      console.log('Proveedor:', proveedor);
      //console.log('Type:', proveedor);
    }
  });
  */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const IProd = new productosService();
    try {
      const producto = {
        nombre,
        precio: Number(precio),
        stock_actual: Number(stockActual),
        proveedor: Number(proveedor),
      };
      console.log(producto);
      const res = await IProd.createProducto(producto);
      console.log(res);
      if (res.status === 201) {
        alert('Producto creado con éxito');
      } else {
        alert('Error al crear el producto');
      }

      // Reset form or redirect
    } catch (error) {
      alert('Error al crear el producto');
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h1 className="font-semibold text-base text-blueGray-700">
              Crear producto
            </h1>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Información del Producto
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Ingresa la información del producto.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="precio"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Precio
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="precio"
                    id="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="stockActual"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Stock Actual
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="stockActual"
                    id="stockActual"
                    value={stockActual}
                    onChange={(e) => setStockActual(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="proveedor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Proveedor
                </label>
                <div className="mt-2">
                  <select
                    id="proveedor"
                    value={proveedor}
                    onChange={(e) => setProveedor(e.target.value)} // Cambia esta línea
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  >
                    {proveedores.map((prov: any) => (
                      <option key={prov.idproveedor} value={prov.idproveedor}>
                        {prov.nombre} {prov.apellido}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear Producto
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CrearProductoPage;
