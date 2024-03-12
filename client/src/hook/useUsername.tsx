import cookieServiceClient from '@/services/cookieServiceClient';
import { useEffect, useState } from 'react';

export default function useUsername() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    if (cookieServiceClient.getUsername() !== null) {
      setUsername(String(cookieServiceClient.getUsername()));
    }
  });

  return { username };
}
