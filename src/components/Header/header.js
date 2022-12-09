import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/nav";

const Wrapper = tw.div`min-h-full p-8 overflow-hidden`;
const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;

const RightColumn = tw.div`bg-primary-dark bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`;
const HeroContainer = tw.div`relative h-full w-full`;

const Content = tw.div`mt-16 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`font-primary text-secondary-dark text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const ActionsWrapper = tw.div`mb-8 lg:mb-0`;
const Action = tw.button`text-center inline-block w-full sm:w-48 py-3 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`;
const PrimaryAction = tw(
  Action
)`bg-primary-dark text-gray-100 hover:bg-secondary-dark font-secondary text-xl`;
const SecondaryAction = tw(
  Action
)`mt-4 sm:mt-0 sm:ml-4 text-secondary-dark font-secondary hover:text-decoration hover:text-decoration-underline hover:text-decoration-wavy hover:underline-offset-large`;

const SecondaryActionText = tw.span`text-xl mr-4`;
const HighlightedText = tw.span`text-primary-dark font-secondary`;

const Header = ({ settings, items, header, menus }) => {
  return (
    <Wrapper>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Nav menus={menus} items={items} />
            <Content>
              <Heading>
                {settings.title} <br />
                <HighlightedText>{settings.description} </HighlightedText>
              </Heading>
              <Paragraph>{header.header.description}</Paragraph>
              <ActionsWrapper>
                <PrimaryAction>
                  <Link href={header.header.headerButtonLink1} passHref>
                    <a>{header.header.headerButton1}</a>
                  </Link>
                </PrimaryAction>
                <SecondaryAction>
                  <Link href={header.header.headerButtonLink2} passHref>
                    <SecondaryActionText>
                      <a>{header.header.headerButton2}</a>
                    </SecondaryActionText>
                  </Link>
                  <Image
                    src={items.doubleChevronDownIcon.sourceUrl}
                    alt={items.doubleChevronDownIcon.altText}
                    width={14}
                    height={14}
                  />
                </SecondaryAction>
              </ActionsWrapper>
            </Content>
          </LeftColumn>
          <RightColumn>
            <HeroContainer>
              <Image
                src={header.header.heroImg.sourceUrl}
                alt={header.header.heroImg.altText}
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
};

export default Header;
