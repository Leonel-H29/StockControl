'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import userService from '@/services/userService';
import { useRouter } from 'next/navigation';

export default function LoginFormPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = {
        username: username,
        password: password,
      };
      console.log(user);

      /*
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        toast.error('Error al iniciar sesión');
      }
      */

      await userService
        .Login(user)
        .then((data) => {
          //console.log('Data ', data);
          router.push('/home');
          location.reload();
        })
        .catch((error) => {
          console.log(error.message);
          toast.error('Error al iniciar sesión');
        });
    } catch (error) {
      toast.error('Error al iniciar sesión');
      console.error(error);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-white-900"
        >
          Nombre de usuario
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white-900"
          >
            Password
          </label>
          {/* 
                <div className="text-sm">
                    
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                  
                </div>
                */}
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
}
