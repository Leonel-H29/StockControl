'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { proveedorService } from '@/services/proveedorSevice';
import { toast } from 'sonner';

export default function CrearProveedorPage(params: any) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cuit, setCuit] = useState('');

  const IProv = new proveedorService();
  const router = useRouter();

  useEffect(() => {
    const id = params.params.id; // Accede a id dentro de params
    console.log('Id: ', id);
    if (id) {
      IProv.getProveedorById(id)
        .then((data) => {
          setNombre(data.nombre);
          setApellido(data.apellido);
          setCuit(data.cuit);
        })
        .catch((err) => {
          console.log('No se ha podido obtener los datos correctamente');
        });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const proveedor = {
        nombre,
        apellido,
        cuit: Number(cuit),
      };
      console.log(proveedor);

      if (params.params.id) {
        // Actualizo el registro

        toast.promise(IProv.updateProveedor(params.params.id, proveedor), {
          success: 'Proveedor actualizado con éxito',
          error: 'Error al actualizar el proveedor',
          loading: 'Guardando cambios ...',
        });
      } else {
        // Creo el registro

        toast.promise(IProv.createProveedor(proveedor), {
          success: 'Proveedor creado con éxito',
          error: 'Error al crear el proveedor',
          loading: 'Guardando cambios ...',
        });
      }
    } catch (error) {
      //alert('Error al crear el proveedor');
      toast.error('Error al crear el proveedor');
      console.error(error);
    } finally {
      router.push('/compras/proveedores/listado');
      router.refresh();
    }
  };

  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h1 className="font-semibold text-base text-blueGray-700">
              {params.params.id ? 'Editar Proveedor' : 'Crear Proveedor'}
            </h1>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-white-600">
              Ingresa la información del proveedor.
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
                  htmlFor="nombre"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Apellido
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  CUIT
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cuit"
                    id="cuit"
                    value={cuit}
                    onChange={(e) => setCuit(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-white-900"
              onClick={() => router.push('/compras/proveedores/listado')}
              title="Cancelar"
            >
              Cancelar
            </button>
            <button
              type="submit"
              title="Guardar"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
