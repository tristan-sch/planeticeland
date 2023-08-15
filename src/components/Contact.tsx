import { ContactTypes, MenusTypes } from "types/queryTypes";
import { Container } from "./Containers";
import Link from "next/link";

type Props = {
  contact: ContactTypes;
  menus: MenusTypes;
};

export default function Contact({ contact, menus }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[4]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[4]?.node.path?.substring(1) || "";

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-28"
    >
      <Container>
        <div className="text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <p className="text-base font-semibold leading-7 text-secondary">
                Contact
              </p>
              <h2 className="mt-2 font-display font-nunito text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                {contact.heading}
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                {contact.textblock}
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {contact.contactUs.map((contactItem, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-gray-900 sm:border-l sm:border-secondary sm:pl-6">
                    {contactItem.heading}
                  </h3>
                  <div className="pt-2 not-italic text-gray-600 sm:border-l sm:border-gray-200 sm:pl-6">
                    <p>{contactItem.textblock}</p>
                    <Link
                      className="font-semibold text-secondary"
                      href={contactItem?.link?.url ?? "/"}
                    >
                      {contactItem?.link?.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
