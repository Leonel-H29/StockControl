import cookieServiceClient from '@/services/cookieServiceClient';
import { useEffect, useState } from 'react';

export default function useLogged() {
  const [logged, SetLogged] = useState(true);
  useEffect(() => {
    if (!cookieServiceClient.isLogged()) {
      SetLogged(false);
    }
  });

  return { logged };
}
