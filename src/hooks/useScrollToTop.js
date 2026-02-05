import { useCallback } from 'react';

const useScrollToTop = (delayMs = 100) => {
  return useCallback(() => {
    setTimeout(() => window.scrollTo(0, 0), delayMs);
  }, [delayMs]);
};

export default useScrollToTop;
