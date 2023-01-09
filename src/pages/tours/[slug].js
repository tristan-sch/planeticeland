import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import SingleTourHeader from "../../components/Tours/SingleTour/singleTourHeader";
import SingleTourItinerary from "../../components/Tours/SingleTour/singleTourItinerary";

import {
  getTours,
  getSingleTour,
  getSettings,
  getIconsAndLogos,
  getHomepage,
  getMenus,
  getFooterLinks,
  getFaq,
  getQuestions,
} from "../../lib/api";

const Tour = ({
  tour,
  settings,
  items,
  menus,
  footerlinks,
  homepage,
  faq,
  questions,
}) => {
  const router = useRouter();

  if (!router.isFallback && !tour?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <Layout
          settings={settings}
          items={items}
          menus={menus}
          footerlinks={footerlinks}
          homepage={homepage}
        >
          <SingleTourHeader
            settings={settings}
            items={items}
            homepage={homepage}
            menus={menus}
            tour={tour}
          />
          <SingleTourItinerary
            items={items}
            faq={faq}
            questions={questions}
            homepage={homepage}
            tour={tour}
          />
        </Layout>
      )}
    </>
  );
};

export default Tour;

export const getStaticProps = async ({ params }) => {
  const data = await getSingleTour(params?.slug);
  const settings = await getSettings();
  const homepage = await getHomepage();
  const items = await getIconsAndLogos();
  const menus = await getMenus();
  const footerlinks = await getFooterLinks();
  const faq = await getFaq();
  const questions = await getQuestions();

  return {
    props: {
      tour: data.tour,
      settings,
      items,
      homepage,
      menus,
      footerlinks,
      faq,
      questions,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allTours = await getTours();

  return {
    paths: allTours.map(({ node }) => `/tours/${node.slug}`) || [],
    fallback: true,
  };
};
