import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import SingleTourHeader from "../../components/Tours/SingleTour/singleTourHeader";
import SingleTourItinerary from "../../components/Tours/SingleTour/singleTourItinerary";
import SingleTourPricing from "../../components/Tours/SingleTour/singleTourPricing";
import WhyUs from "../../components/Tours/SingleTour/whyUs";
import SeeMoreTours from "../../components/Tours/SingleTour/seeMoreTours";

import {
  getTours,
  getSingleTour,
  getSingleTourFooterMenu,
  getSettings,
  getIconsAndLogos,
  getHomepage,
  getSingleTourMenu,
  getFooterLinks,
  getFaq,
  getQuestions,
  getServices,
  getErrorPage,
} from "../../lib/api";

const Tour = ({
  tour,
  settings,
  items,
  singleTourMenu,
  singleTourFooterMenu,
  footerlinks,
  homepage,
  faq,
  questions,
  services,
  errorPage,
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
          singleTourFooterMenu={singleTourFooterMenu}
          footerlinks={footerlinks}
          homepage={homepage}
        >
          <SingleTourHeader
            settings={settings}
            items={items}
            homepage={homepage}
            singleTourMenu={singleTourMenu}
            tour={tour}
          />
          <SingleTourItinerary
            items={items}
            faq={faq}
            questions={questions}
            homepage={homepage}
            tour={tour}
          />
          <SingleTourPricing homepage={homepage} tour={tour} />
          <WhyUs services={services} homepage={homepage} />
          <SeeMoreTours
            homepage={homepage}
            errorPage={errorPage}
            singleTourFooterMenu={singleTourFooterMenu}
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
  const singleTourMenu = await getSingleTourMenu();
  const singleTourFooterMenu = await getSingleTourFooterMenu();
  const footerlinks = await getFooterLinks();
  const faq = await getFaq();
  const questions = await getQuestions();
  const services = await getServices();
  const errorPage = await getErrorPage();
  return {
    props: {
      tour: data.tour,
      settings,
      items,
      homepage,
      singleTourMenu,
      singleTourFooterMenu,
      footerlinks,
      faq,
      questions,
      services,
      errorPage,
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
