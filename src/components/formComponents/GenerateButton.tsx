import { GenerateButtonProps as Props } from "@/src/types";

const GenerateButton = ({ handleSubmit, showSpinner }: Props) => {
  return (
    <button
      type="submit"
      onSubmit={(e) => handleSubmit}
      className="relative bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full h-[40px]"
    >
      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.5A8.5 8.5 0 012.5 12H4c0 3.584 1.931 6.729 4.794 8.428l3.793-3.347zm4.938-3.793A7.962 7.962 0 0120 12h-4c0 2.289-.97 4.371-2.529 5.84l3.467 2.434zM12 4.5A8.5 8.5 0 0121.5 12H20c0-3.584-1.931-6.729-4.794-8.428L12 4.5z"
            ></path>
          </svg>
        </div>
      )}
      {!showSpinner && <span>Generate Image</span>}
    </button>
  );
};

export default GenerateButton;
