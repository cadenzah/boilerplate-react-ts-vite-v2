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
  // const visitDesigner = useCallback(() => {
  //   ReactGA.event('click', {
  //     type: 'visit_link',
  //     action: '디자이너 링크 방문',
  //     target: 'designer'
  //   });
  // }, []);
  const openPaperInvitation = useCallback(() => {
    ReactGA.event('click', {
      type: 'open_paper_invitation',
      action: '종이청첩장 열기'
    });
  }, []);

  return (
    <ComponentWrapper backgroundColor="#e2e2e1" clearTopMargin>
      <div className="footer-wrapper">
        <div className="credits">
          <span>
            직접 만든 종이청첩장{' '}
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              onClick={openPaperInvitation}
            >
              구경하기
            </a>
          </span>
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
            . Designed by hyerin. Powered by{' '}
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
