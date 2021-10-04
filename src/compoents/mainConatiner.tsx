import React, { useState } from "react";

export default function mainContainer() {
  const [adderState, setAdderState] = useState({
    no1: 0,
    no2: 0,
    no1Size: 0,
    no2Size: 0,
    ans: 0,
  });

  const handleNo1SizeChange = (e: any) => {
    setAdderState({ ...adderState, no1Size: e.target.value });
    console.log(e.target.value);
  };

  const handleNo2SizeChange = (e: any) => {
    setAdderState({ ...adderState, no2Size: e.target.value });
    console.log(e.target.value);
  };

  const generateNumbers = ({ no1Size, no2Size }: typeof adderState) => {
    let no1String = "";
    let no2String = "";
    for (let i = 1; i <= adderState.no1Size; i++) {
      no1String += Math.floor(Math.random() * 10);
    }
    for (let i = 1; i <= adderState.no2Size; i++) {
      no2String += Math.floor(Math.random() * 10);
    }
    setAdderState({
      ...adderState,
      no1: parseInt(no1String),
      no2: parseInt(no2String),
      ans: parseInt(no1String) * parseInt(no2String),
    });
    console.log("no1 = " + no1String);
    console.log("no2 = " + no2String);
    console.log("ans = " + parseInt(no1String) * parseInt(no2String));
  };

  return (
    <div className="cont-main">
      <input
        type="range"
        min="1"
        max="5"
        value={adderState.no1Size}
        onChange={handleNo1SizeChange}
      />
      <input
        type="range"
        min="1"
        max="5"
        value={adderState.no2Size}
        onChange={handleNo2SizeChange}
      />
      <button onClick={() => generateNumbers(adderState)}>Generate</button>
    </div>
  );
}
