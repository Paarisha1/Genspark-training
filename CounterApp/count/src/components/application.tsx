import React from "react";
import Counter from "./counter.tsx";

const Application = () => (
  <main className="flex items-center h-full place-content-center bg-cyan-900">
    <Counter InitialCounter={0} />
  </main>
);

export default Application;
