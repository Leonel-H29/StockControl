import cookieServiceClient from '@/services/cookieServiceClient';
import { useEffect, useState } from 'react';

export default function useLogged() {
  const [logged, SetLogged] = useState(false);
  useEffect(() => {
    if (!cookieServiceClient.isLogged()) {
      SetLogged(true);
    }
  });

  return { logged };
}
