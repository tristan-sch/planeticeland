type SelectMenuItem = {
  label: string;
};

type SelectMenuItemProps = {
  title?: string;
  items: Array<SelectMenuItem>;
  handleSelectChange?: (selectedAction: string) => void;
};

export const SelectMenu = ({
  title = "",
  items,
  handleSelectChange,
}: SelectMenuItemProps) => {
  return (
    <div>
      {title && (
        <label
          htmlFor={title}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {title}
        </label>
      )}
      <div className="mt-2 grid grid-cols-1">
        <select
          id={title}
          name={title}
          onChange={(e) => handleSelectChange?.(e.target.value)} // Attach `onChange` to the `<select>` element
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
        >
          {items.map((item, i) => (
            <option key={i} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
