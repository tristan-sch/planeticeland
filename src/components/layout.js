import Head from "next/head";
import Footer from "./footer";
import Favicon from "../../public/favicon.png";

export default function Layout({
  children,
  settings,
  items,
  menus,
  footerlinks,
  homepage,
}) {
  return (
    <>
      <Head>
        <title>{settings ? settings.title : "Planet Iceland"}</title>
        <link rel="icon" href={items ? items.favicon.sourceUrl : Favicon} />
      </Head>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer
        items={items}
        menus={menus}
        footerlinks={footerlinks}
        homepage={homepage}
      />
    </>
  );
}
