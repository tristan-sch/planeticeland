import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { SectionHeading } from "../../misc/Headings.js";
import DurationIcon from "../../../public/clock.svg";
import SeasonIcon from "../../../public/sun.svg";
import LocationIcon from "../../../public/map.svg";
import { PrimaryButton as PrimaryButtonBase } from "../../misc/Buttons.js";

//**CSS**
const Wrapper = tw.div`min-h-screen px-8 overflow-hidden`;
const Container = tw.div`relative`;
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
  ${tw`h-64 bg-cover bg-center rounded`}
`;

//Slider Content
const Card = tw.div`min-w-full min-h-full max-h-full`;
// const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardText = tw.div`mt-4 font-primary`;
const CardHeader = tw.div`flex justify-between items-center min-h-10`;
const CardType = tw.div`text-secondary-dark font-bold text-lg font-primary`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600 font-primary text-decoration text-decoration-underline text-decoration-wavy underline-offset-medium`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;
const CardTitle = tw.h5`text-xl mt-4 font-bold text-gray-800 min-h-16 sm:min-w-68 font-secondary`;

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
const CardAction = tw(PrimaryButtonBase)`w-full mt-8 bg-secondary-dark `;

const Tours = ({
  header,
  items,
  cards = [
    {
      imageSrc: `${header.header.heroImg.sourceUrl}`,
      title: "The wonders of Iceland",
      description:
        "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "South Coast",
      pricingText: "3.000€",
      duration: "5 days",
      season: "summer",
      type: "Self-drive-tour",
    },
    {
      imageSrc: `${header.header.heroImg.sourceUrl}`,
      title: "The wonders of Iceland The wonders of Iceland",
      description:
        "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Golden Circle",
      pricingText: "3.000€",
      duration: "5 days",
      season: "summer",
      type: "Self-drive-tour",
    },
    {
      imageSrc: `${header.header.heroImg.sourceUrl}`,
      title: "The wonders of Iceland",
      description:
        "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Westfjords",
      pricingText: "3.000€",
      duration: "5 days",
      season: "summer",
      type: "Self-drive-tour",
    },
    {
      imageSrc: `${header.header.heroImg.sourceUrl}`,
      title: "The wonders of Iceland The wonders of Iceland",
      description:
        "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Westfjords",
      pricingText: "3.000€",
      duration: "5 days",
      season: "summer",
      type: "Self-drive-tour",
    },
    {
      imageSrc: `${header.header.heroImg.sourceUrl}`,
      title: "The wonders of Iceland The wonders of Iceland",
      description:
        "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Westfjords",
      pricingText: "3.000€",
      duration: "5 days",
      season: "summer",
      type: "Self-drive-tour",
    },
  ],
}) => {
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
    <Wrapper>
      <Container>
        <Content>
          <HeadingWithControl>
            <HeadingTitle>Our Tours</HeadingTitle>
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
            {cards.map((card, index) => (
              <Card key={index}>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricingText}</CardPriceAmount>
                    </CardPrice>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <Image
                        src={LocationIcon}
                        alt="Map-pin icon"
                        width={14}
                        height={14}
                      />{" "}
                      <CardMetaFeatureText>
                        {card.locationText}
                      </CardMetaFeatureText>
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Image
                        src={DurationIcon}
                        alt="Clock icon"
                        width={14}
                        height={14}
                      />{" "}
                      <CardMetaFeatureText>{card.duration}</CardMetaFeatureText>
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Image
                        src={SeasonIcon}
                        alt="Season icon"
                        width={14}
                        height={14}
                      />{" "}
                      <CardMetaFeatureText>{card.season}</CardMetaFeatureText>
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>Book Now</CardAction>
                </CardText>
              </Card>
            ))}
          </CardSlider>
        </Content>
      </Container>
    </Wrapper>
  );
};
export default Tours;
