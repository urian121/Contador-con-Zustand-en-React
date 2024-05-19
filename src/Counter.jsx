import useCounterStore from "./stores/useCounterStore";

export const Counter = () => {
  //  const { count, increment, decrement, reset } = useCounterStore();

  //Forma recomendada
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrementar
      </button>
      <button onClick={reset} disabled={count === 0}>
        Reiniciar
      </button>
    </div>
  );
};
