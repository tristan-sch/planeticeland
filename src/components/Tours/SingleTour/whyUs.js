import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import { SectionHeading } from "../../../misc/Headings.js";
import { SectionDescription } from "../../../misc/Typography.js";
import { Container, Wrapper } from "../../../misc/Layouts.js";

const ThreeColumnContainer = tw.div`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto md:py-2`;
const Heading = tw(SectionHeading)`w-full text-secondary-dark`;
const Description = tw(SectionDescription)`w-full text-center font-primary`;
const VerticalSpacer = tw.div`mt-10 w-full`;
const Column = tw.div`md:w-1/2 lg:w-1/3 max-w-sm`;
const Card = tw.div`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`;
const ImageContainer = tw.span`border border-gray-600 text-center rounded-full px-5 py-4 flex-shrink-0`;
const TextContainer = tw.span`sm:ml-4 mt-4 sm:mt-2`;
const Title = tw.span`mt-4 tracking-wide font-bold text-xl leading-none font-secondary text-secondary-dark`;
const SiteDescription = tw.div`mt-1 sm:mt-4 font-medium leading-loose font-primary`;

export default function WhyUs({ services, homepage }) {
  return (
    <Wrapper id="services">
      <Container css={[tw`py-0`]}>
        <ThreeColumnContainer>
          <Heading>{homepage.tours.whyUsTitle}</Heading>
          <Description>{homepage.tours.whyUsDescription}</Description>
          <VerticalSpacer />
          {services.map((service, i) => (
            <Column key={i}>
              <Card>
                <ImageContainer>
                  <Image
                    src={service.node.featuredImage.node.sourceUrl}
                    alt={service.node.featuredImage.node.altText}
                    width={24}
                    height={24}
                  />
                </ImageContainer>
                <TextContainer>
                  <Title>{service.node.title}</Title>
                  <SiteDescription
                    dangerouslySetInnerHTML={{ __html: service.node.content }}
                  ></SiteDescription>
                </TextContainer>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </Container>
    </Wrapper>
  );
}
