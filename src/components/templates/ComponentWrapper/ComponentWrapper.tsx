import React from 'react';
import type { PropsWithChildren } from 'react';
import './ComponentWrapper.scss';

interface ComponentWrapperProps {
  className?: string;
  fit?: boolean /** 화면 전체를 여백없이 모두 사용하는 컴포넌트 */;
  primary?: boolean /** 화면의 배경색 사용 여부 */;
  backgroundColor?: string;
  clearTopMargin?: boolean /** 컴포넌트 상단 여백을 0으로 설정 */;
  clearBottomMargin?: boolean /** 컴포넌트 하단 여백을 0으로 설정 */;
}

/** 개별 컴포넌트를 감싸는 래퍼 컴포넌트 */
function ComponentWrapper(props: PropsWithChildren<ComponentWrapperProps>) {
  const {
    children,
    className,
    primary,
    fit,
    backgroundColor,
    clearTopMargin,
    clearBottomMargin
  } = props;

  let outerClasses = `component-wrapper-outer`;
  let innerClasses = `component-wrapper-inner`;
  const outerStyles: Record<string, string> = {};

  if (primary) {
    outerClasses += ' primary';
  }

  if (className) {
    innerClasses += ` ${className}`;
  }
  const optionalProps = { fit, clearTopMargin, clearBottomMargin };
  Object.entries(optionalProps).forEach(([key, value]) => {
    if (value) {
      innerClasses += ` ${key}`;
    }
  });

  if (backgroundColor) {
    outerStyles.backgroundColor = backgroundColor;
  }

  return (
    <div className={`${outerClasses}`} style={outerStyles}>
      <div className={`${innerClasses}`}>{children}</div>
    </div>
  );
}

export default ComponentWrapper;
