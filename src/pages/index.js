import Head from "next/head";
import Header from "../components/Header/header";
import Guarantees from "../components/guarantees";
import Tours from "../components/Tours/tours";
import Team from "../components/team";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";

import {
  getSettings,
  getIconsAndLogos,
  getHeader,
  getMenus,
  getGuarantees,
  getTeam,
  getStaff,
  getFaq,
  getQuestions,
  getFooterLinks,
  getFooter,
} from "../lib/api";

const Home = ({
  settings,
  items,
  header,
  menus,
  guarantees,
  team,
  staff,
  faq,
  questions,
  footerlinks,
  footer,
}) => {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href={items.favicon.sourceUrl} />
      </Head>
      <Header settings={settings} items={items} header={header} menus={menus} />
      <Guarantees guarantees={guarantees} />
      <Tours header={header} items={items} />
      <Team items={items} team={team} staff={staff} />
      <Faq items={items} faq={faq} questions={questions} />
      <Contact />
      <Footer
        items={items}
        menus={menus}
        footerlinks={footerlinks}
        footer={footer}
      />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const settings = await getSettings();
  const items = await getIconsAndLogos();
  const header = await getHeader();
  const menus = await getMenus();
  const guarantees = await getGuarantees();
  const team = await getTeam();
  const staff = await getStaff();
  const faq = await getFaq();
  const questions = await getQuestions();
  const footerlinks = await getFooterLinks();
  const footer = await getFooter();

  return {
    props: {
      settings,
      items,
      header,
      menus,
      guarantees,
      team,
      staff,
      faq,
      questions,
      footerlinks,
      footer,
    },
    revalidate: 10,
  };
}
