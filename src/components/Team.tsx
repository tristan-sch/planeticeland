import Image from "next/image";
import { MenusTypes, TeamTypes } from "types/queryTypes";
import { Container } from "./Containers";

type Props = {
  team: TeamTypes;
  menus: MenusTypes;
};

export default function Team({ team, menus }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[1]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[1]?.node.path?.substring(1) || "";

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="bg-gray-100 py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center sm:text-left lg:mx-8">
            <p className="text-base font-semibold leading-7 text-secondary">
              {currentMenuLabel}
            </p>
            <h2 className="mt-2 font-display font-nunito text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {team.heading}
            </h2>
            <div
              className={`mt-6 grid max-w-xl grid-cols-1 gap-x-20 gap-y-10 text-justify  ${
                team.textblockSecondary
                  ? "lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
                  : "lg:max-w-xl"
              } `}
            >
              {team.textblock && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {team.textblock}
                </p>
              )}
              {team.textblockSecondary && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {team.textblockSecondary}
                </p>
              )}
            </div>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.staff.map((person, i) => (
              <li key={i}>
                <Image
                  className="mx-auto rounded-full"
                  width={96}
                  height={96}
                  src={person.picture.mediaItemUrl}
                  alt={person.picture.altText}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {person.position}
                </p>
                <p className="text-sm leading-6 text-gray-600">
                  {person.department}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
