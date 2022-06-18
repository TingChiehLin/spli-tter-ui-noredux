import { FC, MouseEvent, useState } from "react";

interface ButtonProp {
  text: string;
  value: number;
  isCustomed: boolean;
  onSelectTipAmount: (value: number) => void;
}

const Button: FC<ButtonProp> = ({
  text,
  value,
  isCustomed,
  onSelectTipAmount,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleValue = (event: MouseEvent) => {
    event.preventDefault();
    setIsActive(!isActive);
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
            isActive ? "bg-teal-500 " : "bg-cyan-900"
          }`}
          onClick={handleValue}
        >
          <p
            className={`font-bold text-xl ${
              isActive ? "text-cyan-900 " : "text-white"
            } `}
          >
            {text}
          </p>
        </button>
      )}
    </>
  );
};

export default Button;
