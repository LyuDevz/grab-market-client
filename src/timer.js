import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트"); // function 안에 넣으면 한개씩 출력; 위에 놓으면 두개씩,,, 왜?
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}초</h3>
      <button>올려주세요</button>
    </div>
  );
}
export default TimerComponent;
