import { FC, ReactNode, ChangeEvent } from "react";

interface InputPropType {
  title: string;
  name: string;
  id: string;
  icon: ReactNode;
  value: number;
  onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputPropType> = ({
  title,
  name,
  id,
  icon,
  value,
  onChangeEvent,
}) => {
  return (
    <div>
      <label className="mb-4 block" htmlFor="bill">
        {title}
      </label>
      <div className="relative">
        {icon}
        <input
          id={id}
          type="text"
          placeholder={"0"}
          name={name}
          value={value}
          onChange={onChangeEvent}
          className="pl-12 w-[26rem] h-12 outline-none rounded appearance-none text-cyan-900 font-bold text-2xl focus:text-black"
        />
      </div>
    </div>
  );
};

export default Input;
