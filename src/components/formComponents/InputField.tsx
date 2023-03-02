interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const InputField = ({ value, onChange, placeholder }: Props) => (
  <textarea
    className="w-full rounded-md shadow-sm focus:border-black focus:ring-black border-2 border-gray-300 p-2 h-24"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputField;
