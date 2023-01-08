import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { Wrapper, Container } from "../misc/Layouts.js";

const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const ColumnWithLogos = tw.div`hidden sm:block md:w-1/5 -mt-4`;
const ColumnImage = tw.div`flex-row`;
const WideColumn = tw(
  Column
)`text-center sm:text-left w-full md:w-2/5 mb-10 md:mb-0`;
const LinksColumn = tw(Column)`hidden sm:block`;

const ColumnHeading = tw.h5`font-bold font-secondary`;

const LinkList = tw.ul`mt-4 text-sm font-medium font-primary`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`hocus:text-primary-dark pb-1 transition duration-300 hocus:text-decoration hocus:text-decoration-underline hocus:text-decoration-wavy hocus:underline-offset-small`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;

const CompanyDescription = tw.p`font-primary my-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`flex flex-col items-center justify-center sm:flex-row sm:justify-start`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block my-4 rounded-full text-gray-100 transition duration-300 mr-4`}
`;
const SocialLinkSpan = tw.span`font-secondary text-xs ml-2 text-gray-800`;

export default function Footer({ items, menus, footerlinks, homepage }) {
  return (
    <Wrapper css={[tw`bg-gray-200`]}>
      <Container
        css={[tw`bg-gray-200 -mb-8 px-8 py-0 2xl:max-w-screen-2xl 2xl:mx-auto`]}
      >
        <FiveColumns>
          <WideColumn>
            <LogoContainer>
              <Link href={items.planetIcelandLogo.imageLink.imageLink}>
                <Image
                  src={items.planetIcelandLogo.sourceUrl}
                  alt={items.planetIcelandLogo.altText}
                  width={133}
                  height={53}
                />{" "}
              </Link>
            </LogoContainer>
            <CompanyDescription>
              <Link href={homepage.footer.phoneLink}>
                {homepage.footer.phone}
              </Link>
              <br />
              <Link href={homepage.footer.emailLink}>
                {homepage.footer.email}
              </Link>
              <br />
              <Link
                href={homepage.footer.adressLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {homepage.footer.adress}
              </Link>
            </CompanyDescription>
            <SocialLinksContainer>
              <div>
                <SocialLink
                  href={homepage.footer.footerIcon1.imageLink.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={homepage.footer.footerIcon1.sourceUrl}
                    alt={homepage.footer.footerIcon1.altText}
                    width={24}
                    height={24}
                  />
                </SocialLink>
                <SocialLink
                  href={homepage.footer.footerIcon2.imageLink.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={homepage.footer.footerIcon2.sourceUrl}
                    alt={homepage.footer.footerIcon2.altText}
                    width={24}
                    height={24}
                  />
                </SocialLink>
              </div>
              <div>
                <SocialLink
                  href={homepage.footer.footerIcon3.imageLink.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={homepage.footer.footerIcon3.sourceUrl}
                    alt={homepage.footer.footerIcon3.altText}
                    width={24}
                    height={24}
                  />
                  <SocialLinkSpan>
                    {homepage.footer.footerCaption}
                  </SocialLinkSpan>
                </SocialLink>
              </div>
            </SocialLinksContainer>
          </WideColumn>
          <LinksColumn>
            <ColumnHeading>Menu</ColumnHeading>
            {menus.nodes.map((menu, i) => (
              <LinkList key={i}>
                {menu.menuItems.edges.map(({ node }) => (
                  <div key={node.id}>
                    <LinkListItem>
                      <Link href={node.path} passHref>
                        {node.label}
                      </Link>
                    </LinkListItem>
                  </div>
                ))}
              </LinkList>
            ))}
          </LinksColumn>

          <LinksColumn>
            <ColumnHeading>Useful Links</ColumnHeading>
            {footerlinks.map((footerlink, i) => (
              <LinkList key={i}>
                <LinkListItem>
                  <Link
                    href={footerlink.node.footerLinkUrl.footerLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {footerlink.node.title}
                  </Link>
                </LinkListItem>
              </LinkList>
            ))}
          </LinksColumn>
          <ColumnWithLogos>
            <ColumnImage>
              <Link
                href={items.footerLogo1.imageLink.imageLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={items.footerLogo1.sourceUrl}
                  alt={items.footerLogo1.altText}
                  width={100}
                  height={100}
                />{" "}
              </Link>
            </ColumnImage>
            <ColumnImage>
              <Link
                href={items.footerLogo2.imageLink.imageLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={items.footerLogo2.sourceUrl}
                  alt={items.footerLogo2.altText}
                  width={100}
                  height={100}
                />
              </Link>
            </ColumnImage>
          </ColumnWithLogos>
        </FiveColumns>
      </Container>
    </Wrapper>
  );
}
