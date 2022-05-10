import React, { useEffect, useState } from "react";
import axios from "axios";
import ExpendList from "./components/expendList/expendList";

function App() {
  const [todayData, setTodayData] = useState([]);

  useEffect(() => {
    aixosTest();
  }, []);

  const aixosTest = async () => {
    const { data } = await axios.get("https://eulsoo.github.io/list.json");
    const newDatas = groupArrayOfObjects(data, "date");
    const newDataBox = [...todayData];
    for (const [key, value] of Object.entries(newDatas)) {
      newDataBox.push(value);
    }

    setTodayData(newDataBox);
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
