import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  //name 과 nickname 을 쉽게 사용 하기 위해, 비구조할당을 통해 축출
  //name 과 nickname 은 inputs 에서 미리 축출
  const { name, nickname } = inputs;

  const onChange = (e) => {
    //반드시 미리 축출해야하는 것은 아니고, e.target 두번 쓰기 싫어서

    const { name, value } = e.target;
    // console.log(e.target.name);
    // console.log(e.target.value);

    ///객체로 불러올땐 value 직접. 객체로 나올 땐 다름.
    // setInputs(value);

    //...inputs : 기존 객체를 복사(스프에스 문법)
    //새로운 객체
    const nextInputs = {
      ...inputs,
      [name]: value
    };
    //밑에처럼 써주지 않고 바로 ...inputs 뒤에  [name]: value 적어줌
    // nextInputs[name] = value;
    //새로운 객체 nextInputs 만들어서, nextInputs 새로운 상태로 설정
    setInputs(nextInputs);
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
  };

  return (
    <div>
      {/* input 이 여러개면, useState 나 onChange 여러번 사용 X */}
      {/* input에 name 이라는 값을 설정하고, 이벤트를 발생 했을 때 참조하는 것이 좋음 */}
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b> 값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
export default InputSample;
