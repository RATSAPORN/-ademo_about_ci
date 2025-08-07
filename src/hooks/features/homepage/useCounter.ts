import { useState } from 'react';

type UseCounterReturn = {
  count: number;
  val: number;
  increment: () => void;
  setVal: (newVal: number) => void;
};

export default function useCounter(): UseCounterReturn {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);

  const increment = () => setCount((c) => c + val);

  return { count, val, increment, setVal };
}