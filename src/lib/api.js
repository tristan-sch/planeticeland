const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query) {
  const headers = { "Content-Type": "application/json" };

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

export async function getHeader() {
  const data = await fetchAPI(
    `
    query header {
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
      }
    }
    `
  );

  const header = data?.page.header;

  return {
    header,
  };
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

export async function getTeam() {
  const data = await fetchAPI(
    `
    query team {
      page(id: "/homepage", idType: URI) {
        team {
          teamHeading
          teamDescription
        }
      }
    }
    `
  );

  return data?.page.team;
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

export async function getContact() {
  const data = await fetchAPI(
    `
    query contact {
      page(id: "/homepage", idType: URI) {
        contact {
          contactHeading
          contactDescription
          emailPicto {
            id
            mediaItemUrl
          }
          phonePicto {
            id
            mediaItemUrl
          }
          adressPicto {
            id
            mediaItemUrl
          }
          email
          emailUrl
          phone
          phoneUrl
          adress
          adressUrl
          logo1 {
            sourceUrl
            altText
            description
          }
          logo1Link
            logo2 {
            sourceUrl
            altText
            description
          }
          logo2Link
          usefulLinks {
            usefulLink1
            usefulLink1Link
            usefulLink2
            usefulLink2Link
            usefulLink3
            usefulLink3Link
            usefulLink4
            usefulLink4Link
          }
        }
      }
    }
    `
  );

  const contact = data?.page.contact;

  return {
    contact,
  };
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

export async function getFooter() {
  const data = await fetchAPI(
    `
    query footer {
      page(id: "/homepage", idType: URI) {
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

  return data?.page.footer;
}

export async function sendMail(subject, body, mutationId = "contact") {
  const fromAddress = "schmale.tristan@gmail.com";
  const toAddress = "tristan_55@gmail.com";
  const data = await fetchAPI(
    `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    }
  );

  return data?.sendEmail;
}
