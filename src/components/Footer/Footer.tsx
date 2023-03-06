import React, { useCallback } from 'react';
import './Footer.scss';

import ReactGA from 'react-ga4';

import ComponentWrapper from '@/components/templates/ComponentWrapper';

// interface FooterProps {}

/**
 * 최하단 Footer
 * */
function Footer() {
  const visitDeveloper = useCallback(() => {
    ReactGA.event('click', {
      type: 'visit_link',
      action: '개발자 링크 방문',
      target: 'developer'
    });
  }, []);

  return (
    <ComponentWrapper backgroundColor="#e2e2e1" clearTopMargin>
      <div className="footer-wrapper">
        <div className="credits">
          <span>
            Developed by{' '}
            <a
              href="https://github.com/cadenzah/"
              target="_blank"
              rel="noreferrer"
              onClick={visitDeveloper}
            >
              cadenzah
            </a>
            . Powered by{' '}
            <a
              href="https://pages.github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Github Page
            </a>
            . 2023.
          </span>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Footer;
