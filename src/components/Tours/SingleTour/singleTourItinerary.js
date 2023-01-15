import React, { useState } from "react";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { SectionHeading, SectionSubheading } from "../../../misc/Headings.js";
import { Container, Wrapper } from "../../../misc/Layouts.js";
import Link from "next/link";

const TwoColumn = tw.div`flex justify-center items-end`;
const Column = tw.div``;
const IframeWrapper = tw.div`relative hidden lg:block rounded bg-center`;
const ItineraryContent = tw.div`lg:mr-24`;
const Heading = tw(SectionHeading)`lg:text-left text-secondary-dark`;
const Subheading = tw(
  SectionSubheading
)`text-center lg:text-left hover:text-decoration hover:text-decoration-underline hover:text-decoration-wavy hover:underline-offset-medium cursor-pointer`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-6 lg:pr-24 text-gray-800 font-primary`;
const DaysContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none px-8 py-2 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-start`;
const QuestionText = tw.span`text-lg lg:text-xl font-normal font-secondary`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-secondary-dark text-gray-100 px-3 py-2 rounded-full group-hover:bg-primary-dark group-hover:text-gray-200 transition duration-300`}
`;
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed font-primary pr-24`
);

export default function SingleTourItinerary({
  items,
  faq,
  dayTours = null,
  homepage,
  tour,
}) {
  const defaultDayTours = [
    {
      tourDay: tour.tourGeneral.tourDays.tourDay1
        ? tour.tourGeneral.tourDays.tourDay1
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay1Content
        ? tour.tourGeneral.tourDays.tourDay1Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay2
        ? tour.tourGeneral.tourDays.tourDay2
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay2Content
        ? tour.tourGeneral.tourDays.tourDay2Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay3
        ? tour.tourGeneral.tourDays.tourDay3
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay3Content
        ? tour.tourGeneral.tourDays.tourDay3Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay4
        ? tour.tourGeneral.tourDays.tourDay4
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay4Content
        ? tour.tourGeneral.tourDays.tourDay4Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay5
        ? tour.tourGeneral.tourDays.tourDay5
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay5Content
        ? tour.tourGeneral.tourDays.tourDay5Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay6
        ? tour.tourGeneral.tourDays.tourDay6
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay6Content
        ? tour.tourGeneral.tourDays.tourDay6Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay7
        ? tour.tourGeneral.tourDays.tourDay7
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay7Content
        ? tour.tourGeneral.tourDays.tourDay7Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay8
        ? tour.tourGeneral.tourDays.tourDay8
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay8Content
        ? tour.tourGeneral.tourDays.tourDay8Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay9
        ? tour.tourGeneral.tourDays.tourDay9
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay9Content
        ? tour.tourGeneral.tourDays.tourDay9Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay10
        ? tour.tourGeneral.tourDays.tourDay10
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay10Content
        ? tour.tourGeneral.tourDays.tourDay10Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay11
        ? tour.tourGeneral.tourDays.tourDay11
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay11Content
        ? tour.tourGeneral.tourDays.tourDay11Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay12
        ? tour.tourGeneral.tourDays.tourDay12
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay12Content
        ? tour.tourGeneral.tourDays.tourDay12Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay13
        ? tour.tourGeneral.tourDays.tourDay13
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay13Content
        ? tour.tourGeneral.tourDays.tourDay13Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay14
        ? tour.tourGeneral.tourDays.tourDay14
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay14Content
        ? tour.tourGeneral.tourDays.tourDay14Content
        : null,
    },
    {
      tourDay: tour.tourGeneral.tourDays.tourDay15
        ? tour.tourGeneral.tourDays.tourDay15
        : null,
      tourDayContent: tour.tourGeneral.tourDays.tourDay15Content
        ? tour.tourGeneral.tourDays.tourDay15Content
        : null,
    },
  ];
  if (!dayTours || dayTours.length === 0) dayTours = defaultDayTours;
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Wrapper id="itinerary">
      <Container>
        <TwoColumn>
          <Column>
            <ItineraryContent>
              <Heading>{homepage.tours.itineraryTitle}</Heading>
              {/* //Hydration Isssue??*/}
              {tour.tourGeneral.googleMaps.googleMapsLink && (
                <Link
                  href={tour.tourGeneral.googleMaps.googleMapsLink}
                  passHref
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <Subheading>
                      <Image
                        src={items.locationIcon.sourceUrl}
                        alt={items.locationIcon.altText}
                        width={24}
                        height={24}
                      />{" "}
                      {homepage.tours.itinerarySubtitle
                        ? homepage.tours.itinerarySubtitle
                        : "Itinerary"}
                    </Subheading>
                  </a>
                </Link>
              )}
              <Description>{faq.faq.faqDescription}</Description>
              <DaysContainer>
                {dayTours
                  .filter((e) => e.tourDay !== null)
                  .map((dayTour, index) => (
                    <FAQ
                      key={index}
                      onClick={() => {
                        toggleQuestion(index);
                      }}
                      className="group"
                    >
                      <Question>
                        <QuestionText>{dayTour.tourDay}</QuestionText>
                        <QuestionToggleIcon>
                          {activeQuestionIndex === index ? (
                            <Image
                              css={[tw`rotate-180`]}
                              src={items.chevronDownIconWhite.sourceUrl}
                              alt={items.chevronDownIconWhite.altText}
                              width={12}
                              height={12}
                            />
                          ) : (
                            <Image
                              src={items.chevronDownIconWhite.sourceUrl}
                              alt={items.chevronDownIconWhite.altText}
                              width={12}
                              height={12}
                            />
                          )}
                        </QuestionToggleIcon>
                      </Question>
                      <Answer
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                            marginTop: "16px",
                          },
                          collapsed: {
                            opacity: 0,
                            height: 0,
                            marginTop: "0px",
                          },
                        }}
                        initial="collapsed"
                        animate={
                          activeQuestionIndex === index ? "open" : "collapsed"
                        }
                        transition={{
                          duration: 0.3,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: dayTour.tourDayContent,
                          }}
                        />
                      </Answer>
                    </FAQ>
                  ))}
              </DaysContainer>
            </ItineraryContent>
          </Column>{" "}
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <IframeWrapper>
              {tour.tourGeneral.googleMaps.googleMapsIframe ? (
                <iframe
                  css={[tw`rounded border-0`]}
                  src={tour.tourGeneral.googleMaps.googleMapsIframe}
                  width="400"
                  height="434"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <Image
                  src={tour.featuredImage.node.sourceUrl}
                  alt={tour.featuredImage.node.altText}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </IframeWrapper>
          </Column>
        </TwoColumn>
      </Container>
    </Wrapper>
  );
}
