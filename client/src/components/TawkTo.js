import React, { useEffect } from 'react';
const TawkTo = () => {
  const TAWK_API_KEY = '644ae5b931ebfa0fe7fad07b/1gv292nh0';

  useEffect(() => {
    const tawk = document.createElement('script');
    tawk.async = true;
    tawk.src = `https://embed.tawk.to/${TAWK_API_KEY}/default`;
    tawk.charset = 'UTF-8';
    tawk.setAttribute('crossorigin', '*');
    document.body.appendChild(tawk);

    console.log('TawkTo component mounted successfully');
    console.log('Tawk script loaded successfully');

    return () => {
      document.body.removeChild(tawk);
    };
  }, []);

  return null;
};

export default TawkTo;