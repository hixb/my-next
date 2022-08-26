import "../styles/common/theme.scss";
import "../styles/common/clear.scss";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
