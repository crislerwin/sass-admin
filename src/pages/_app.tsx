import "../styles/scss/bootstrap.scss";
import "../styles/main.sass";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
