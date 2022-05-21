import React from "react";
import ExpendDate from "./expendDate";
const ExpendList = ({ todayData }) => {//받아온 데이터는 우리가 가공한 데이터
  
  return (
    <>
      <ul>
        <ExpendDate data={todayData} />
      </ul>
    </>
  );
};
export default ExpendList;
