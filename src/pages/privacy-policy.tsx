import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  FooterTypes,
  HeaderTypes,
  PrivacyPolicyTypes,
  SettingsTypes,
} from "types/queryTypes";
import { sanitizeAllHtmlContent } from "utils/utils";
import { getFooter, getHeader, getPrivacyPolicy, getSettings } from "./api/api";
import { useIsMounted } from "hooks/useIsMounted";
import { Link } from "components/NextLink";
import { SectionContainer } from "components/SectionContainer";
import { SectionHeader } from "components/SectionHeader";
import Footer from "sections/Footer";

type Props = {
  settings: SettingsTypes;
  header: HeaderTypes;
  privacyPolicy: PrivacyPolicyTypes;
  footer: FooterTypes;
};

const PrivacyPolicy: NextPage<Props> = ({
  settings,
  header,
  privacyPolicy,
  footer,
}) => {
  const isMounted = useIsMounted();

  return (
    <>
      <Head>
        <title>{`Privacy Policy - ${settings.title}`}</title>
        <link rel="icon" href={header.images.favicon.node.sourceUrl} />
        <meta name="description" content="Privacy Policy" />
      </Head>

      <div className="font-oswald pt-10">
        {/* Header */}
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center md:justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{settings.title}</span>
              {header.images.logo.node.sourceUrl && (
                <Image
                  src={header.images.logo.node.sourceUrl}
                  alt={header.images.logo.node.altText}
                  width={133}
                  height={94}
                />
              )}
            </Link>
            <div className="hidden items-center gap-x-8 md:flex">
              <Link
                href={header.buttons.primaryButton.url}
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
              >
                {header.buttons.primaryButton.title}
              </Link>
            </div>
          </div>
        </div>

        <main>
          <SectionContainer id={privacyPolicy.title} bgGray>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <SectionHeader
                  headingId={privacyPolicy.title}
                  currentMenuLabel={settings.title}
                  headingText={privacyPolicy.title}
                />

                {isMounted && (
                  <div
                    className="specific-section prose prose-gray mt-4 text-sm/6 text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeAllHtmlContent(privacyPolicy.content),
                    }}
                  />
                )}
              </div>
            </div>
          </SectionContainer>
        </main>
        <Footer footer={footer} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const [settings, header, privacyPolicy, footer] = await Promise.all([
    getSettings(),
    getHeader(),
    getPrivacyPolicy(),
    getFooter(),
  ]);

  return {
    props: {
      settings,
      header,
      privacyPolicy,
      footer,
    },
    revalidate: 10,
  };
}
export default PrivacyPolicy;
