import { MenusTypes, SustainabilityTypes } from "types/queryTypes";

import { SustainabilityActions } from "./SustainabilityActions";
import { SustainabilityContent } from "./SustainabilityContent";
import { CallToAction } from "./CallToAction";

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
};

export const Sustainability = ({ menus, sustainability }: Props) => {
  return (
    <section
      aria-labelledby={`${sustainability.slug}-heading`}
      className="relative py-20 sm:py-24"
      id={sustainability.slug}
    >
      <SustainabilityContent
        menus={menus}
        sustainabilityContent={sustainability.sustainabilityContent}
      />
      <SustainabilityActions
        menus={menus}
        sustainabilityActions={sustainability.sustainabilityActions}
      />
      <CallToAction
        text={
          sustainability.sustainabilityBannerNew.sustainabilityBannerTextblock
        }
        buttonText={
          sustainability.sustainabilityBannerNew.sustainabilityBannerEmail
        }
        onClick={() => {
          window.location.href = `mailto:${sustainability.sustainabilityBannerNew.sustainabilityBannerEmail}`;
        }}
        label={
          sustainability.sustainabilityBannerNew
            .sustainabilityBannerTextblockSecondary
        }
      />
    </section>
  );
};
