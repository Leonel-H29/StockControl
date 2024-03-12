'use client';
import useLogged from '@/hook/useLogged';
import useUsername from '@/hook/useUsername';
// import tokenService from '@/services/tokenService';
import cookieServiceClient from '@/services/cookieServiceClient';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function NavBar() {
  //const [logged, SetLogged] = useState(false);
  const { logged } = useLogged();
  const { username } = useUsername();

  const OptionNavSelected = (Location: string) => {
    const pathname = usePathname();
    //console.log('PATH', pathname);

    //const Include = Location.includes('crear') || Location.includes('editar');

    return pathname === Location
      ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
  };
  return (
    <div hidden={logged}>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Stock Control"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className={OptionNavSelected('/')}
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="/compras/productos/listado"
                    className={OptionNavSelected('/compras/productos/listado')}
                  >
                    Productos
                  </a>
                  <a
                    href="/compras/proveedores/listado"
                    className={OptionNavSelected(
                      '/compras/proveedores/listado'
                    )}
                  >
                    Proveedores
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://www.eleconomista.com.mx/export/sites/eleconomista/arte/avatar-usuario-generico.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="/" className={OptionNavSelected('/')} aria-current="page">
              Home
            </a>
            <a
              href="/compras/productos/listado"
              className={OptionNavSelected('/compras/productos/listado')}
            >
              Productos
            </a>
            <a
              href="/compras/proveedores/listado"
              className={OptionNavSelected('/compras/proveedores/listado')}
            >
              Proveedores
            </a>
          </div>
        </div>
      </nav>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
    </div>
  );
}
