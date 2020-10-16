import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"

import store from "../redux/store"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} />
  </Provider>
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
