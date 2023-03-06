import React, { useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';

import Navigation from '@/components/Navigation';

import AppWrapper from '@/components/templates/AppWrapper';
import Counter from '@/components/Counter';
import Footer from '@/components/Footer';

// interface AppProps {}

function App(props: PropsWithChildren<Record<string, unknown>>) {
  const { children } = props;
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
      <Navigation />
      <Counter count={counter} increment={increment} decrement={decrement} />
      <Footer />
      {children}
    </AppWrapper>
  );
}

export default App;
