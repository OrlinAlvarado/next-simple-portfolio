import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'
import Navbar from './Navbar';
import ClassNames from 'classnames';

const Layout = ({ children, footer = true, dark = true }) => {

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', url => {
      NProgress.start();
    });

    router.events.on('routeChangeComplete', () =>  NProgress.done() );

    return () => {
      router.events.off('routeChangeStart');
      router.events.off('routeChangeComplete')
    }
  }, [])

  return (
    <div className={ ClassNames({'bg-dark': dark}) }>
      <Navbar />
      <main className="container py-2">{children}</main>
      {
        footer && (
          <footer className="bg-dark text-light text-center">
            <div className="container p-4">
              <h1>&copy; Ryan Ray Portfolio</h1>
              <p>2000 - { new Date().getFullYear() }</p>
              <p>All rights reserved.</p>
            </div>
          </footer>
        )
      }
    </div>
  )
}

export default Layout;
