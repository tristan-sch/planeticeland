import Head from "next/head";
import Footer from "./footer";

export default function Layout({
  children,
  mainMenu,
  singleTourFooterMenu,
  settings,
  items,
  footerlinks,
  homepage,
}) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href={items.favicon.sourceUrl} />
      </Head>
      <div>
        <main>{children}</main>
      </div>
      <Footer
        mainMenu={mainMenu}
        singleTourFooterMenu={singleTourFooterMenu}
        items={items}
        footerlinks={footerlinks}
        homepage={homepage}
      />
    </>
  );
}
