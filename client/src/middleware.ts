import { NextRequest, NextResponse } from 'next/server';
//import { getCookie, setCookie } from './services/cookieServiceServer';

export async function middleware(request: NextRequest) {
  const value = request.cookies.get('auth_user')?.value;
  //console.log('Cookie value: ', value);
  //console.log('Cookie value type: ', typeof value);
  //console.log('Session: ', cookieServiceServer.isLogged);
  if (!value) {
    const requestedPage = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    url.pathname = `/login`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  //setCookie(value);

  //setCookie(value);

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/compras/productos/listado',
    '/compras/productos/crear',
    '/compras/productos/editar',
    '/compras/proveedores/listado',
    '/compras/proveedores/crear',
    '/compras/proveedores/editar',
  ],
};
