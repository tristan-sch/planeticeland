import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Containers";
import {
  ContactTypes,
  HeaderTypes,
  MenusTypes,
  SettingsTypes,
} from "types/queryTypes";

type Props = {
  menus: MenusTypes;
  header: HeaderTypes;
  settings: SettingsTypes;
  contact: ContactTypes;
  isBanner?: boolean;
};

export default function Header({
  menus,
  settings,
  isBanner,
  header,
  contact,
}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header
        className={`absolute inset-x-0 ${isBanner ? "top-15" : "top-0"} z-50`}
      >
        <Container>
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            {header.images.logo.node.sourceUrl && (
              <div className="flex lg:hidden lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">{settings.title}</span>
                  <Image
                    src={header.images.logo.node.sourceUrl}
                    alt={header.images.logo.node.altText}
                    width={175}
                    height={27}
                    unoptimized={true}
                    loading="lazy"
                  />
                </a>
              </div>
            )}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <>
              {menus.nodes.map((menu, i) => (
                <div key={i} className="hidden lg:flex lg:gap-x-12">
                  {menu.menuItems.edges.map(({ node }) => (
                    <div key={node.id}>
                      <div>
                        <Link
                          href={node.path}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          <div>{node.label}</div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden "
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">{settings.title}</span>
                  {header.images.logo.node.sourceUrl && (
                    <Image
                      src={header.images.logo.node.sourceUrl}
                      alt={header.images.logo.node.altText}
                      width={175}
                      height={27}
                      unoptimized={true}
                      loading="lazy"
                    />
                  )}
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-16 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <>
                    {menus.nodes.map((menu, i) => (
                      <div key={i} className="space-y-2 py-6">
                        {menu.menuItems.edges.map(({ node }) => (
                          <div key={node.id}>
                            <div>
                              <Link
                                href={node.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                <div>{node.label}</div>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </>
                  <div className="py-6">
                    {contact.contactUs.map((contactItem, i) => (
                      <div key={i}>
                        <Link
                          href={contactItem?.link?.url ?? "/"}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-cyan-700"
                        >
                          {contactItem?.link?.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </Container>
      </header>
    </div>
  );
}
