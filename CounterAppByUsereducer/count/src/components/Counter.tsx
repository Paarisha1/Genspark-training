import React, { useReducer, useEffect } from "react";

type CounterProps = {
  InitialCounter: number;
  greeting?: string;
};

type State = {
  count: number;
  draftCounter: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "updateDraftCounter"; payload: number }
  | { type: "updateCountFromDraft" };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: action.payload, draftCounter: action.payload };
    case "updateDraftCounter":
      return { ...state, draftCounter: action.payload };
    case "updateCountFromDraft":
      return { ...state, count: state.draftCounter };
    default:
      return state;
  }
};

const Counter = ({ InitialCounter }: CounterProps) => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: InitialCounter,
    draftCounter: InitialCounter,
  });

  // Update draftCounter whenever count changes
  useEffect(() => {
    dispatch({ type: "updateDraftCounter", payload: state.count });
  }, [state.count]);

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Counter App</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "decrement" })}>
          ➖ Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset", payload: InitialCounter })}
        >
          🔁 Reset
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch({ type: "updateCountFromDraft" });
          }}
        >
          <input
            type="number"
            value={state.draftCounter}
            onChange={(event) =>
              dispatch({
                type: "updateDraftCounter",
                payload: event.target.valueAsNumber,
              })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
