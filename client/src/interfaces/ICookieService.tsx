export default interface ICookieService {
  setToken(token: string): void;
  getToken(): string | null;
  isLogged(): boolean;
  setUsername(username: string): void;
  getUsername(): string | null;
  Logout(): void;
  isLogged(): boolean;
}
