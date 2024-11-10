// src/components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { decrement, increment, incrementByAmount } from '../../store/counter/counterSlice';

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
