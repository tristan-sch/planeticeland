import NextLink from 'next/link' // eslint-disable-line no-restricted-imports

type NextLinkProps = Parameters<typeof NextLink>[0]

export const Link = (props: NextLinkProps) => <NextLink prefetch={false} {...props} />
