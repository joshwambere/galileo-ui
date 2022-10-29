import '../styles/globals.css';
import '../styles/login.css';
import 'antd/dist/antd.css';
import 'react-chat-elements/dist/main.css';
import type { AppProps } from 'next/app';
import { store } from '../shared/redux/store';
import { Provider } from 'react-redux';
import MainLoader from '../components/shared/loaders/MainLoader';
import dynamic from 'next/dynamic';

function App({ Component, pageProps }: AppProps) {
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
