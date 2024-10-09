import React from 'react';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const { data, isLoading, hasError } = useFetch('https://api.example.com/data');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
