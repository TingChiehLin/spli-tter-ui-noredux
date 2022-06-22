import { FC } from "react";

interface LabelProp {
  title: string;
  amount: number;
}

const Label: FC<LabelProp> = ({ title, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-white tracking-[0.2rem]">{title}</h1>
        <h3 className="text-green-600">/ person</h3>
      </div>
      <div className="text-4xl font-bold text-teal-500">{"$" + amount}</div>
    </div>
  );
};

export default Label;
