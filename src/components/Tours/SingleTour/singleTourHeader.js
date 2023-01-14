import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { Wrapper, Container } from "../../../misc/Layouts.js";
import { SectionHeading } from "../../../misc/Headings";
import { PrimaryButton } from "../../../misc/Buttons";
import SingleTourNav from "./singleTourNav";
// import "slick-carousel/slick/slick.css";

const SingleTourHeaderContainer = tw.div`mt-8 lg:mt-0`;
const SingleTour = tw.div`max-w-xl lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TourPicturesSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;

const ImageAndControlContainer = tw.div`relative outline-none`;
const TourImage = styled.div`
  ${({ imageSrc }) => `
background-image: url("${imageSrc}");
`};
  ${tw`rounded-t-lg bg-cover bg-center h-80 sm:h-96 lg:h-144`}
`;

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 px-3 py-2 bg-secondary-dark hover:bg-primary-dark`}
`;

const TextContainer = tw.div`flex flex-col w-full lg:w-7/12 lg:pl-12 lg:order-last`;

const HeadingTitleMobile = tw(
  SectionHeading
)`sm:hidden text-3xl sm:text-4xl xl:text-left leading-tight text-secondary-dark`;
const HeadingTitle = tw(
  SectionHeading
)`hidden mt-4 lg:mt-0 sm:block text-3xl sm:text-4xl xl:text-left leading-tight text-secondary-dark`;
const Paragraph = tw.div`max-w-lg text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-loose text-sm sm:text-base lg:text-lg mt-8 font-primary`;

const CardMetaWrapper = styled.div`
  ${tw`hidden lg:flex`}
`;
const CardMeta = styled.div`
  ${tw`flex py-8 pr-16 flex-col justify-around font-semibold tracking-wide text-secondary-dark uppercase font-normal text-base font-secondary`}
`;
const CardMetaFeature = styled.div`
  ${tw`flex py-1 items-center mt-4`}
`;
const CardMetaFeatureText = styled.span`
  ${tw`ml-2`}
`;

const ActionsWrapper = tw.div`relative mt-8 `;
const Action = tw.button` text-center lg:text-left inline-block w-full py-3 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`;
const SecondaryAction = tw(
  Action
)`mt-4 sm:mt-0 sm:ml-4 text-secondary-dark font-secondary hover:text-decoration hover:text-decoration-underline hover:text-decoration-wavy hover:underline-offset-large`;
const SecondaryActionText = tw.span`text-2xl mr-4`;

export default function SingleTourHeader({
  homepage,
  tour,
  singleTourMenu,
  items,
  tourPictures = null,
  textOnLeft = false,
}) {
  const defaultTourPictures = [
    {
      imageSrc: tour.tourGeneral.tourPictures.tourPicture1
        ? null
        : tour.featuredImage.node.sourceUrl,
    },
    {
      imageSrc: tour.tourGeneral.tourPictures.tourPicture1
        ? tour.tourGeneral.tourPictures.tourPicture1.sourceUrl
        : null,
    },
    {
      imageSrc: tour.tourGeneral.tourPictures.tourPicture2
        ? tour.tourGeneral.tourPictures.tourPicture2.sourceUrl
        : null,
    },
    {
      imageSrc: tour.tourGeneral.tourPictures.tourPicture3
        ? tour.tourGeneral.tourPictures.tourPicture3.sourceUrl
        : null,
    },
    {
      imageSrc: tour.tourGeneral.tourPictures.tourPicture4
        ? tour.tourGeneral.tourPictures.tourPicture4.sourceUrl
        : null,
    },
    {
      imageSrc: tour.tourGeneral.tourPictures.tourPicture5
        ? tour.tourGeneral.tourPictures.tourPicture5.sourceUrl
        : null,
    },
  ];

  if (!tourPictures || tourPictures.length === 0)
    tourPictures = defaultTourPictures;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);

  return (
    <Wrapper>
      <Container css={[tw`p-8`]}>
        <SingleTourNav
          singleTourMenu={singleTourMenu}
          items={items}
          tour={tour}
        />
        <HeadingTitleMobile>{tour.title}</HeadingTitleMobile>
        <SingleTourHeaderContainer>
          <SingleTour>
            <TourPicturesSlider
              arrows={false}
              ref={setImageSliderRef}
              fade={true}
            >
              {tourPictures
                .filter((e) => e.imageSrc !== null)
                .map((tourPicture, index) => (
                  <ImageAndControlContainer key={index}>
                    <TourImage imageSrc={tourPicture.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <Image
                          css={[tw`rotate-90`]}
                          src={items.chevronDownIconWhite.sourceUrl}
                          alt={items.chevronDownIconWhite.altText}
                          width={12}
                          height={12}
                        />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <Image
                          css={[tw`-rotate-90`]}
                          src={items.chevronDownIconWhite.sourceUrl}
                          alt={items.chevronDownIconWhite.altText}
                          width={12}
                          height={12}
                        />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
            </TourPicturesSlider>
            <TextContainer textOnLeft={textOnLeft}>
              <HeadingTitle>{tour.title}</HeadingTitle>
              <Paragraph
                dangerouslySetInnerHTML={{
                  __html: tour.content,
                }}
              />
              <CardMetaWrapper>
                <CardMeta>
                  <CardMetaFeature>
                    <Image
                      src={items.carIcon.sourceUrl}
                      alt={items.carIcon.altText}
                      width={14}
                      height={14}
                    />
                    <CardMetaFeatureText>
                      {tour.tourPreview.typePreview}
                    </CardMetaFeatureText>
                  </CardMetaFeature>
                  <CardMetaFeature>
                    <Image
                      src={items.durationIcon.sourceUrl}
                      alt={items.durationIcon.altText}
                      width={14}
                      height={14}
                    />
                    <CardMetaFeatureText>
                      {tour.tourPreview.durationPreview}
                    </CardMetaFeatureText>
                  </CardMetaFeature>
                </CardMeta>
                <CardMeta>
                  <CardMetaFeature>
                    <Image
                      src={items.locationIcon.sourceUrl}
                      alt={items.locationIcon.altText}
                      width={14}
                      height={14}
                    />
                    <CardMetaFeatureText>
                      {tour.tourPreview.locationPreview}
                    </CardMetaFeatureText>
                  </CardMetaFeature>
                  <CardMetaFeature>
                    <Image
                      src={items.seasonIcon.sourceUrl}
                      alt={items.seasonIcon.altText}
                      width={14}
                      height={14}
                    />
                    <CardMetaFeatureText>
                      {tour.tourPreview.seasonPreview}
                    </CardMetaFeatureText>
                  </CardMetaFeature>
                </CardMeta>
                <CardMeta>
                  <CardMetaFeature>
                    <Image
                      src={items.priceIcon.sourceUrl}
                      alt={items.priceIcon.altText}
                      width={14}
                      height={14}
                    />
                    <CardMetaFeatureText>
                      {tour.tourPreview.pricePreview}
                    </CardMetaFeatureText>
                  </CardMetaFeature>
                </CardMeta>
              </CardMetaWrapper>
              <ActionsWrapper>
                <SecondaryAction>
                  <Link
                    href={
                      homepage.tours.toursCtaLink
                        ? homepage.tours.toursCtaLink
                        : "/"
                    }
                    passHref
                  >
                    <SecondaryActionText>
                      <a>{homepage.tours.toursCta}</a>
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
            </TextContainer>
          </SingleTour>
        </SingleTourHeaderContainer>
      </Container>
    </Wrapper>
  );
}
