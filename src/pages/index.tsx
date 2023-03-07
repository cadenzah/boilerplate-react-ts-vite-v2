import React, { useState, useCallback } from 'react';

import Counter from '@/components/Counter';

// interface HomeProps {}
function Home() {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(
    () => setCounter(counter + 1),
    [counter, setCounter]
  );
  const decrement = useCallback(
    () => setCounter(counter - 1),
    [counter, setCounter]
  );
  return (
    <div className="home-container">
      The very first page of this template
      <Counter count={counter} increment={increment} decrement={decrement} />
    </div>
  );
}

export default Home;
