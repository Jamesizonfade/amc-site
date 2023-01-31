import ReactGA from 'react-ga';
import { useEffect } from 'react';

const useTrackPage = () => {
  useEffect(() => {
    ReactGA.initialize('G-GB86KSN94K');
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
};

export default useTrackPage;