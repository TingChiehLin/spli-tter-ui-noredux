import { FC, MouseEvent } from "react";

interface TipButtonProp {
  text: string;
  value: number;
  isCustomed: boolean;
  currentIndex: number;
  onSelectTipAmount: (value: number) => void;
}

const TipButton: FC<TipButtonProp> = ({
  text,
  value,
  isCustomed,
  currentIndex,
  onSelectTipAmount,
}) => {
  const handleValue = (event: MouseEvent) => {
    event.preventDefault();
    onSelectTipAmount(value);
  };

  return (
    <>
      {isCustomed ? (
        <button
          className="w-32 h-16 rounded bg-sky-200 active:bg-teal-500"
          onClick={handleValue}
        >
          <p className="text-cyan-900 font-bold text-xl active:text-cyan-900">
            {text}
          </p>
        </button>
      ) : (
        <button
          className={`w-32 h-16 rounded ${
            currentIndex === value ? "bg-teal-500 " : "bg-cyan-900"
          }`}
          onClick={handleValue}
        >
          <p
            className={`font-bold text-xl ${
              currentIndex === value ? "text-cyan-900 " : "text-white"
            } `}
          >
            {text}
          </p>
        </button>
      )}
    </>
  );
};

export default TipButton;
