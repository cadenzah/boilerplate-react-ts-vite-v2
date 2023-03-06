import React from 'react';
import type { PropsWithChildren } from 'react';
import './AppWrapper.scss';

// interface AppWrapperProps {}

/**
 * 화면 전체를 감싸는 래퍼 컴포넌트
 * - /pages 하위의 화면 컴포넌트에서만 사용
 * - Mobile-first 로 반응형 화면을 형성
 * */
function AppWrapper(props: PropsWithChildren<Record<string, unknown>>) {
  const { children } = props;
  return <div className="template-app-wrapper">{children}</div>;
}

export default AppWrapper;
