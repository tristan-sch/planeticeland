import React from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import SingleTourMobileNav from "./singleTourMobileNav";

const NavWrapper = tw.div`flex max-w-screen-xl mx-auto pt-8 pb-16`;
const DesktopNavLinksWrapper = tw.nav`sm:flex flex-1 justify-between items-center`;
const DesktopNavLinksItemWrapper = tw.div`flex`;
const BrandWrapper = tw.div`flex items-center border-b-0 text-2xl! ml-0! mr-6 pb-0`;
const Title = tw.div`hidden ml-6 h-6 text-base lg:block text-secondary-dark font-secondary`;
const HomeIcon = tw.div`hidden sm:block ml-6 cursor-pointer`;
const DesktopNavLinks = tw.div`hidden sm:inline-block`;
const NavLink = tw.span`
text-xl my-2 lg:text-base lg:mx-6 lg:my-0 sm:text-sm sm:mx-6 pb-1 
font-normal tracking-wide transition duration-300
text-secondary-dark
hocus:text-secondary-dark cursor-pointer font-secondary
hover:text-decoration hover:text-decoration-underline hover:text-decoration-wavy hover:underline-offset-large
`;

export default function Nav({ menus, items, tour }) {
  return (
    <NavWrapper>
      <DesktopNavLinksWrapper>
        <BrandWrapper>
          <Link href="/">
            <Image
              css={[tw`cursor-pointer`]}
              src={items.planetIcelandLogo.sourceUrl}
              alt={items.planetIcelandLogo.altText}
              width={133}
              height={53}
            />
          </Link>
          <Link href="/">
            <HomeIcon>
              <Image
                src={items.homeIcon.sourceUrl}
                alt={items.homeIcon.altText}
                width={20}
                height={20}
              />
            </HomeIcon>
          </Link>
          <Title>{tour.title}</Title>
        </BrandWrapper>

        {menus.nodes.map((menu, i) => (
          <DesktopNavLinksItemWrapper key={i}>
            {menu.menuItems.edges.map(({ node }) => (
              <div key={node.id}>
                <DesktopNavLinks>
                  <Link href={node.path} passHref>
                    <NavLink>{node.label}</NavLink>
                  </Link>
                </DesktopNavLinks>
              </div>
            ))}
          </DesktopNavLinksItemWrapper>
        ))}
      </DesktopNavLinksWrapper>

      <SingleTourMobileNav menus={menus} items={items} />
    </NavWrapper>
  );
}
