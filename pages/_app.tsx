import "../styles/common/index.scss";
import { AppProps } from "next/app";
import "uno.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
