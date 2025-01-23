
import { useState, useEffect } from "react";
const useEffect_test = () => {
    const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  //依赖数组,过滤器
  useEffect(() => {
    console.log("counter:" + counter);
  }, [counter, counter1]);

  //有花括号要加逗号，没花括号就不用加
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  });

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>+1</button>
      <div>You clicked the button {counter1} times</div>
      <button onClick={() => setCounter1((count) => count + 1)}>++1</button>
    </div>
  );
};


export default useEffect_test