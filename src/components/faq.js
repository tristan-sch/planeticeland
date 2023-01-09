import React, { useState } from "react";
import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { SectionHeading } from "../misc/Headings.js";
import { Container, Wrapper } from "../misc/Layouts.js";

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const ImageWrapper = tw.div`relative shadow hidden lg:block rounded h-144 bg-center`;
const FAQContent = tw.div`lg:ml-12`;
const Heading = tw(SectionHeading)`lg:text-left text-secondary-dark`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-6 lg:pr-24 text-gray-800 font-primary`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none bg-gray-200 lg:bg-transparent px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-normal font-secondary`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-secondary-dark text-gray-100 px-3 py-2 rounded-full group-hover:bg-primary-dark group-hover:text-gray-200 transition duration-300`}
`;
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed font-primary pr-24`
);

export default function Faq({ items, faq, questions }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Wrapper id="faq">
      <Container>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <ImageWrapper>
              <Image
                src={faq.faq.faqImage.sourceUrl}
                alt={faq.faq.faqImage.altText}
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </Column>
          <Column>
            <FAQContent>
              <Heading>{faq.faq.faqHeading}</Heading>
              <Description>{faq.faq.faqDescription}</Description>
              <FAQSContainer>
                {questions.map((question, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{question.node.title}</QuestionText>
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
                            css={[tw``]}
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
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" },
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
                          __html: question.node.content,
                        }}
                      />
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Container>
    </Wrapper>
  );
}
