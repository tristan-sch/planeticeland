import Footer from "./footer";

export default function Layout({
  children,
  items,
  menus,
  footerlinks,
  homepage,
}) {
  return (
    <>
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
