'use client';
import { productosService } from '@/services/productosService';
import { proveedorService } from '@/services/proveedorSevice';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function ButtonsRefreshComponents(params: { component: string }) {
  const Iprod = new productosService();
  const IProv = new proveedorService();
  //const router = useRouter();
  const component = params.component;

  return (
    <div>
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        title={`Agregar ${component}`}
        onClick={async () => {
          if (component === 'producto') {
            await Iprod.getProductos();
          } else {
            await IProv.getProveedores();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
    </div>
  );
}

export function ButtonsCreateComponents(params: { component: string }) {
  const router = useRouter();
  const component = params.component;

  return (
    <div>
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        title={`Agregar ${component}`}
        onClick={() => {
          if (component === 'producto') {
            router.push('/compras/productos/crear/');
          } else {
            router.push('/compras/proveedores/crear/');
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {component === 'producto' ? 'PRODUCTO' : 'PROVEEDOR'}
      </button>
    </div>
  );
}

export function ButtonsTableComponents(params: { id: any; component: string }) {
  const router = useRouter();
  const Iprod = new productosService();
  const IProv = new proveedorService();
  const Editar = () => {
    if (params.component === 'producto') {
      router.push(`/compras/productos/editar/${params.id}`);
      router.refresh();
    } else {
      router.push(`/compras/proveedores/editar/${params.id}`);
      router.refresh();
    }
  };

  const Delete = async () => {
    if (params.component === 'producto') {
      toast('¿Desea eliminar el registro?', {
        style: {
          padding: '2rem',
          fontSize: '1.2rem',
        },
        position: 'top-center',
        action: {
          label: 'Aceptar',
          onClick: () => {
            toast.promise(Iprod.deleteProducto(params.id), {
              success: 'Producto eliminado exitosamente!',
              error: 'Error al eliminar el producto',
              loading: 'Guardando cambios ...',
            });
            router.push('/compras/productos/listado/');
            router.refresh();
          },
        },
        cancel: {
          label: 'Cancelar',
          onClick: () => toast.dismiss(),
        },
      });
    } else {
      toast('¿Desea eliminar el registro?', {
        position: 'top-center',
        action: {
          label: 'Aceptar',

          onClick: () => {
            toast.promise(IProv.deleteProveedor(params.id), {
              success: 'Proveedor eliminado exitosamente!',
              error: 'Error al eliminar el proveedor',
              loading: 'Guardando cambios ...',
            });
            router.push('/compras/proveedores/listado/');
            router.refresh();
          },
        },
        cancel: {
          label: 'Cancelar',
          onClick: () => toast.dismiss(),
        },
      });
    }
  };

  return (
    <div>
      {/*--- BOTON EDITAR --- */}
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        title="Editar registro"
        onClick={() => Editar()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      {/*--- BOTON ELIMINAR --- */}
      <button
        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => Delete()}
        title="Eliminar registro"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
