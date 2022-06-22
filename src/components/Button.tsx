import { FC, FormEvent } from "react";

interface ButtonProp {
  title: string;
  onEventLister: (event: FormEvent) => void;
}

const Button: FC<ButtonProp> = ({ title, onEventLister }) => {
  return (
    <button
      className="w-full h-16 font-bold text-xl rounded bg-teal-500 active:bg-teal-600"
      onClick={onEventLister}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
