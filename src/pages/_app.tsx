import React, { useState, useCallback } from 'react';

import AppWrapper from '@/components/templates/AppWrapper';

import Counter from '@/components/Counter';
import Footer from '@/components/Footer';

function App() {
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
    <AppWrapper>
      <Counter count={counter} increment={increment} decrement={decrement} />
      <Footer />
    </AppWrapper>
  );
}

export default App;
