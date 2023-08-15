const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query: string) {
  const headers = { "Content-Type": "application/json" };

  if (API_URL) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
      }),
    });
    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json.data;
  } else {
    throw new Error("API_URL is missing");
  }
}

export async function getSettings() {
  const data = await fetchAPI(
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
  return data?.generalSettings;
}

export async function getMenus() {
  const data = await fetchAPI(
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
  return data?.menus;
}

export async function getBanner() {
  const data = await fetchAPI(
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
  return data?.page.banner;
}

export async function getHeader() {
  const data = await fetchAPI(
    `
    query header {
      page(id: "/header", idType: URI) {
        header {
          images {
            logo {
              sourceUrl
              altText
            }
            favicon {
              sourceUrl
              altText
            }
            heroImage {
              id
              sourceUrl
              altText
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
  return data?.page.header;
}

export async function getAbout() {
  const data = await fetchAPI(
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
            sourceUrl
            altText
          }
        }
      }
    }
    `
  );
  return data?.page.about;
}

export async function getTeam() {
  const data = await fetchAPI(
    `
    query team {
      page(id: "/team", idType: URI) {
        team {
          heading
          textblock
          textblockSecondary
          staff {
            name
            position
            department
            picture {
              id
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
    `
  );
  return data?.page.team;
}

export async function getSustainability() {
  const data = await fetchAPI(
    `
    query sustainability {
      page(id: "/sustainability", idType: URI) {
        sustainability {
          heading
          textblock
          textblockSecondary
          textblockTertiary
          image {
            sourceUrl
            altText
          }
          actionsGroup {
            heading
            textblock
            actions {
              actionsPoints {
                current
                actionsHeading
                actions {
                  heading
                  textblock
                }
              }
            }
          }
        }
      }
    }
    `
  );
  return data?.page.sustainability;
}

export async function getFaq() {
  const data = await fetchAPI(
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
  return data?.page.faq;
}

export async function getContact() {
  const data = await fetchAPI(
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

  return data?.page.contact;
}

export async function getFooter() {
  const data = await fetchAPI(
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
            sourceUrl
            altText
          }
          partnerLogos {
            partnerLogo {
              sourceUrl
              altText
              imageLink {
                imageLink
              }
            }
          }
        }
      }
    }
    `
  );
  return data?.page.footer;
}
