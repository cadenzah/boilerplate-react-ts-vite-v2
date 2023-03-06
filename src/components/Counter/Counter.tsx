import React from 'react';
import './Counter.scss';

interface CounterProps {
  increment: () => void;
  decrement: () => void;
  count: number;
}

function Counter(props: CounterProps): JSX.Element {
  const { count, increment, decrement } = props;
  return (
    <div className="container">
      <p>{count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default Counter;
