import { GA_TRACKING_ID } from '@/configs/constants';
import ReactGA from 'react-ga4';

export const openNewWindow = (url: string) => {
  window.open(url, '_blank');
};

// google analytics
export const initGA = () => {
  if (!GA_TRACKING_ID) return;
  ReactGA.initialize(GA_TRACKING_ID);
};
