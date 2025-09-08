import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ممكن تخليها auto لو مش عاوز smooth
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
