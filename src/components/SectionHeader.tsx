type SectionHeaderProps = {
  headingId: string;
  currentMenuLabel: string;
  headingText?: string;
  description?: string;
  descriptionSecondary?: string;
  className?: string;
};

export const SectionHeader = ({
  headingId,
  currentMenuLabel,
  headingText = "",
  description = "",
  descriptionSecondary = "",
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 ${className}`}>
      <p className="text-base font-semibold leading-7 text-secondary">
        {currentMenuLabel}
      </p>
      <h2
        id={`${headingId}-heading`}
        className="text-pretty mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
      >
        {headingText}
      </h2>
      <p className="mt-4 text-gray-500">{description}</p>
      <p className="mt-4 text-gray-500">{descriptionSecondary}</p>
    </div>
  );
};
