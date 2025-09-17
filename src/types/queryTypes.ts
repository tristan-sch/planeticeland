import {
  SustainabilityActionsTypes,
  SustainabilityBannerTypes,
  SustainabilityContentTypes,
} from 'fragments/sustainabilityFields'

import { Content, Image, Link, MediaItemType } from './sharedTypes'

// ---------------------------------------------------------------------------

export type SettingsTypes = {
  title: string
  description: string
  url: string
}

// ---------------------------------------------------------------------------

type MenuItem = {
  id: string
  label: string
  parentId: string
  path: string
}

export type Menu = {
  id: string
  databaseId: number
  name: string
  menuItems: {
    edges: Array<{
      node: MenuItem
    }>
  }
}

// ---------------------------------------------------------------------------

export type MenusTypes = {
  nodes: Array<Menu>
}

// ---------------------------------------------------------------------------

export type PrivacyPolicyTypes = {
  title: string
  content: string
}

// ---------------------------------------------------------------------------

export type BannerTypes = {
  activate: boolean
  link: string
} & Content

// ---------------------------------------------------------------------------

export type HeaderTypes = {
  images: {
    logo: Image
    heroImage: Image
    favicon: Image
  }
  teaser: {
    activate: boolean
    teaser: string
    teaserButton: Link
  }
  buttons: {
    primaryButton: Link
    secondaryButton: Link
  }
} & Content

// ---------------------------------------------------------------------------

type Service = Content

// ---------------------------------------------------------------------------

export type AboutTypes = {
  services: Array<Service>
  image: Image
} & Content

type Staff = {
  name: string
  department: string
  picture: {
    node: MediaItemType
  }
}

// ---------------------------------------------------------------------------

export type TeamTypes = {
  staff: Array<Staff>
} & Content

// ---------------------------------------------------------------------------

export type SustainabilityTypes = {
  slug: string
  sustainabilityContent: SustainabilityContentTypes
  sustainabilityActions: SustainabilityActionsTypes
  sustainabilityBannerNew: SustainabilityBannerTypes
}

// ---------------------------------------------------------------------------

type Question = Content

export type FaqTypes = {
  questions: Array<Question>
} & Content

export type ContactTypes = {
  contactUs: Array<{
    heading: string
    textblock: string
    link: Link
  }>
} & Content

// ---------------------------------------------------------------------------

export type FooterTypes = {
  footerLinks: Array<{
    link: Link
  }>
  logo: Image
  partnerLogos: Array<{
    partnerLogo: Image
  }>
} & Content
