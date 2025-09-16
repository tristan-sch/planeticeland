import {
  SUSTAINABILITY_ACTIONS_FIELDS,
  SUSTAINABILITY_BANNER_FIELDS,
  SUSTAINABILITY_CONTENT_FIELDS,
} from "fragments/sustainabilityFields";
import { fetchAPI } from "services/fetchAPI";
import {
  AboutTypes,
  BannerTypes,
  ContactTypes,
  FaqTypes,
  FooterTypes,
  HeaderTypes,
  MenusTypes,
  SettingsTypes,
  TeamTypes,
  SustainabilityTypes,
} from "types/queryTypes";

// ---------------------------------------------------------------------------

export const getSettings = async (): Promise<SettingsTypes> => {
  const data = await fetchAPI<{ generalSettings?: SettingsTypes }>(
    `
      query settings {
        generalSettings {
          title
          description
          url
        }
      }
    `
  );
  if (!data.generalSettings) {
    throw new Error("Settings not found");
  }
  return data.generalSettings;
};

// ---------------------------------------------------------------------------

export const getMenus = async (): Promise<MenusTypes> => {
  const data = await fetchAPI<{ menus?: MenusTypes }>(
    `
      query menus {
        menus {
          nodes {
            id
            databaseId
            name
            menuItems {
              edges {
                node {
                  id
                  label
                  parentId
                  path
                }
              }
            }
          }
        }
      }
    `
  );
  if (!data.menus) {
    throw new Error("Menus not found");
  }
  return data.menus;
};

// ---------------------------------------------------------------------------

export const getBanner = async (): Promise<BannerTypes> => {
  const data = await fetchAPI<{ page?: { banner: BannerTypes } }>(
    `
    query banner {
      page(id: "/banner", idType: URI) {
        banner {
          activate
          textblock
          textblockSecondary
          link
        }
      }
    }
    `
  );
  if (!data.page) {
    throw new Error("Banner not found");
  }
  return data.page.banner;
};

// ---------------------------------------------------------------------------

export const getHeader = async (): Promise<HeaderTypes> => {
  const data = await fetchAPI<{ page?: { header: HeaderTypes } }>(
    `
    query header {
      page(id: "/header", idType: URI) {
        header {
          images {
            logo {
              node {
                sourceUrl
                altText
              }
            }
            heroImage {
              node {
                sourceUrl
                altText
              }
            }
            favicon {
              node {
                sourceUrl
                altText
              }
            }
          }
          teaser {
            activate
            teaser
            teaserButton {
              url
              title
            }
          }
          heading
          textblock
          buttons {
            primaryButton {
              url
              title
            }
            secondaryButton {
              url
              title
            }
          }
        }
      }
    }
    `
  );

  if (!data.page) {
    throw new Error("Header not found");
  }

  return data.page.header;
};

// ---------------------------------------------------------------------------

export const getAbout = async (): Promise<AboutTypes> => {
  const data = await fetchAPI<{ page?: { about: AboutTypes } }>(
    `
    query about {
      page(id: "/about", idType: URI) {
        about {
          heading
          textblock
          textblockSecondary
          services {
            heading
            textblock
          }
          image {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
    `
  );
  if (!data.page) {
    throw new Error("About not found");
  }
  return data.page.about;
};

// ---------------------------------------------------------------------------

export const getTeam = async (): Promise<TeamTypes> => {
  const data = await fetchAPI<{ page?: { team: TeamTypes } }>(
    `
    query team {
      page(id: "/team", idType: URI) {
        team {
          heading
          textblock
          textblockSecondary
          staff {
            name
            department
            picture {
              node {
                id
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
    `
  );
  if (!data.page) {
    throw new Error("Team not found");
  }
  return data.page.team;
};

// ---------------------------------------------------------------------------

export const getSustainability = async (): Promise<SustainabilityTypes> => {
  const data = await fetchAPI<{ page?: SustainabilityTypes }>(
    `
    query sustainability {
    page(id: "/sustainability", idType: URI) {
      slug
      sustainabilityContent {
        ...sustainabilityContentFields
      }
      sustainabilityActions {
        ...sustainabilityActionsFields
      }
      sustainabilityBannerNew {
        ...sustainabilityBannerFields
      }
    }
  }
    ${SUSTAINABILITY_CONTENT_FIELDS}
    ${SUSTAINABILITY_ACTIONS_FIELDS}
    ${SUSTAINABILITY_BANNER_FIELDS}
    `
  );
  if (!data.page) {
    throw new Error("Sustainability not found");
  }
  return data.page;
};

// ---------------------------------------------------------------------------

export const getFaq = async (): Promise<FaqTypes> => {
  const data = await fetchAPI<{ page?: { faq: FaqTypes } }>(
    `
    query faq {
      page(id: "/faq", idType: URI) {
        faq {
          heading
          textblock
          textblockSecondary
          questions {
            heading
            textblock
          }
        }
      }
    }
    `
  );
  if (!data.page) {
    throw new Error("FAQ not found");
  }
  return data.page.faq;
};

// ---------------------------------------------------------------------------

export const getContact = async (): Promise<ContactTypes> => {
  const data = await fetchAPI<{ page?: { contact: ContactTypes } }>(
    `
    query contact {
      page(id: "/contact", idType: URI) {
        contact {
          heading
          textblock
          textblockSecondary
          contactUs {
            heading
            textblock
            link {
              title
              url
            }
          }
        }
      }
    }
    `
  );
  if (!data.page) {
    throw new Error("Contact not found");
  }

  return data.page.contact;
};

// ---------------------------------------------------------------------------

export const getFooter = async (): Promise<FooterTypes> => {
  const data = await fetchAPI<{ page?: { footer: FooterTypes } }>(
    `
    query footer {
      page(id: "/footer", idType: URI) {
        footer {
          textblock
          footerLinks {
            link {
              title
              url
            }
          }
          logo {
            node {
              sourceUrl
              altText
            }
          }
          partnerLogos {
            partnerLogo {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
                imageLink {
                  imageLink
                }
              }
            }
          }
        }
      }
    }
    `
  );
  if (!data.page) {
    throw new Error("Footer not found");
  }

  return data.page.footer;
};
