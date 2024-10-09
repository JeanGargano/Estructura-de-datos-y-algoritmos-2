import './App.css'
import { useCounter } from './hooks/useCounter';

const FirstApp = ({ value }) => {
  // Usa el hook personalizado
  const { counter, increment, decrement, reset } = useCounter(value);

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
      <button onClick={reset}> Reinicio </button>
    </>
  );
};

export default FirstApp;
