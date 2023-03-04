import DDHeader from "@/src/components/formComponents/DDHeader";
import { SizeSelectorProps as Props } from "@/src/types";

const SizeSelector = ({ value, onChange }: Props) => (
  <>
    <DDHeader Label="Select Size" />
    <select
      className="block w-full border-2 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      value={value}
      onChange={onChange}
    >
      <option value="256x256">Small (256 x 256)</option>
      <option value="512x512">Medium (512 x 512)</option>
      <option value="1024x1024">Large (1024 x 1024)</option>
    </select>
  </>
);

export default SizeSelector;
