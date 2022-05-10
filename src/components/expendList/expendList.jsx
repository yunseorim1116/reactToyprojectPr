import React from "react";
import ExpendDate from "./expendDate";
const ExpendList = ({ todayData }) => {
  return (
    <>
      <ul>
        <ExpendDate data={todayData} />
      </ul>
    </>
  );
};
export default ExpendList;
