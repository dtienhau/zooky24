import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://all.nailsforus.com' + window.location.pathname;
  }, []);

  return null;
}
