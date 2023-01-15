import { GlobalStyles } from "twin.macro";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
