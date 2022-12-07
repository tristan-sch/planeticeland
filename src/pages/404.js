import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/404.png";

const Container = tw.div`relative -mt-8 bg-center bg-cover h-screen min-h-144`;
const PrimaryAction = tw.button`rounded-lg px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-secondary-dark text-gray-100 hocus:bg-primary-dark hocus:text-gray-200 focus:outline-none focus:shadow-outline`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 md:-mt-20 flex flex-1 flex-col justify-center items-center`;
const Heading = tw.h1`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 leading-snug  -mt-24 sm:mt-0 font-primary`;

const FourOhFour = () => {
  return (
    <Container>
      <Image
        alt="alt Text"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        priority="true"
      />
      <HeroContainer>
        <Content>
          <Heading>
            404
            <br />
            Are you lost?
          </Heading>

          <PrimaryAction>
            <Link href="/#" passHref>
              <a>Go back home</a>
            </Link>
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};

export default FourOhFour;
