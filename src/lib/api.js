const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
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

export async function getIconsAndLogos() {
  const data = await fetchAPI(
    `
    query items {
      page(id: "/icons-and-logos", idType: URI) {
        items {
          hamburgerIcon {
            altText
            sourceUrl
          }
          hamburgerIconGreen {
            altText
            sourceUrl
          }
          closeIcon {
            altText
            sourceUrl
          }
          doubleChevronDownIcon {
            altText
            sourceUrl
          }
          chevronDownIcon {
            altText
            sourceUrl
          }
          durationIcon {
            altText
            sourceUrl
          }
          seasonIcon {
            altText
            sourceUrl
          }
          locationIcon {
            altText
            sourceUrl
          }
          homeIcon {
            altText
            sourceUrl
          }
          priceIcon {
            altText
            sourceUrl
          }
          carIcon {
            altText
            sourceUrl
          }
          chevronDownIconWhite {
            altText
            sourceUrl
          }
          planetIcelandLogo {
            sourceUrl
            altText
            imageLink {
              imageLink
            }
          }
          planetIcelandLogoWhite {
            sourceUrl
            altText
          }
          favicon {
            sourceUrl
          }
          footerLogo1 {
            sourceUrl
            altText
            imageLink {
              imageLink
            }
          }
          footerLogo2 {
            sourceUrl
            altText
            imageLink {
              imageLink
            }
          }
        }
      }
    }    
    `
  );

  return data?.page.items;
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

export async function getMainMenu() {
  const data = await fetchAPI(
    `
    query mainMenu {
      menu(id: "Main", idType: NAME) {
        id
        name
        slug
        menuItems {
          nodes {
            id
            url
            description
            label
          }
        }
      }
    }
    `
  );

  return data?.menu;
}

export async function getSingleTourMenu() {
  const data = await fetchAPI(
    `
    query singleTourMenu {
      menu(id: "Single Tour", idType: NAME) {
        id
        name
        slug
        menuItems {
          nodes {
            id
            url
            description
            label
          }
        }
      }
    }
    `
  );

  return data?.menu;
}

export async function getSingleTourFooterMenu() {
  const data = await fetchAPI(
    `
    query singleTourFooterMenu {
      menu(id: "Footer Menu Single Tour", idType: NAME) {
        id
        name
        slug
        menuItems {
          nodes {
            id
            url
            description
            label
          }
        }
      }
    }
    `
  );

  return data?.menu;
}

export async function getHomepage() {
  const data = await fetchAPI(
    `
    query homepage {
      page(id: "/homepage", idType: URI) {
        header {
          headerButton1
          headerButtonLink1
          headerButton2
          headerButtonLink2
          description
          heroImg {
            sourceUrl
            altText
          }
        }
        team {
          teamHeading
          teamDescription
        }
        tours {
          toursHeading
          toursCta
          toursCtaLink
          itineraryTitle
          itinerarySubtitle
          pricingTitle
          toursQuoteCta
          toursSeparator
          toursLabelAfterPriceSlash
          toursEmailTemplateQuoteRequest
          whyUsTitle
          whyUsDescription
          moreToursBanner
        }
        contact {
          contactHeading
          nameLabel
          namePlaceholder
          emailLabel
          emailPlaceholder
          messageLabel
          messagePlaceholder
          submitLabel
          emaijsSuccessAlert
          emaijsErrorAlert
        }
        footer {
          email
          emailLink
          phone
          phoneLink
          adress
          adressLink
          footerIcon1 {
            altText
            sourceUrl
            imageLink {
              imageLink
            }
          }
          footerIcon2 {
            altText
            sourceUrl
            imageLink {
              imageLink
            }
          }
          footerIcon3 {
            altText
            sourceUrl
            imageLink {
              imageLink
            }
          }
          footerCaption
        }
      }
    }
    `
  );

  return data?.page;
}

export async function getGuarantees() {
  const data = await fetchAPI(
    `
    query guarantees {
      guarantees {
        edges {
          node {
            id
            title
            content
            guarantees {
              icon {
                id
                mediaItemUrl
              }
              cta
              ctaLink
            }
          }
        }
      }
    }
    `
  );

  return data?.guarantees.edges;
}

export async function getTours() {
  const data = await fetchAPI(
    `
    query tours {
      tours(first: 100) {
        edges {
          node {
            slug
            modified
            id
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
            tourPreview {
              titlePreview
              pricePreview
              typePreview
              locationPreview
              durationPreview
              seasonPreview
            }
          }
        }
      }
    }
    `
  );

  return data?.tours.edges;
}

export async function getSingleTour(slug) {
  const data = await fetchAPI(
    `
    query singleTour($id: ID!) {
      tour(id: $id, idType: SLUG) {
        title
        slug
        date
        tourPreview {
          titlePreview
          pricePreview
          typePreview
          locationPreview
          durationPreview
          seasonPreview
        }
        tourGeneral {
          googleMaps {
            googleMapsIframe
            googleMapsLink
          }
          tourPictures {
            tourPicture1 {
              sourceUrl
              altText
            }
             tourPicture2 {
              sourceUrl
              altText
            }
            tourPicture3 {
              sourceUrl
              altText
            }
            tourPicture4 {
              sourceUrl
              altText
            }
            tourPicture5 {
              sourceUrl
              altText
            }
          }
          tourDays {
            tourDay1
            tourDay1Content
            tourDay2
            tourDay2Content
            tourDay3
            tourDay3Content
            tourDay4
            tourDay4Content
            tourDay5
            tourDay5Content
            tourDay6
            tourDay6Content
            tourDay7
            tourDay7Content
            tourDay8
            tourDay8Content
            tourDay9
            tourDay9Content
            tourDay10
            tourDay10Content
            tourDay11
            tourDay11Content
            tourDay12
            tourDay12Content
            tourDay13
            tourDay13Content
            tourDay14
            tourDay14Content
            tourDay15
            tourDay15Content
          }
          pricing {
            pricingDescription
            pricingFilters {
              pricingFilter1 {
                pricingFilterLabel1
                price1
                price2
              }
              pricingFilter2 {
                pricingFilterLabel2
                price1
                price2
              }
              pricingFilter3 {
                pricingFilterLabel3
                price1
                price2
              }
            }
            pricingBoxes {
              pricingBox1 {
                pricingTitle
                pricingContent
              }
              pricingBox2 {
                pricingTitle
                pricingContent
              }
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        } 
        content
      }
    }
  `,
    {
      variables: {
        id: slug,
      },
    }
  );
  return data;
}

export async function getStaff() {
  const data = await fetchAPI(
    `
    query staff {
      staff( first: 100 ) {
        edges {
          node {
            modified
            id
            title
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            content
          }
        }
      }
    }
    `
  );

  return data?.staff.edges;
}

export async function getFaq() {
  const data = await fetchAPI(
    `
    query faq {
      page(id: "/homepage", idType: URI) {
        faq {
          faqHeading
          faqDescription
          faqImage {
            sourceUrl
            altText
          }
        }
      }
    }
    `
  );

  const faq = data?.page.faq;

  return {
    faq,
  };
}

export async function getQuestions() {
  const data = await fetchAPI(
    `
    query questions {
      questions {
        edges {
          node {
            modified
            id
            title
            content
          }
        }
      }
    }
    `
  );

  return data?.questions.edges;
}

export async function getFooterLinks() {
  const data = await fetchAPI(
    `
    query footerlinks {
      footerlinks {
        edges {
          node {
            id
            title
            content
            footerLinkUrl {
              footerLinkUrl
            }
          }
        }
      }
    }
    `
  );

  return data?.footerlinks.edges;
}

export async function getErrorPage() {
  const data = await fetchAPI(
    `
    query errorPage {
      page(id: "/error", idType: URI) {
        errorPage {
          heading
          subheading
          description
          button
          buttonLink
          image {
            sourceUrl
            altText
          }
        }
      }
    }
    `
  );

  const errorPage = data?.page.errorPage;

  return {
    errorPage,
  };
}

export async function getServices() {
  const data = await fetchAPI(
    `
    query services {
      services {
        edges {
          node {
            id
            title
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
    `
  );

  return data?.services.edges;
}
