import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const value = request.cookies.get('auth_user')?.value;
  console.log('COOKIE: ', value);

  const requestedPage = request.nextUrl.pathname;
  console.log('PATH: ', requestedPage);

  //En caso de que se quiera acceder a la ruta raiz '/' se redirigira a '/home'
  if (requestedPage === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/home`;
    return NextResponse.redirect(url);
  }

  //Si no esta logueado y quiere acceder a las rutas protegidas
  if (
    !value &&
    (requestedPage.startsWith('/home') || requestedPage.startsWith('/compras'))
  ) {
    //const requestedPage = request.nextUrl.pathname;
    const url = request.nextUrl.clone();
    url.pathname = `/login`;
    //url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }
  // En caso de que este logueado y quiera acceder a la pagina de login y crear usuario
  if (
    value &&
    (requestedPage.startsWith('/login') || requestedPage.startsWith('/create'))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/home`;
    //url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
