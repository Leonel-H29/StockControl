'use client';

import ICookieService from '@/interfaces/ICookieService';
import cookie from 'js-cookie';

const USER_KEY = 'auth_user';
const TOKEN_KEY = 'auth_token';

class cookieServiceClient implements ICookieService {
  constructor() {}

  setCookie(args: { token: string; username: string }): void {
    const data = JSON.stringify(args);
    cookie.remove(USER_KEY); // Asegurarse de que no haya una cookie previa con el mismo nombre
    cookie.set(USER_KEY, data, { sameSite: 'None', secure: true });
  }

  getCookie(): { token: string; username: string } | null {
    const data = cookie.get(USER_KEY);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  setToken(token: string) {
    //window.sessionStorage.removeItem(TOKEN_KEY);
    //window.sessionStorage.setItem(TOKEN_KEY, token);
    //cookie.remove(TOKEN_KEY);
    //cookie.set(TOKEN_KEY, token, { sameSite: 'None', secure: true });
  }

  getToken(): string | null {
    //return window.sessionStorage.getItem(TOKEN_KEY);
    const result = this.getCookie();
    return result?.token || null;
  }

  setUsername(username: string): void {
    //window.sessionStorage.removeItem(USER_KEY);
    //window.sessionStorage.setItem(USER_KEY, username);
    //cookie.remove(TOKEN_KEY);
    //cookie.set(USER_KEY, username, { sameSite: 'None', secure: true });
  }

  getUsername(): string | null {
    //return window.sessionStorage.getItem(USER_KEY)!;
    const result = this.getCookie();
    return result?.username || null;
  }

  Logout(): void {
    //cookie.remove(TOKEN_KEY);
    //cookie.remove(TOKEN_KEY);
    cookie.remove(USER_KEY);
    //window.sessionStorage.clear();
  }

  isLogged(): boolean {
    //return this.getToken() !== null && this.getUsername() !== null;
    return this.getCookie() !== null;
  }
}

export default new cookieServiceClient();
