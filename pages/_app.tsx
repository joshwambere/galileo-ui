import '../styles/globals.css';
import '../styles/login.css';
import 'antd/dist/antd.css';
import 'intro.js/introjs.css';
import 'react-chat-elements/dist/main.css';
import type { AppProps } from 'next/app';
import { store } from '../shared/redux/store';
import { Provider } from 'react-redux';
import MainLoader from '../components/shared/loaders/MainLoader';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
  loading: () => <MainLoader />
});
