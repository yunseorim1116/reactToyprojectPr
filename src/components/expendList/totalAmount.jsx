import React from "react";

const TotalAmount = ({ datas }) => {
  console.log(datas);
  const sum = datas
    .filter((i) => i.inOut === "out")
    .reduce((a, b) => a + b.price, 0); //목록당 지출

  return <div>총 {sum}원 소비</div>;
};

export default TotalAmount;
