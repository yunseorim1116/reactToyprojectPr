import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpendList from "./components/expendList/expendList";

function App() {
  const [todayData, setTodayData] = useState([]);

  useEffect(() => {
    console.log("실행");

    aixosTest();
    console.log(todayData);
  }, []);

  //함수에 어싱크가 붙으면 무조건 프로미스를 리터하고 , 어싱크가 붙어있는 함수 안에서만 await을 사용 가능하다.
  const aixosTest = async () => { 
    const { data } = await axios.get("https://eulsoo.github.io/list.json");//엑시오스의 좋은점 : 1. 남들이 써서 2. 데이터를 한번에 꺼내올수 있어서
    const newDatas = groupArrayOfObjects(data, "date"); //받은 데이터를 분리 시키는 함수에 넣어 실행한다.
    const newDataBox = []; //불변성을 지키기 위해 데이터 담을 공간의 박스를 만들어주고
    for (const [key, value] of Object.entries(newDatas)) {
      newDataBox.push(value);//데이터 담아주기
    }

    setTodayData(newDataBox); //마지막에 셋으로 렌더링을 일으킨다.
  };

  function groupArrayOfObjects(list, key) {
    return list.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  return (
    <>
      <ExpendList todayData={todayData} /> 
    </>
  );
}

export default App;
