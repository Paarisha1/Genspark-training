import React, { useState,useEffect } from "react";

type CounterProps = {
  InitialCounter: number;
  greeting?: string;
};

const Counter = ({ InitialCounter }: CounterProps) => {
  const [count, setCount] = useState(InitialCounter);
  const [draftCounter, setDraftCounter] = useState<number>(count);

  useEffect(() => {
    setDraftCounter(count);
  }, [count]);

  const incrementbuttonHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setCount((count) => count + 1);
  const decrementbuttonHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setCount((count) => count - 1);
  const resetbuttonHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setCount(InitialCounter);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCount(draftCounter);
  };
 
  const onChangeUpdateCounter = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDraftCounter(event.target.valueAsNumber);
  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Counter App</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={(event) => decrementbuttonHandler(event)}>
          ➖ Decrement
        </button>
        <button onClick={(event) => resetbuttonHandler(event)}>🔁 Reset</button>
        <button onClick={(event) => incrementbuttonHandler(event)}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="number"
            value={draftCounter}
            onChange={(event) => onChangeUpdateCounter(event)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
