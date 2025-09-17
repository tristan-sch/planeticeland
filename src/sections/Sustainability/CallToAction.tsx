type CallToActionProps = {
  text: string
  buttonText: string
  onClick: () => void
  label?: string
}

export const CallToAction = ({ text, buttonText, onClick, label }: CallToActionProps) => {
  return (
    <div className="bg-white pt-16 sm:pt-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col gap-20 overflow-hidden bg-secondary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
          <h2 className="text-balance max-w-xl text-xl font-semibold tracking-tight text-white sm:text-2xl xl:flex-auto">
            {text}
          </h2>
          <div className="w-full max-w-md">
            <div className="flex gap-x-4">
              <button
                type="button"
                onClick={onClick}
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {buttonText}
              </button>
            </div>
            {label && <p className="mt-4 text-sm/6 text-gray-300">{label}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
