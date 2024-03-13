'use client';

import { useState, useEffect } from 'react';
import { productosService } from '@/services/productosService';
import { proveedorService } from '@/services/proveedorSevice';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import useLogged from '@/hook/useLogged';
//import tokenService from '@/services/tokenService';

function CrearProductoPage(params: any) {
  const [proveedores, setProveedores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stockActual, setStockActual] = useState('');
  const [proveedor, setProveedor] = useState('');
  const { logged } = useLogged();

  const IProv = new proveedorService();
  const IProd = new productosService();

  const router = useRouter();

  useEffect(() => {
    console.log(params.params);
    //console.log('Id: ', params.id);
    const id = params.params.id; // Accede a id dentro de params
    console.log('Id: ', id);
    if (id) {
      IProd.getProductoById(id)
        .then((data) => {
          setNombre(data.nombre);
          setPrecio(data.precio);
          setStockActual(data.stock_actual);
          setProveedor(data.proveedor.idproveedor);
        })
        .catch((err) => {
          console.log('No se ha podido obtener los datos correctamente');
        });
    }
  }, []);

  useEffect(() => {
    const cargarProveedores = async () => {
      const proveedoresData = await IProv.getProveedores();
      setProveedores(proveedoresData);
      if (proveedoresData) {
        setProveedor(proveedoresData[0]['idproveedor']);
        console.log('Proveedor:', proveedor);
        //console.log('Type:', proveedor);
      } else {
        //toast.error('Debe cargar almenos un proveedor')
        toast('Error', {
          description: 'Debe cargar almenos un proveedor',
          action: {
            label: 'Cerrar',
            onClick: () => router.push('/compras/productos/listado'),
          },
        });
      }
    };

    cargarProveedores();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const producto = {
        nombre,
        precio: Number(precio),
        stock_actual: Number(stockActual),
        proveedor: Number(proveedor),
      };
      console.log(producto);

      if (params.params.id) {
        // Actualizo el registro

        toast.promise(IProd.updateProducto(params.params.id, producto), {
          success: 'Producto actualizado con éxito',
          error: 'Error al actualizar el producto',
          loading: 'Guardando cambios ...',
        });
      } else {
        // Creo el registro

        toast.promise(IProd.createProducto(producto), {
          success: 'Producto creado con éxito',
          error: 'Error al crear el producto',
          loading: 'Guardando cambios ...',
        });
      }
      // Reset form or redirect
    } catch (error) {
      toast.error('Error al crear el producto');
      console.error(error);
    } finally {
      router.push('/compras/productos/listado');
      router.refresh();
    }
  };

  if (!logged) {
    return router.push('/login');
  }

  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h1 className="font-semibold text-base text-blueGray-700">
              {params.params.id ? 'Editar Producto' : 'Crear Producto'}
            </h1>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-white-600">
              Ingresa la información del producto.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium leading-6 text-white-900"
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
                  className="block text-sm font-medium leading-6 text-white-900"
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
                  className="block text-sm font-medium leading-6 text-white-900"
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
                  className="block text-sm font-medium leading-6 text-white-900"
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

                  <br />

                  {proveedores.length == 0 && (
                    <div
                      className="flex bg-yellow-100 rounded-lg p-4 mb-4 text-sm text-yellow-700"
                      role="alert"
                    >
                      <svg
                        className="w-5 h-5 inline mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <span className="font-medium">Advertencia!</span> Debe
                        registrar al menos un proveedor.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white-900"
              onClick={() => router.push('/compras/productos/listado')}
              title="Cancelar"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              title="Guardar"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CrearProductoPage;
