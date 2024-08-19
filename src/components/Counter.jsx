import { useState } from "preact/hooks";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
      <span class="text-yellow-300 text-xl mx-4">{counter}</span>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
    </>
  );
}
