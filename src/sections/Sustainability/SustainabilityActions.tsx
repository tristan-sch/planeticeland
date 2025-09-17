import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { SustainabilityActionsTypes } from 'fragments/sustainabilityFields'

import { SectionHeader } from 'components/SectionHeader'

import { useViewportChange } from 'hooks/useResponsiveActions'
import { MenusTypes } from 'types/queryTypes'

import { SelectMenu } from './SelectMenu'

// ---------------------------------------------------------------------------

type SustainabilityActionsProps = {
  menus: MenusTypes
  sustainabilityActions: SustainabilityActionsTypes
}

// ---------------------------------------------------------------------------

export const SustainabilityActions = ({
  menus,
  sustainabilityActions,
}: SustainabilityActionsProps) => {
  const currentMenuLabel =
    menus.nodes[0]?.menuItems?.edges?.[2]?.node?.label ?? 'Sustainability'

  // ---------------------------------------------------------------------------
  // Prepare actions
  const categories = sustainabilityActions.sustainabilityActionsCategories
  const actions = categories.map((category) => ({
    label: category.actionsTypes.label,
    topics: category.actionsTypes.actions.map((topic) => ({
      title: topic.title,
      details: topic.details.map((d) => d.bulletpoint),
    })),
  }))

  // ---------------------------------------------------------------------------
  // Use first category as initial
  const initialCategory = actions[0] ?? { label: '', topics: [] }
  const [currentCategoryLabel, setCurrentCategoryLabel] = useState(initialCategory.label)
  const [currentTopics, setCurrentTopics] = useState(initialCategory.topics)

  // ---------------------------------------------------------------------------
  // Handle tab click
  const handleTabClick = (clickedLabel: string) => {
    const selectedCategory = actions.find((cat) => cat.label === clickedLabel)
    setCurrentCategoryLabel(selectedCategory?.label ?? '')
    setCurrentTopics(selectedCategory?.topics ?? [])
  }

  // ---------------------------------------------------------------------------
  // Reset on viewport change
  useViewportChange(640, () => {
    setCurrentCategoryLabel(initialCategory.label)
    setCurrentTopics(initialCategory.topics)
  })

  // ---------------------------------------------------------------------------

  return (
    <div className="relative pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            headingId="sustainabilityActions"
            currentMenuLabel={currentMenuLabel}
            headingText={sustainabilityActions.sustainabilityActionsHeading}
            description={sustainabilityActions.sustainabilityActionsTextblock}
          />
        </div>

        {/* Desktop View */}
        <div className="mt-16 hidden justify-center sm:flex">
          <fieldset aria-label="Sustainability actions">
            <RadioGroup
              value={currentCategoryLabel}
              onChange={handleTabClick}
              className={`grid gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200 ${
                actions.length === 1
                  ? 'grid-cols-1'
                  : actions.length === 2
                  ? 'grid-cols-2'
                  : actions.length === 3
                  ? 'grid-cols-3'
                  : actions.length === 4
                  ? 'grid-cols-4'
                  : 'grid-cols-5'
              }`}
            >
              {actions.map((cat, i) => (
                <Radio
                  key={i}
                  value={cat.label}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-secondary data-[checked]:text-white"
                >
                  {cat.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>

        {/* Mobile View */}
        <div className="mt-16 flex justify-center sm:hidden">
          <SelectMenu
            items={actions.map((cat) => ({
              label: cat.label,
            }))}
            handleSelectChange={handleTabClick}
          />
        </div>

        {/* Current Topics */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {currentTopics.map((topic, i) => (
            <div key={i} className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
              <p className="text-sm/6 text-gray-500">{currentCategoryLabel}</p>
              <h3 className="mt-2 text-base font-semibold text-gray-900">
                {topic.title}
              </h3>
              {topic.details.length > 0 && (
                <ul className="prose prose-gray mt-4 list-disc pl-5">
                  {topic.details.map((bullet, j) => (
                    <li key={j} className="mb-2 text-sm/6 text-gray-600">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
