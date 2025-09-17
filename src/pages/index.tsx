import { useState } from 'react'
import Head from 'next/head'
import { About } from 'sections/About'
import { Contact } from 'sections/Contact'
import { Faq } from 'sections/Faq'
import { Footer } from 'sections/Footer'
import { Header } from 'sections/Header'
import { Hero } from 'sections/Hero'
import { Sustainability } from 'sections/Sustainability/Sustainability'
import Team from 'sections/Team'

import Banner from 'components/Banner'

import {
  AboutTypes,
  BannerTypes,
  ContactTypes,
  FaqTypes,
  FooterTypes,
  HeaderTypes,
  MenusTypes,
  SettingsTypes,
  SustainabilityTypes,
  TeamTypes,
} from 'types/queryTypes'

import {
  getAbout,
  getBanner,
  getContact,
  getFaq,
  getFooter,
  getHeader,
  getMenus,
  getSettings,
  getSustainability,
  getTeam,
} from './api/api'

type Props = {
  settings: SettingsTypes
  menus: MenusTypes
  header: HeaderTypes
  about: AboutTypes
  team: TeamTypes
  sustainability: SustainabilityTypes
  faq: FaqTypes
  contact: ContactTypes
  banner: BannerTypes
  footer: FooterTypes
}

export default function Home({
  settings,
  menus,
  header,
  about,
  team,
  sustainability,
  faq,
  contact,
  banner,
  footer,
}: Props) {
  const [isBanner, setIsBanner] = useState(true)
  const isBannerActivated = banner.activate

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <link rel="icon" href={header.images.favicon.node.sourceUrl} />
        <meta name="description" content={settings.description} />
      </Head>
      {isBannerActivated && isBanner && (
        <Banner closeBanner={() => setIsBanner(false)} banner={banner} />
      )}
      <Header
        settings={settings}
        menus={menus}
        isBanner={isBanner}
        header={header}
        contact={contact}
      />
      <main>
        <Hero settings={settings} header={header} />
        <About menus={menus} about={about} />
        <Team team={team} menus={menus} />
        <Sustainability menus={menus} sustainability={sustainability} />
        <Faq menus={menus} faq={faq} />
        <Contact menus={menus} contact={contact} />
      </main>
      <Footer footer={footer} />
    </>
  )
}

export async function getStaticProps() {
  const [
    menus,
    settings,
    header,
    about,
    team,
    sustainability,
    contact,
    faq,
    banner,
    footer,
  ] = await Promise.all([
    getMenus(),
    getSettings(),
    getHeader(),
    getAbout(),
    getTeam(),
    getSustainability(),
    getContact(),
    getFaq(),
    getBanner(),
    getFooter(),
  ])

  return {
    props: {
      menus,
      settings,
      header,
      about,
      team,
      sustainability,
      contact,
      faq,
      banner,
      footer,
    },
    revalidate: 10,
  }
}
