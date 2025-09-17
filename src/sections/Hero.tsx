import { NextImage } from 'components/NextImage'
import { Link } from 'components/NextLink'

import { HeaderTypes, SettingsTypes } from 'types/queryTypes'

type Props = {
  settings: SettingsTypes
  header: HeaderTypes
}

export const Hero = ({ settings, header }: Props) => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <NextImage
              className="hidden lg:flex"
              src={header.images.logo.node.sourceUrl}
              alt={header.images.logo.node.altText}
              width={250}
              height={39}
            />
            {header.teaser.activate && (
              <div className="sm:justify-left mt-20 hidden sm:mb-8 sm:flex lg:mt-10">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {header.teaser.teaser}{' '}
                  <Link
                    href={header.teaser.teaserButton.url}
                    className="font-semibold text-gray-900"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {header.teaser.teaserButton.title}{' '}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            )}
            <h1 className="mt-24 font-nunito text-4xl font-bold tracking-tight text-gray-900 text-secondary sm:mt-10 sm:text-6xl">
              {settings.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{header.textblock}</p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={header.buttons.primaryButton.url}
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {header.buttons.primaryButton.title}
              </Link>
              <Link
                href={header.buttons.secondaryButton.url}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {header.buttons.secondaryButton.title} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <NextImage
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            width={2432}
            height={1442}
            alt={header.images.heroImage.node.altText}
            src={header.images.heroImage.node.sourceUrl}
          />
        </div>
      </div>
    </div>
  )
}
