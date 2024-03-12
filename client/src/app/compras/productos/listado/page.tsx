import {
  ButtonsTableComponents,
  ButtonsCreateComponents,
} from '@/components/Buttons';
import { productosService } from '@/services/productosService';
// import { cookies } from 'next/headers';

async function ListadoProductosPage() {
  /*
  const getToken = async () => {
    return cookies().get('token');
  };
  console.log(await getToken());
| */

  const Iprod = new productosService();
  const productos: [] = await Iprod.getProductos();
  console.log(productos);

  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h1 className="font-semibold text-base text-blueGray-700">
              Listado de productos
            </h1>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <ButtonsCreateComponents component="producto" />
          </div>
        </div>
      </div>

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

export default ListadoProductosPage;
