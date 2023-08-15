import { AppProps } from "next/app";
import "focus-visible";
import "styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
