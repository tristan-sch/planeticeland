import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import errorPageStaticImage from "../../public/errorPage.png";
import planetIcelandLogo from "../../public/planet-iceland-logo.png";
import { getIconsAndLogos, getHomepage, getErrorPage } from "../lib/api";

const Wrapper = tw.div`min-h-full p-8 overflow-hidden`;
const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;

const NavWrapper = tw.div`flex max-w-screen-xl mx-auto`;
const DesktopNavLinksWrapper = tw.nav`sm:flex flex-1`;
const BrandWrapper = tw.div`flex font-black border-b-0 text-2xl! ml-0! mr-6 pb-0 cursor-pointer`;

const RightColumn = tw.div`bg-primary-dark bg-cover bg-center xl:ml-24 h-96 lg:h-screen lg:w-1/2 lg:flex-1`;
const HeroContainer = tw.div`relative h-full w-full`;

const Content = tw.div`mt-16 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`font-primary text-secondary-dark text-3xl sm:text-5xl md:text-6xl lg:text-5xl text-center lg:text-left font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose text-center lg:text-left `;

const ActionsWrapper = tw.div`mb-8 lg:mb-0`;
const Action = tw.button`text-center inline-block w-full sm:w-48 py-3 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`;
const PrimaryAction = tw(
  Action
)`bg-primary-dark text-gray-100 hover:bg-secondary-dark font-secondary text-xl`;

const HighlightedText = tw.span`text-primary-dark font-secondary`;

export default function ErrorPage({ items, homepage, errorPage }) {
  return (
    <Wrapper>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <NavWrapper>
              <DesktopNavLinksWrapper>
                <Link href="/" aria-label="aria label">
                  <BrandWrapper>
                    <Image
                      src={
                        items
                          ? items.planetIcelandLogo.sourceUrl
                          : planetIcelandLogo
                      }
                      alt={
                        items
                          ? items.planetIcelandLogo.altText
                          : "Planet Iceland Logo"
                      }
                      width={133}
                      height={53}
                    />
                  </BrandWrapper>
                </Link>
              </DesktopNavLinksWrapper>
            </NavWrapper>
            <Content>
              <Heading>
                {errorPage ? errorPage.errorPage.heading : "404"}
                <br />
                <HighlightedText>
                  {errorPage ? errorPage.errorPage.subheading : "Are you lost?"}
                </HighlightedText>
              </Heading>
              <Paragraph>
                {errorPage
                  ? errorPage.errorPage.description
                  : "Oops! This page doesn't exist, Please go back on the homepage."}
              </Paragraph>
              <ActionsWrapper>
                <PrimaryAction>
                  <Link
                    href={errorPage ? errorPage.errorPage.buttonLink : "/"}
                    passHref
                  >
                    <a>
                      {errorPage ? errorPage.errorPage.button : "Go back home"}
                    </a>
                  </Link>
                </PrimaryAction>
              </ActionsWrapper>
            </Content>
          </LeftColumn>
          <RightColumn>
            <HeroContainer>
              <Image
                src={
                  homepage
                    ? homepage.header.heroImg.sourceUrl
                    : errorPageStaticImage
                }
                alt={
                  homepage
                    ? homepage.header.heroImg.altText
                    : "Image of Iceland"
                }
                layout="fill"
                objectFit="cover"
                priority="true"
              />
            </HeroContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const items = await getIconsAndLogos();
  const homepage = await getHomepage();
  const errorPage = await getErrorPage();

  return {
    props: {
      items,
      homepage,
      errorPage,
    },
    revalidate: 10,
  };
}
