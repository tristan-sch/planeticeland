import React from "react";
import tw from "twin.macro";
import { Wrapper, Container } from "../../../misc/Layouts.js";
import Link from "next/link";

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-secondary-dark rounded-lg relative`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.div`text-gray-100 text-xl sm:text-2xl font-medium font-secondary`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

const Links = tw.span`w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 mt-4 first:mt-0 sm:mt-0 sm:mr-8 sm:last:mr-0 rounded-lg font-bold border border-transparent tracking-wide transition duration-300 focus:outline-none focus:shadow-outline`;
const PrimaryLink = tw(
  Links
)`bg-gray-100 text-secondary-dark shadow-lg hocus:bg-secondary-dark hocus:text-gray-100 hover:border-gray-100`;

const SecondaryLink = tw(
  Links
)`text-gray-100 border-gray-500 hover:bg-gray-100 hover:text-secondary-dark hover:border-secondary-dark`;

export default function SeeMoreTours({
  homepage,
  errorPage,
  singleTourFooterMenu,
}) {
  console.log(homepage.tours.moreToursBanner);
  return (
    <Wrapper css={[tw`mb-20`]}>
      <Container>
        <PrimaryBackgroundContainer>
          <Row>
            <TextContainer>
              <Text>{homepage.tours.moreToursBanner}</Text>
            </TextContainer>
            <LinksContainer>
              <PrimaryLink>
                <Link
                  href={singleTourFooterMenu.menuItems.nodes[0].url}
                  passHref
                >
                  <a>{singleTourFooterMenu.menuItems.nodes[0].label}</a>
                </Link>
              </PrimaryLink>
              <SecondaryLink>
                <Link
                  href={errorPage ? errorPage.errorPage.buttonLink : "/"}
                  passHref
                >
                  <a>{errorPage ? errorPage.errorPage.button : "Homepage"}</a>
                </Link>
              </SecondaryLink>
            </LinksContainer>
          </Row>
        </PrimaryBackgroundContainer>
      </Container>
    </Wrapper>
  );
}
