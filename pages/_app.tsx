import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SSRProvider } from "@react-aria/ssr";
//import { SsrFadeOut } from "react-reveal/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}
