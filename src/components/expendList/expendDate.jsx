import React, { useEffect, useState } from "react";
import TotalAmount from "./totalAmount";

const ExpendDate = ({ data }) => {
  const [item, setItem] = useState([]);

  const onChange = (e) => {
    // data.filter ((ele)=>{

    //   if(ele[0].date == e.target.value{
    //     setItem(ele)
    //   })

    // })
    setItem(data.filter((i) => i[0].date == e.target.value)[0]);
  };

  return (
    <>
      <select onChange={onChange}>
        {data.map((datas) => (
          <option value={data[0].date}>{datas[0].date}</option>
        ))}
      </select>
      <TotalAmount datas={item} />
      {item.map((item) => (
        <div>{item.item}</div>
      ))}
    </>
  );
};
export default ExpendDate;
