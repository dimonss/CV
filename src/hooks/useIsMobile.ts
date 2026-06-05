import { useMediaQuery } from '@mui/material';

const useIsMobile = (breakpoint: number = 600): boolean => {
  return useMediaQuery(`(max-width:${breakpoint}px)`);
};

export default useIsMobile;
