import React from 'react';
import type { PropsWithChildren } from 'react';

import Navigation from '@/components/Navigation';

import AppWrapper from '@/components/templates/AppWrapper';
import Footer from '@/components/Footer';

// interface AppProps {}
function App(props: PropsWithChildren<Record<string, unknown>>) {
  const { children } = props;
  return (
    <AppWrapper>
      <Navigation />
      {children}
      <Footer />
    </AppWrapper>
  );
}

export default App;
