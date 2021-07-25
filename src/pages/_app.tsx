import "../styles/scss/bootstrap.scss";
import "../styles/main.sass";
import { SideProvider } from "../contexts/SideBarContext";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SideProvider>
      <Component {...pageProps} />
    </SideProvider>
  );
}

export default MyApp;
