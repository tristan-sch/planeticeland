import clsx from 'clsx'
import { SustainabilityContentTypes } from 'fragments/sustainabilityFields'

import { NextImage } from 'components/NextImage'
import { SectionHeader } from 'components/SectionHeader'

import { sanitizeAllHtmlContent } from 'utils/utils'

import { MenusTypes } from '../../types/queryTypes'

// ---------------------------------------------------------------------------

type Props = {
  menus: MenusTypes
  sustainabilityContent: SustainabilityContentTypes
}

// ---------------------------------------------------------------------------

export const SustainabilityContent = ({ menus, sustainabilityContent }: Props) => {
  const currentMenuLabel =
    menus.nodes[0]?.menuItems?.edges?.[2]?.node?.label ?? 'Sustainability'

  const imageSrc = sustainabilityContent.sustainabilityContentImage?.node.sourceUrl
  const imageAlt = sustainabilityContent.sustainabilityContentImage?.node.altText

  // ---------------------------------------------------------------------------

  return (
    <div className="relative">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col lg:flex-row',
          !imageSrc && 'justify-center',
        )}
      >
        {/* Image on the left */}
        {imageSrc && (
          <div className="w-full flex-shrink-0 lg:w-1/2">
            <div className="aspect-[3/4] w-full">
              <NextImage
                src={imageSrc}
                alt={imageAlt}
                width={1920}
                height={2560}
                className="h-full w-full bg-gray-50 object-cover"
              />
            </div>
          </div>
        )}
        {/* Content on the right */}
        <div className="flex w-full flex-col justify-start lg:w-1/2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pl-5">
            <div className="lg:contents">
              <div className="px-12 pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:px-0 lg:pt-0">
                <SectionHeader
                  headingId="sustainability-content"
                  currentMenuLabel={currentMenuLabel}
                  headingText={sustainabilityContent.sustainabilityContentHeading}
                />

                {sustainabilityContent.sustainabilityContentTextblock && (
                  <div
                    className="mb-6 mt-5 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeAllHtmlContent(
                        sustainabilityContent.sustainabilityContentTextblock,
                      ),
                    }}
                  />
                )}

                {sustainabilityContent.sustainabilityContentTextblockSecondary && (
                  <div
                    className="mb-6 mt-5 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeAllHtmlContent(
                        sustainabilityContent.sustainabilityContentTextblockSecondary,
                      ),
                    }}
                  />
                )}

                {sustainabilityContent.sustainabilityContentHeadingSecondary && (
                  <h2 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
                    {sustainabilityContent.sustainabilityContentHeadingSecondary}
                  </h2>
                )}

                {sustainabilityContent.sustainabilityContentTextblockTertiary && (
                  <div
                    className="mb-6 mt-5 text-justify"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeAllHtmlContent(
                        sustainabilityContent.sustainabilityContentTextblockTertiary,
                      ),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
