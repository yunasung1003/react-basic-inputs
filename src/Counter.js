import React, { useState } from "react";

function Counter() {
  //number: 상태, setNumber: 상태를 변경하는 함수
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // 업데이트 하고싶은 값을 어찌할 지에 대한 로직의 함수도 가능
    // prevNumber 어떤 이름이든 상관없음
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    //setNumber(number - 1); 는 다음 업데이트 하고 싶은 값을 넣어준 상태
    //setNumber 함수에다가 -1 넣어 호출하면, 위에 number 가 바뀜
    setNumber(number - 1);
  };

  return (
    <div>
      {/* 바뀐 값을 {number}에서 보이도록 설정 */}
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;
