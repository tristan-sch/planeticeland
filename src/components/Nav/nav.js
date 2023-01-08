import React from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobileNav";

const NavWrapper = tw.div`flex max-w-screen-xl mx-auto`;
const DesktopNavLinksWrapper = tw.nav`sm:flex flex-1 justify-around items-center`;
const DesktopNavLinksItemWrapper = tw.div`flex`;
const BrandWrapper = tw.div`flex items-center font-black border-b-0 text-2xl! ml-0! mr-6 pb-0`;
const DesktopNavLinks = tw.div`hidden sm:inline-block`;
const NavLink = tw.span`
text-xl my-2 lg:text-base lg:mx-6 lg:my-0 sm:text-sm sm:mx-6 pb-1 
font-normal tracking-wide transition duration-300
text-secondary-dark
hocus:text-primary-dark cursor-pointer font-secondary
hover:text-decoration hover:text-decoration-underline hover:text-decoration-wavy hover:underline-offset-large
`;

export default function Nav({ menus, items }) {
  return (
    <NavWrapper>
      <DesktopNavLinksWrapper>
        <Link href="#" aria-label="aria label">
          <BrandWrapper>
            <Image
              src={items.planetIcelandLogo.sourceUrl}
              alt={items.planetIcelandLogo.altText}
              width={133}
              height={53}
            />
          </BrandWrapper>
        </Link>

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

      <MobileNav menus={menus} items={items} />
    </NavWrapper>
  );
}
