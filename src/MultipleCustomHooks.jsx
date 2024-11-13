import React from "react";
import { UseCounter } from "./Hooks/UseCounter";
import { UseFetch } from "./Hooks/UseFetch";
import './index.css';

export const MultipleCustomHooks = () => {
  const { counter, increment } = UseCounter(1); // Asegúrate de destructurar bien
  const { data, isLoading, hasError } = UseFetch(`https://api.breakingbadquotes.xyz/v1/quotes/5${counter}`);

  return (
    <div className="container"> {/* Envuelve el contenido en la clase container */}
      <h1>Breaking Bad Quotes</h1>
      <hr />
      
      {
        isLoading ? (
          <div className="alert alert-info text-center">Loading...</div>
        ) : (
          <blockquote className="blockquote text-end">
            <p className="mb-1">{data?.[0]?.quote}</p>
            <footer className="blockquote-footer">{data?.[0]?.author}</footer>
          </blockquote>
        )
      }

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;