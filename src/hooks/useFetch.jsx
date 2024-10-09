import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    // Resetea los estados al cambiar la URL
    setIsLoading(true);
    setHasError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setHasError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]); // Se ejecuta cada vez que cambia la URL

  return { data, isLoading, hasError };
};
