'use client';
import { Disclosure, Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useLogged from '@/hook/useLogged';
import useUsername from '@/hook/useUsername';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import cookieServiceClient from '@/services/cookieServiceClient';
const navigation = [
  { name: 'Home', title: 'Home', href: '/home', current: true },
  {
    name: 'Productos',
    title: 'Productos',
    href: '/compras/productos/listado',
    current: false,
  },
  {
    name: 'Proveedores',
    title: 'Proveedores',
    href: '/compras/proveedores/listado',
    current: false,
  },
];

// const userNavigation = [
//   //{ name: 'Your Profile', href: '#' },
//   //{ name: 'Settings', href: '#' },
//   //{ name: 'Sign out', href: '#' },
// ];

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ');
// }

export default function NavBar() {
  const router = useRouter();
  const { logged } = useLogged();

  const { username } = useUsername();

  const user = {
    name: username,
    imageUrl:
      'https://www.eleconomista.com.mx/export/sites/eleconomista/arte/avatar-usuario-generico.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };

  const BackToLogin = () => {
    cookieServiceClient.Logout();
    router.push('/login');
    location.reload();
    //router.refresh();
  };

  const OptionNavSelected = (Location: string) => {
    const pathname = usePathname();
    //console.log('PATH', pathname);

    //const Include = Location.includes('crear') || Location.includes('editar');

    return pathname === Location
      ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';
  };

  if (!logged) {
    return (
      <>
        <Disclosure as="nav" className="bg-gray-800">
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
              </div>
            </div>
          </div>
        </Disclosure>
      </>
    );
  }

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
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
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          title={item.title}
                          className={OptionNavSelected(item.href)}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      title="Logout"
                      onClick={() => BackToLogin()}
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <div className="flex items-center space-x-2">
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
                            d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                          />
                        </svg>
                        Logout
                      </div>
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt="Foto del usuario"
                          />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    title={item.title}
                    className={OptionNavSelected(item.href)}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt="Foto del usuario"
                      title="Foto del usuario"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => BackToLogin()}
                    title="Logout"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <div className="flex items-center space-x-2">
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
                          d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                        />
                      </svg>
                      <span>Logout</span>
                    </div>
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
    </>
  );
}
