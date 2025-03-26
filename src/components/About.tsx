import Image from "next/image";
import { AboutTypes, MenusTypes } from "types/queryTypes";
import sanitizeHtml from "sanitize-html";

type Props = {
  menus: MenusTypes;
  about: AboutTypes;
};

export default function About({ menus, about }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[0]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[0]?.node.path?.substring(1) || "";

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="relative bg-white py-24 sm:py-32"
    >
      <div>
        <Image
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src={about.image.sourceUrl}
          alt={about.image.altText}
          width={1922}
          height={1440}
          unoptimized={true}
          loading="lazy"
        />
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <p className="text-base font-semibold leading-8 text-secondary">
                {currentMenuLabel}
              </p>
              <h2 className="mt-2 font-nunito text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {about.heading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {about.textblock}
              </p>
              {about.textblockSecondary && (
                <div className="mt-6 text-lg leading-8 text-gray-600">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(about.textblockSecondary),
                    }}
                  />
                </div>
              )}

              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {about.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                  >
                    <dt className="text-sm leading-6 text-gray-600">
                      {service.textblock}
                    </dt>
                    <dd className="order-first text-base font-semibold tracking-tight text-gray-900">
                      {service.heading}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
