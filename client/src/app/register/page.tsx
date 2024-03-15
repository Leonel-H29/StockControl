'use client';

import RegisterFormPage from '@/components/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Registrar su cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterFormPage />
          <p className="mt-10 text-center text-sm text-white-500">
            ¿Ya tiene su cuenta?{' '}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              title="Iniciar sesión en su cuenta"
            >
              Iniciar sesión en su cuenta
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
