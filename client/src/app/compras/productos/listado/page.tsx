'use client';

import { ButtonsCreateComponents } from '@/components/Buttons';
import TableProductos from '@/components/TableProductos';
import useLogged from '@/hook/useLogged';
import { useRouter } from 'next/navigation';

async function ListadoProductosPage() {
  const { logged } = useLogged();
  const router = useRouter();

  // if (!logged) {
  //   return router.push('/login');
  // }

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
      <TableProductos />
    </>
  );
}

export default ListadoProductosPage;
