import Image from "next/image";
import { Container } from "./Containers";
import { useState } from "react";
import { MenusTypes, SustainabilityTypes } from "../types/queryTypes";
import { Content } from "types/sharedTypes";
import sanitizeHtml from "sanitize-html";

type Props = {
  menus: MenusTypes;
  sustainability: SustainabilityTypes;
};

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Sustainability({ menus, sustainability }: Props) {
  const currentMenuLabel = menus.nodes[0]?.menuItems.edges[2]?.node.label || "";
  const currentMenuPath =
    menus.nodes[0]?.menuItems.edges[2]?.node.path?.substring(1) || "";

  const initialActions = sustainability.actionsGroup.actions.map(
    (initialAction) => [
      {
        name: initialAction.actionsPoints.actionsHeading,
        current: !!initialAction.actionsPoints.current ?? false,
        actions: initialAction.actionsPoints.actions.map((action) => [
          { heading: action.heading, textblock: action.textblock },
        ]),
      },
    ]
  );

  const [actions, setActions] = useState(initialActions);
  const initialFirstTabActions = actions[0][0]?.actions || [];
  const flattenedInitialFirstTabActions = initialFirstTabActions.flat();
  const [currentActionsPoints, setCurrentActionsPoints] = useState<Content[]>(
    flattenedInitialFirstTabActions
  );

  const handleTabClick = (clickedTabName: string) => {
    const updatedActions = actions.map((actionsArray) =>
      actionsArray.map((action) => ({
        ...action,
        current: action.name === clickedTabName,
      }))
    );
    setActions(updatedActions);

    const selectedActionsArray = actions.find(
      (actionsArray) => actionsArray[0].name === clickedTabName
    );

    if (selectedActionsArray) {
      const flattenedActions = selectedActionsArray[0].actions.flat();
      setCurrentActionsPoints(flattenedActions);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedActionName = event.target.value;
    const selectedActionsArray = actions.find(
      (actionsArray) => actionsArray[0].name === selectedActionName
    );

    if (selectedActionsArray) {
      const flattenedActions = selectedActionsArray[0].actions.flat();
      setCurrentActionsPoints(flattenedActions);
    }
  };

  return (
    <section
      id={currentMenuPath}
      aria-label={currentMenuLabel}
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-cyan-600">
              {currentMenuLabel}
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {sustainability.heading}
            </h2>
            <div className="mt-6 grid max-w-xl grid-cols-1 gap-x-16 gap-y-10 text-justify lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {sustainability.textblock && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {sustainability.textblock}
                </p>
              )}
              {sustainability.textblockSecondary && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {sustainability.textblockSecondary}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Image section */}
        {sustainability.image && (
          <div className="mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
            <Image
              src={sustainability.image.sourceUrl}
              alt={sustainability.image.altText}
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
              width={2432}
              height={1442}
            />
          </div>
        )}

        {/* Values section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-nunito text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {sustainability.actionsGroup.heading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {sustainability.actionsGroup.textblock}
            </p>
          </div>
          <div className="mt-10 ">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleSelectChange}
              >
                {actions.map((action, i) => (
                  <option key={i}>{action[0].name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex justify-between" aria-label="Tabs">
                  {actions.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => handleTabClick(tab[0].name)}
                      className={classNames(
                        tab[0].current
                          ? "border-secondary text-secondary"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium"
                      )}
                      aria-current={tab[0].current ? "page" : undefined}
                    >
                      {tab[0].name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {currentActionsPoints.map((currentActionsPoint, i) => (
              <div key={i}>
                <dt className="font-semibold text-gray-900">
                  {currentActionsPoint.heading}
                </dt>
                {currentActionsPoint.textblock && (
                  <div className="mt-1 text-justify text-gray-600">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(currentActionsPoint.textblock),
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
