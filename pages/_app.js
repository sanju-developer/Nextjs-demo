import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"
import {appWithTranslation} from '../i18n'
import store from "../redux/store"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} />
  </Provider>
}

const makeStore = () => store;
MyApp.getInitialProps = async ({Component,ctx}) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
}
  return { pageProps }
}


export default withRedux(makeStore)(appWithTranslation(MyApp));
