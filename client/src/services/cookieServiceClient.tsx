'use client';

import ICookieService from '@/interfaces/ICookieService';
import cookie from 'js-cookie';

const USER_KEY = 'auth_user';

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

  getToken(): string | null {
    const result = this.getCookie();
    return result?.token || null;
  }

  getUsername(): string | null {
    const result = this.getCookie();
    return result?.username || null;
  }

  Logout(): void {
    cookie.remove(USER_KEY);
  }

  isLogged(): boolean {
    return this.getCookie() !== null;
  }

  setToken(token: string): void {
    throw new Error('Method not implemented.');
  }
  setUsername(username: string): void {
    throw new Error('Method not implemented.');
  }
}

export default new cookieServiceClient();
