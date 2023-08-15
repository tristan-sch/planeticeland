import { Content, CustomImage, Link, mediaItemType } from "./sharedTypes";

export type SettingsTypes = {
  title: string;
  description: string;
  url: string;
};

type MenuItem = {
  id: string;
  label: string;
  parentId: string;
  path: string;
};

export type Menu = {
  id: string;
  databaseId: number;
  name: string;
  menuItems: {
    edges: {
      node: MenuItem;
    }[];
  };
};

export type MenusTypes = {
  nodes: Menu[];
};

export interface BannerTypes extends Content {
  activate: boolean;
  link: string;
}

export interface HeaderTypes extends Content {
  images: {
    logo: CustomImage;
    favicon: CustomImage;
    heroImage: CustomImage;
  };
  teaser: {
    activate: boolean;
    teaser: string;
    teaserButton: Link;
  };
  buttons: {
    primaryButton: Link;
    secondaryButton: Link;
  };
}

type Service = Content;

export interface AboutTypes extends Content {
  services: Service[];
  image: CustomImage;
}

type Staff = {
  name: string;
  position: string;
  department: string;
  picture: mediaItemType;
};

export interface TeamTypes extends Content {
  staff: Staff[];
}

export type Action = { actions: string };

export interface SustainabilityTypes extends Content {
  image: CustomImage;
  actionsGroup: {
    heading: string;
    textblock: string;
    actions: {
      actionsPoints: {
        actionsHeading: string;
        actions: Content[];
        current: boolean;
      };
    }[];
  };
}

type Question = Content;

export interface FaqTypes extends Content {
  questions: Question[];
}

export interface ContactTypes extends Content {
  contactUs: {
    heading: string;
    textblock: string;
    link: Link;
  }[];
}

export interface FooterTypes extends Content {
  footerLinks: {
    link: Link;
  }[];
  logo: CustomImage;
  partnerLogos: {
    partnerLogo: CustomImage;
  }[];
}
