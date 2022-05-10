import React, { useState } from "react";
import TotalAmount from "./totalAmount";

const ExpendDate = ({ data }) => {
  console.log(data);
  return data.map((datas) => (
    <>
      <div>
        <div>{datas[0].date}</div>
      </div>
      <TotalAmount datas={datas} />

      {datas.map((ele) => (
        <div>{ele.item}</div>
      ))}
    </>
  ));
};
export default ExpendDate;
