// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Redirect to /home
  }, [router]);

  return null; // No content needed, just redirect
};

export default Index;
