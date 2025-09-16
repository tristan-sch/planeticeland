export type Content = {
  heading?: string;
  textblock?: string;
  textblockSecondary?: string;
  textblockTertiary?: string;
};

// ---------------------------------------------------------------------------

export type Image = {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width?: number;
      height?: number;
    };
    imageLink?: {
      imageLink: string;
    };
  };
};

// ---------------------------------------------------------------------------s

export type MediaItemType = {
  id: string;
  mediaItemUrl: string;
  altText: string;
};

// ---------------------------------------------------------------------------

export type Link = {
  url: string;
  title: string;
};
