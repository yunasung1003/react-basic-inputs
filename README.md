//정리!

const [inputs, setInputs] = useState({
  name: "",
  nickname: ""
});
객체상태를 업데이트해주기 위해선

const nextInputs = {
  ...inputs, //객체상태를 복사
  [name]: value //덮어씌우기
};

기존 상태를  복사하고, 특정값: [name]: value 을 덮어씌우고, 새로운 상태로 설정 

