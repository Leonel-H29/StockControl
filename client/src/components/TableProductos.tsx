'use client';

import { productosService } from '@/services/productosService';
import { useEffect, useState } from 'react';
import { ButtonsTableComponents } from './Buttons';

export default function TableProductos() {
  const [productos, setProductos] = useState([]);

  const Iprod = new productosService();
  //const productos: [] = await Iprod.getProductos();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Iprod.getProductos();
      setProductos(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="block w-full overflow-x-auto">
        <table className="items-center bg-transparent w-full border-collapse ">
          <thead>
            <tr>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                ID Producto
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Nombre
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Precio
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Stock Actual
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Proveedor
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody style={{ maxHeight: '22.5rem', overflowY: 'auto' }}>
            {productos.map((prod: any) => (
              <tr key={prod.idproducto}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  <b>{prod.idproducto}</b>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {prod.nombre}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $ {prod.precio}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {prod.stock_actual}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {prod.proveedor.proveedor}
                </td>
                <td>
                  <ButtonsTableComponents
                    id={prod.idproducto}
                    component={'producto'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
        <div>Cantidad de productos: </div>
        <div className="text-blue-600">{productos.length}</div>
      </div>
    </>
  );
}
