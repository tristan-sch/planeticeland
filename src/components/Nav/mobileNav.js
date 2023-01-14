import { useState } from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";

const MobileNavWrapper = tw.div`sm:hidden`;
const OpenButton = tw.button`ml-1 mr-1 h-8 w-8 rounded py-1`;
const CloseButtonWrapper = tw.div`flex justify-between`;
const CloseButton = tw.button`mr-10 mt-3 h-8 w-8 rounded py-6`;
const MobileLinksWrapper = tw.div`fixed mt-20 h-full`;
const NavLinks = tw.div`px-20 py-4 font-secondary`;
const NavlinkItem = tw.div`text-2xl tracking-widest text-gray-100 hover:text-decoration hover:text-decoration-underline hover:text-decoration-wavy hover:underline-offset-large`;
const BrandWrapper = tw.div`flex ml-10 mt-3 py-4`;

export default function MobileNav({ mainMenu, items }) {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <MobileNavWrapper>
      <OpenButton type="button" aria-label="Toggle Menu" onClick={onToggleNav}>
        <Image
          src={items.hamburgerIcon.sourceUrl}
          alt={items.hamburgerIcon.altText}
          width={50}
          height={50}
        />
      </OpenButton>
      <div
        css={[
          tw`fixed pt-4 top-0 left-0 z-10 h-full w-full transform bg-secondary-dark duration-300 ease-in-out h-160`,
          navShow ? tw`translate-x-0` : tw`translate-x-full`,
        ]}
      >
        <CloseButtonWrapper>
          <BrandWrapper>
            <Image
              src={items.planetIcelandLogoWhite.sourceUrl}
              alt={items.planetIcelandLogoWhite.altText}
              width={133}
              height={53}
            />
          </BrandWrapper>
          <CloseButton
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <Image
              src={items.closeIcon.sourceUrl}
              alt={items.closeIcon.altText}
              width={50}
              height={50}
            />
          </CloseButton>
        </CloseButtonWrapper>
        <MobileLinksWrapper>
          {mainMenu.menuItems.nodes.map(({ label, url, id }) => (
            <NavLinks key={id}>
              <Link href={url} passHref>
                <NavlinkItem onClick={onToggleNav}>{label}</NavlinkItem>
              </Link>
            </NavLinks>
          ))}
        </MobileLinksWrapper>
      </div>
    </MobileNavWrapper>
  );
}
