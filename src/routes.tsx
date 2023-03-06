import React, { Fragment, Suspense } from 'react';
import { Routes as RouterSwitch, Route } from 'react-router-dom';

interface AsyncRouteComponent {
  [key: string]: () => Promise<{ default: React.ComponentType }>;
}
interface Preserved {
  [key: string]: React.ComponentType<React.PropsWithChildren>;
}

const PRESERVED = import.meta.glob('/src/pages/(_app|404).tsx', {
  eager: true
}) as Record<string, Preserved>;
const ROUTES = import.meta.glob(
  '/src/pages/**/[a-z[]*.tsx'
) as AsyncRouteComponent;

const preserved = Object.entries(PRESERVED).reduce((prev, [name, file]) => {
  const key = name.replace(/\/src\/pages\/|\.tsx$/g, '');
  return { ...prev, [key]: file.default };
}, {} as Preserved);

const routes = Object.entries(ROUTES).map(([name, file]) => {
  const path = name
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: React.lazy(file) };
});

export default function Routes(): JSX.Element {
  const App = preserved?.['_app'] || Fragment;
  const NotFound = preserved?.['404'] || Fragment;
  return (
    <App>
      <Suspense fallback={'Loading...'}>
        <RouterSwitch>
          {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </RouterSwitch>
      </Suspense>
    </App>
  );
}
