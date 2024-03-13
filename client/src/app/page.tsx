'use client';
import useUsername from '@/hook/useUsername';
import useLogged from '@/hook/useLogged';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { username } = useUsername();
  const { logged } = useLogged();

  if (!logged) {
    return router.push('/login');
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-white-900">
          Bienvenido <i>{username}</i>
        </h1>
      </div>
    </>
  );
}
