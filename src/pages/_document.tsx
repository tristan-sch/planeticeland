import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

/**
 * @class MyDocument
 * Custom Document component
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */

class MyDocument extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    /** Uncomment to force usintg prod CSS styles locally and have the same experiance as on dev/test/staging  */
    // setStyleServerUrl(HANNA_STYLES_URL_PROD);

    const { html, head } = await renderPage();

    return { html, head };
  }

  /**
   * render Page with the definition of the surrounding document's markup
   * @returns {JSX} Element
   */

  render(): JSX.Element {
    return (
      <Html
        className="h-full bg-white antialiased [font-feature-settings:'ss01']"
        lang="en"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex h-full flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
