'use client';
import useUsername from '@/hook/useUsername';
//import Image from 'next/image';
//import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
//import cookieServiceClient from '@/services/cookieServiceClient';

export default function Home() {
  const router = useRouter();
  const { username } = useUsername();
  //const username = cookieServiceClient.getUsername();
  //console.log(username);
  //console.log(tokenServiceClient.getToken());
  /*
  useEffect(() => {
    if (!cookieServiceClient.isLogged()) {
      router.push('/login');
      router.refresh();
    }
  });
  */

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
