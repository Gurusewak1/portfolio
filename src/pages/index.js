// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.css'; // Correct path to your global CSS file


const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); // Redirect to /home
  }, [router]);

  return null; // No content needed, just redirect
};

export default Index;
