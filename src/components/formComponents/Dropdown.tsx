import DrowDownHeader from "@/src/components/formComponents/DDHeader";
import { DropDownMenueProps as Props } from "@/src/types";

const Dropdown = ({
  ImagePath,
  ImageAlt,
  Label,
  Value,
  onChange,
  Options,
}: Props) => {
  if (Array.isArray(Options)) {
    return (
      <div>
        <DrowDownHeader
          ImagePath={ImagePath}
          ImageAlt={ImageAlt}
          Label={Label}
        />
        <select
          className="block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={Value}
          onChange={onChange}
        >
          <optgroup label={Label} key={Label}>
            <option value="">-- Select --</option>
            {Options.map((subcategoryName) => (
              <option value={subcategoryName} key={subcategoryName}>
                {subcategoryName}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <DrowDownHeader
          ImagePath={ImagePath}
          ImageAlt={ImageAlt}
          Label={Label}
        />
        <select
          className="block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={Value}
          onChange={onChange}
        >
          {Object.keys(Options).map((categoryName) => (
            <optgroup label={categoryName} key={categoryName}>
              <option value="">-- Select --</option>
              {Array.isArray(Options[categoryName]) &&
                Options[categoryName].map((subcategoryName) => (
                  <option value={subcategoryName} key={subcategoryName}>
                    {subcategoryName}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </div>
    );
  }
};

export default Dropdown;
