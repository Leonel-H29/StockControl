'use client';

import { ButtonsCreateComponents } from '@/components/Buttons';
import TableProveedores from '@/components/TableProveedores';
import useLogged from '@/hook/useLogged';
import { useRouter } from 'next/navigation';

async function ListadoProveedoresPage() {
  const router = useRouter();
  const { logged } = useLogged();

  if (!logged) {
    return router.push('/login');
  }

  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h1 className="font-semibold text-base text-blueGray-700">
              Listado de proveedores
            </h1>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <ButtonsCreateComponents component={'proveedor'} />
          </div>
        </div>
      </div>
      <TableProveedores />
    </>
  );
}

export default ListadoProveedoresPage;
