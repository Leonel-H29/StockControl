'use client';

import { useEffect, useState } from 'react';
import { ButtonsTableComponents } from './Buttons';
import { proveedorService } from '@/services/proveedorSevice';

export default function TableProveedores() {
  const [proveedores, setProveedores] = useState([]);

  const Iprov = new proveedorService();
  //const productos: [] = await Iprod.getProductos();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Iprov.getProveedores();
      setProveedores(data);
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
                ID Proveedor
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Nombre
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Apellido
              </th>
              <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                CUIT
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody style={{ maxHeight: '22.5rem', overflowY: 'auto' }}>
            {proveedores.map((prov: any) => (
              <tr key={prov.idproveedor}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  <b>{prov.idproveedor}</b>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {prov.nombre}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {prov.apellido}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {prov.cuit}
                </td>
                <td>
                  <ButtonsTableComponents
                    id={prov.idproveedor}
                    component={'proveedor'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
        <div>Cantidad de proveedores: </div>
        <div className="text-blue-600">{proveedores.length}</div>
      </div>
    </>
  );
}
