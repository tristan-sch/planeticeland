import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import { Container, Wrapper } from "../misc/Layouts.js";

const ThreeColumnContainer = tw.div`mt-10 flex flex-col items-center justify-center sm:items-stretch sm:flex-row flex-wrap max-w-screen-lg mx-auto`;
const Column = tw.div`lg:w-1/3 max-w-xs`;
const Card = tw.a`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`;
const ImageContainer = tw.span`text-center rounded-full p-4 bg-gray-100`;
const Title = tw.span`mt-4 font-semibold text-xl leading-none font-secondary text-secondary-dark`;
const SubDescription = tw.div`mt-4 text-base font-medium font-primary`;
const DescriptionLink = tw.div`mt-auto inline-flex items-center pt-5 text-sm font-bold text-secondary-dark leading-none hocus:text-primary-dark transition duration-300  text-decoration text-decoration-underline text-decoration-wavy underline-offset-medium`;

export default function Guarantees({ guarantees }) {
  return (
    <Wrapper id="guarantees">
      <Container css={[tw`sm:py-8`]}>
        <ThreeColumnContainer>
          {guarantees.map((guarantee, i) => (
            <Column key={i}>
              <Card>
                <ImageContainer>
                  <Image
                    src={guarantee.node.guarantees.icon.mediaItemUrl}
                    alt={guarantee.node.guarantees.icon.altText}
                    width={24}
                    height={24}
                  />
                </ImageContainer>
                <Title>{guarantee.node.title}</Title>
                <SubDescription
                  dangerouslySetInnerHTML={{ __html: guarantee.node.content }}
                ></SubDescription>
                <Link href={guarantee.node.guarantees.ctaLink} passHref>
                  <DescriptionLink
                    dangerouslySetInnerHTML={{
                      __html: guarantee.node.guarantees.cta,
                    }}
                  ></DescriptionLink>
                </Link>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </Container>
    </Wrapper>
  );
}
