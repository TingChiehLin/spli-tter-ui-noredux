import { ChangeEvent, FormEvent, useState } from "react";
import { MdPerson, MdOutlineAttachMoney } from "react-icons/md";
import TipButton from "./components/TipButton";
import Input from "./components/Input";
import { tip_datas } from "./models/tip_datas";
import Label from "./components/Label";
import Button from "./components/Button";

function App() {
  const defaultUserInputState = {
    billAmount: 0,
    numberOfPeople: 0,
    tipAmount: 0,
    totalAmount: 0,
    selectTipAmount: 1,
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState(defaultUserInputState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputField = event.target.name;
    const inputValue = Number(event.target.value);
    if (isNaN(inputValue)) {
      return;
    }
    setUserInput({
      ...userInput,
      [inputField]: inputValue,
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (userInput.billAmount === 0 || userInput.numberOfPeople === 0) {
      alert("Please Input any Number");
      return;
    }

    const tipAmount =
      (userInput.billAmount * (userInput.selectTipAmount / 100)) /
      userInput.numberOfPeople;
    const totalAmount =
      userInput.billAmount / userInput.numberOfPeople + tipAmount;

    setUserInput({
      ...userInput,
      tipAmount: +tipAmount.toFixed(2),
      totalAmount: +totalAmount.toFixed(2),
    });
  };

  const handleRestAmount = (event: FormEvent) => {
    event.preventDefault();
    setUserInput(defaultUserInputState);
  };

  return (
    <form className="w-full h-screen bg-cyan-200 flex justify-center items-center flex-col gap-20">
      <div className="tracking-[1rem]">
        <h1 className="text-2xl font-bold">SPLI</h1>
        <h1 className="text-2xl font-bold">TTER</h1>
      </div>
      <div className="w-[64rem] h-[32rem] bg-sky-50 rounded-2xl flex justify-center items-center p-8">
        <div className="w-full h-ful">
          <Input
            title={"Bill"}
            name={"billAmount"}
            id={"billamount"}
            icon={
              <MdOutlineAttachMoney
                color="gray"
                size={"1.5rem"}
                className="absolute left-4 top-3"
              />
            }
            value={userInput.billAmount}
            onChangeEvent={changeHandler}
          />
          <div className="mt-8">
            <div className="mb-4">Select Tip %</div>
            <div className="flex justify-start items-center flex-wrap gap-4">
              {tip_datas.map((item) => (
                <TipButton
                  key={item.id}
                  text={item.text}
                  value={item.value}
                  currentIndex={currentIndex}
                  isCustomed={item.isCustomed}
                  onSelectTipAmount={(value) => {
                    setCurrentIndex(value);
                    setUserInput({
                      ...userInput,
                      selectTipAmount: value,
                    });
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Input
              title={"Number of People"}
              name={"numberOfPeople"}
              id={"numberOfPeople"}
              icon={
                <MdPerson
                  color="gray"
                  size={"1.5rem"}
                  className="absolute left-4 top-3"
                />
              }
              value={userInput.numberOfPeople}
              onChangeEvent={changeHandler}
            />
          </div>
        </div>
        <div className="bg-cyan-900 w-full h-full rounded-2xl px-10 py-12 flex justify-between flex-col">
          <Label title={"Tip Amount"} amount={userInput.tipAmount} />
          <Label title={"Total"} amount={userInput.totalAmount} />
          <Button title={"Submit"} onEventLister={submitHandler} />
          <Button title={"Reset"} onEventLister={handleRestAmount} />
        </div>
      </div>
    </form>
  );
}

export default App;
