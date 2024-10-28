import { useEffect, useState } from "react";


const UseEffectHookExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prevCount) => prevCount + 10);
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prevCount)=>prevCount + 1)}> increment</button>
      count : {count}
    </div>
  );
};

export default UseEffectHookExample;
