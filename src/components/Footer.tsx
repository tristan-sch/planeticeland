import Image from "next/image";
import { Container } from "./Containers";
import Link from "next/link";
import { FooterTypes } from "types/queryTypes";

type Props = {
  footer: FooterTypes;
};

export default function Footer({ footer }: Props) {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <Container>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div>
          <div className="mx-auto max-w-7xl overflow-hidden border-t border-gray-900/10 px-6 py-20 sm:py-24 lg:px-8">
            <nav
              className="-mb-6 columns-2 justify-center sm:flex sm:space-x-12"
              aria-label="Footer"
            >
              {footer.footerLinks.map((footerLink, i) => (
                <div key={i} className="pb-6 text-center">
                  <Link
                    href={footerLink.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-600 hover:text-cyan-700"
                  >
                    {footerLink.link.title}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="mt-10 flex items-center justify-center space-x-12">
              {footer.logo.node.sourceUrl && (
                <Link href="/">
                  <Image
                    src={footer.logo.node.sourceUrl}
                    alt={footer.logo.node.altText}
                    width={150}
                    height={100}
                    unoptimized={true}
                    loading="lazy"
                  />
                </Link>
              )}
              {footer.partnerLogos.map((partnerLogo, i) => (
                <div className="hidden sm:flex" key={i}>
                  <Link
                    href={
                      partnerLogo.partnerLogo?.node.imageLink?.imageLink ?? "/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={partnerLogo.partnerLogo?.node.sourceUrl}
                      alt={partnerLogo.partnerLogo?.node.altText}
                      className="logoFooter"
                      unoptimized={true}
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              {footer.textblock ?? ""}
            </p>
            {/* TODO: add query for Privacy Policy footer item */}
            <div className="mt-2 text-center">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-600 underline hover:text-secondary"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
