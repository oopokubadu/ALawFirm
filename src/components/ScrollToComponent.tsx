import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToComponentProps {
  selector: any;
}

const ScrollToComponent: React.FC<ScrollToComponentProps> = ({ selector }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === selector) {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, selector]);

  return null;
};

export default ScrollToComponent;
