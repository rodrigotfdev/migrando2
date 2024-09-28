import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';
import Hero2 from '../Hero/Hero2';


const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <>
      {isLoading ? <Preloader /> : (
        <div>
          <CustomCursor />
          <Header />
          <Outlet />
        </div>
      )
      }
    </>
  )
}
export default Layout;
