import '../styles/globals.css';
import '../styles/login.css';
import 'antd/dist/antd.css';
import 'react-chat-elements/dist/main.css';
import type { AppProps } from 'next/app';
import { store } from '../shared/redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
