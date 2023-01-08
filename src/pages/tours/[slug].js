import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import {
  getTours,
  getSingleTour,
  getSettings,
  getIconsAndLogos,
  getHomepage,
  getMenus,
  getFooterLinks,
} from "../../lib/api";

const Tour = ({ tour, settings, items, menus, footerlinks, homepage }) => {
  const router = useRouter();

  if (!router.isFallback && !tour?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      settings={settings}
      items={items}
      menus={menus}
      footerlinks={footerlinks}
      homepage={homepage}
    >
      <>{router.isFallback ? <div>Loading</div> : <div>{tour.title}</div>};</>
    </Layout>
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

  return {
    props: {
      tour: data.tour,
      settings,
      items,
      homepage,
      menus,
      footerlinks,
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
