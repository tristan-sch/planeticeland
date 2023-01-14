import Layout from "../components/layout";
import Header from "../components/header";
import Guarantees from "../components/guarantees";
import Tours from "../components/Tours/tours";
import Team from "../components/team";
import Faq from "../components/faq";
import Contact from "../components/contact";

import {
  getSettings,
  getIconsAndLogos,
  getHomepage,
  getMainMenu,
  getGuarantees,
  getTours,
  getStaff,
  getFaq,
  getQuestions,
  getFooterLinks,
} from "../lib/api";

export default function Home({
  settings,
  items,
  homepage,
  mainMenu,
  guarantees,
  tours,
  staff,
  faq,
  questions,
  footerlinks,
}) {
  return (
    <>
      <Layout
        settings={settings}
        items={items}
        mainMenu={mainMenu}
        footerlinks={footerlinks}
        homepage={homepage}
      >
        <Header
          settings={settings}
          items={items}
          homepage={homepage}
          mainMenu={mainMenu}
        />
        <Guarantees guarantees={guarantees} />
        <Tours items={items} tours={tours} homepage={homepage} />
        <Team items={items} homepage={homepage} staff={staff} />
        <Faq items={items} faq={faq} questions={questions} />
        <Contact homepage={homepage} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const settings = await getSettings();
  const homepage = await getHomepage();
  const items = await getIconsAndLogos();
  const mainMenu = await getMainMenu();
  const guarantees = await getGuarantees();
  const tours = await getTours();
  const staff = await getStaff();
  const faq = await getFaq();
  const questions = await getQuestions();
  const footerlinks = await getFooterLinks();

  return {
    props: {
      settings,
      items,
      homepage,
      mainMenu,
      guarantees,
      tours,
      staff,
      faq,
      questions,
      footerlinks,
    },
    revalidate: 10,
  };
}
