import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { SectionHeading } from "../../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../misc/Buttons.js";
import Link from "next/link";
import { Wrapper, Container } from "../../misc/Layouts.js";

const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-24`;
//Heading
const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const HeadingTitle = tw(
  SectionHeading
)`xl:text-left leading-tight text-secondary-dark`;
const Controls = tw.div`flex items-center`;
const ControlButton = tw.button`mt-4 sm:mt-0 first:ml-0 ml-6 px-3 py-2 font-bold rounded-full bg-secondary-dark 
text-gray-100 hocus:bg-primary-dark hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
//Slider
const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center px-6 mb-1`}
  }
`;
//Slider Image
const CardImage = styled.div`
  ${({ imageSrc }) => `
background-image: url("${imageSrc}");
`};
  ${tw`h-64 bg-cover bg-center rounded-t-lg`}
`;

//Slider Content
const Card = tw.div`min-w-full min-h-full max-h-full`;
// const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardText = tw.div`mt-4 font-primary`;
const CardHeader = tw.div`flex justify-between items-center min-h-10`;
const CardType = tw.div`text-secondary-dark font-bold text-lg font-primary`;
const CardPrice = tw.div`font-semibold text-gray-600 font-primary text-decoration text-decoration-underline text-decoration-wavy underline-offset-medium`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-sm`;
const CardTitle = tw.h5`text-xl mt-4 font-bold text-gray-800 min-h-16 min-w-64 font-secondary`;

const CardMeta = styled.div`
  ${tw`flex flex-col
  font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
`;
const CardMetaFeatureText = styled.span`
  ${tw`ml-2`}
`;
const CardAction = tw(
  PrimaryButtonBase
)`w-full mt-8 bg-secondary-dark rounded-lg`;

export default function Tours({ homepage, items, tours }) {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper css={[tw`px-8 overflow-hidden`]} id="tours">
      <Container>
        <Content>
          <HeadingWithControl>
            <HeadingTitle>{homepage.tours.toursHeading}</HeadingTitle>
            <Controls>
              <ControlButton onClick={sliderRef?.slickPrev}>
                <Image
                  css={[tw`rotate-90`]}
                  src={items.chevronDownIconWhite.sourceUrl}
                  alt={items.chevronDownIconWhite.altText}
                  width={16}
                  height={16}
                />
              </ControlButton>
              <ControlButton onClick={sliderRef?.slickNext}>
                <Image
                  css={[tw`-rotate-90`]}
                  src={items.chevronDownIconWhite.sourceUrl}
                  alt={items.chevronDownIconWhite.altText}
                  width={16}
                  height={16}
                />
              </ControlButton>
            </Controls>
          </HeadingWithControl>

          <CardSlider ref={setSliderRef} {...sliderSettings}>
            {tours.map((tour, index) => (
              <Card key={index}>
                <CardImage imageSrc={tour.node.featuredImage.node.sourceUrl} />
                <CardText>
                  <CardHeader>
                    <CardType>{tour.node.tourPreview.typePreview}</CardType>
                    <CardPrice>
                      <CardPriceAmount>
                        {tour.node.tourPreview.pricePreview}
                      </CardPriceAmount>
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{tour.node.tourPreview.titlePreview}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <Image
                        src={items.locationIcon.sourceUrl}
                        alt={items.locationIcon.altText}
                        width={14}
                        height={14}
                      />{" "}
                      <CardMetaFeatureText>
                        {tour.node.tourPreview.locationPreview}
                      </CardMetaFeatureText>
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Image
                        src={items.durationIcon.sourceUrl}
                        alt={items.durationIcon.altText}
                        width={14}
                        height={14}
                      />{" "}
                      <CardMetaFeatureText>
                        {tour.node.tourPreview.durationPreview}
                      </CardMetaFeatureText>
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Image
                        src={items.seasonIcon.sourceUrl}
                        alt={items.seasonIcon.altText}
                        width={14}
                        height={14}
                      />{" "}
                      <CardMetaFeatureText>
                        {tour.node.tourPreview.seasonPreview}
                      </CardMetaFeatureText>
                    </CardMetaFeature>
                  </CardMeta>
                  <Link href={`/tours/${tour.node.slug}`}>
                    <CardAction>{homepage.tours.toursCta}</CardAction>
                  </Link>
                </CardText>
              </Card>
            ))}
          </CardSlider>
        </Content>
      </Container>
    </Wrapper>
  );
}
