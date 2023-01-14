import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { SectionHeading } from "../../../misc/Headings";
import { SectionDescription } from "../../../misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "../../../misc/Buttons";
import { Container, Wrapper } from "../../../misc/Layouts";
import Link from "next/link";

const SingleTourPricingContainer = tw.div`w-full flex flex-col items-center flex justify-center items-center`;

const Heading = tw(SectionHeading)`w-full text-secondary-dark`;
const Description = tw(SectionDescription)`w-full text-center font-primary`;

const PlanDurationSwitcher = tw.div`block text-center w-full max-w-xl sm:inline-block sm:w-auto  border-2 rounded-full px-1 py-1 mt-8`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300`}
  ${(props) => props.active && tw`bg-secondary-dark text-gray-100`}
`;

const PriceBoxesContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative rounded-t-lg`;
const PriceBoxe = tw.div`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`;

const PlanHeader = tw.div`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-200 rounded-t-lg`;
const PriceHeaderName = tw.span`font-bold text-xl font-primary`;
const PriceHeaderPrice = tw.span`font-bold text-2xl sm:text-3xl my-1 font-primary text-secondary-dark`;
const PriceHeaderSlash = tw.span`text-lg text-gray-500 font-secondary mx-2`;
const PriceHeaderSlashText = tw.span`lowercase text-gray-500 font-medium tracking-widest font-primary`;
const PlanHeaderMainFeature = tw.span`text-gray-500 text-sm font-medium tracking-wide font-primary`;

const PriceFeatures = tw.div`flex flex-col -mx-8 px-8 py-8 flex-1 text-base font-primary leading-loose`;
const SinglePriceFeature = tw.span`mt-5 first:mt-0 font-semibold text-gray-500`;

const PriceBoxeAction = tw.div`px-4 pb-8`;
const BuyNowButton = tw(
  PrimaryButtonBase
)`bg-secondary-dark hover:bg-primary-dark rounded-lg tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`;

export default function SingleTourPricing({
  homepage,
  tour,
  priceBoxes = null,
  filters = [
    {
      switcherText: tour.tourGeneral.pricing.pricingFilters.pricingFilter1
        .pricingFilterLabel1
        ? tour.tourGeneral.pricing.pricingFilters.pricingFilter1
            .pricingFilterLabel1
        : null,
    },
    {
      switcherText: tour.tourGeneral.pricing.pricingFilters.pricingFilter2
        .pricingFilterLabel2
        ? tour.tourGeneral.pricing.pricingFilters.pricingFilter2
            .pricingFilterLabel2
        : null,
    },
    {
      switcherText: tour.tourGeneral.pricing.pricingFilters.pricingFilter3
        .pricingFilterLabel3
        ? tour.tourGeneral.pricing.pricingFilters.pricingFilter3
            .pricingFilterLabel3
        : null,
    },
  ],
}) {
  const defaultPriceBoxes = [
    {
      title: tour.tourGeneral.pricing.pricingBoxes.pricingBox1.pricingTitle,
      prices: [
        tour.tourGeneral.pricing.pricingFilters.pricingFilter1.price1,
        tour.tourGeneral.pricing.pricingFilters.pricingFilter2.price1,
        tour.tourGeneral.pricing.pricingFilters.pricingFilter3.price1,
      ],
      features:
        tour.tourGeneral.pricing.pricingBoxes.pricingBox1.pricingContent,
    },
    {
      title: tour.tourGeneral.pricing.pricingBoxes.pricingBox2.pricingTitle,
      prices: [
        tour.tourGeneral.pricing.pricingFilters.pricingFilter1.price2,
        tour.tourGeneral.pricing.pricingFilters.pricingFilter2.price2,
        tour.tourGeneral.pricing.pricingFilters.pricingFilter3.price2,
      ],
      features:
        tour.tourGeneral.pricing.pricingBoxes.pricingBox2.pricingContent,
    },
  ];

  if (!priceBoxes) priceBoxes = defaultPriceBoxes;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Wrapper css={[tw`bg-gray-100 mb-16`]}>
      <Container id="pricing">
        <SingleTourPricingContainer>
          <Heading>
            {homepage.tours.pricingTitle
              ? homepage.tours.pricingTitle
              : "Pricing"}
          </Heading>
          {tour.tourGeneral.pricing.pricingDescription && (
            <Description>
              {tour.tourGeneral.pricing.pricingDescription}
            </Description>
          )}
          {filters.filter((e) => e.switcherText !== null) && (
            <PlanDurationSwitcher>
              {filters
                .filter((e) => e.switcherText !== null)
                .map((filter, index) => (
                  <SwitchButton
                    active={activeDurationIndex === index}
                    key={index}
                    onClick={() => setActiveDurationIndex(index)}
                  >
                    {filter.switcherText}
                  </SwitchButton>
                ))}
            </PlanDurationSwitcher>
          )}
        </SingleTourPricingContainer>
        <PriceBoxesContainer>
          {priceBoxes.map((price, index) => (
            <PriceBoxe
              key={index}
              css={[tw`border-2 border-gray-200 shadow-none`]}
            >
              <PlanHeader>
                <span className="priceAndDuration">
                  <PriceHeaderPrice>
                    {price.prices[activeDurationIndex]}
                  </PriceHeaderPrice>
                  <PriceHeaderSlash>
                    {homepage.tours.toursSeparator}
                  </PriceHeaderSlash>
                  <PriceHeaderSlashText>
                    {homepage.tours.toursLabelAfterPriceSlash}
                  </PriceHeaderSlashText>
                </span>
                <PriceHeaderName>{price.title}</PriceHeaderName>
                <PlanHeaderMainFeature>
                  {filters[activeDurationIndex].switcherText}
                </PlanHeaderMainFeature>
              </PlanHeader>
              <PriceFeatures>
                <SinglePriceFeature
                  dangerouslySetInnerHTML={{
                    __html: price.features,
                  }}
                />
              </PriceFeatures>
              <PriceBoxeAction>
                <Link
                  href={`${homepage.footer.emailLink}?subject=Quote request for ${tour.title}&body=${homepage.tours.toursEmailTemplateQuoteRequest}`}
                >
                  <BuyNowButton>{homepage.tours.toursQuoteCta}</BuyNowButton>
                </Link>
              </PriceBoxeAction>
            </PriceBoxe>
          ))}
        </PriceBoxesContainer>
      </Container>
    </Wrapper>
  );
}
