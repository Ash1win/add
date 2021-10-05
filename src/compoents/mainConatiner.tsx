import React, { useState } from "react";
import adder from "./adderModel";

export default function mainContainer() {
  const [adderState, setAdderState] = useState<adder>({
    ans: 0,
    showAns: false,
    no1: 0,
    no2: 0,
    no1Range: {
      max: 0,
      min: 0,
    },
    no2Range: {
      max: 0,
      min: 0,
    },
  });

  // function handleNo1(e: any) {}
  // function handleNo2(e: any) {}
  function handleNo1RangeMin(e: any) {
    setAdderState({
      ...adderState,
      no1Range: {
        min: e.target.value,
        max: adderState.no1Range.max,
      },
    });
  }
  function handleNo1RangeMax(e: any) {
    setAdderState({
      ...adderState,
      no1Range: {
        min: adderState.no1Range.min,
        max: e.target.value,
      },
    });
  }
  function handleNo2RangeMin(e: any) {
    setAdderState({
      ...adderState,
      no2Range: {
        min: e.target.value,
        max: adderState.no2Range.max,
      },
    });
  }
  function handleNo2RangeMax(e: any) {
    setAdderState({
      ...adderState,
      no2Range: {
        min: adderState.no2Range.min,
        max: e.target.value,
      },
    });
  }
  function generateRandomNumbers({ no1Range, no2Range }: adder) {
    console.log(no1Range.max + " " + no1Range.min);
    let newNo1 = getRandomInt(no1Range.min, no1Range.max);
    console.log(newNo1);
    let newNo2 = getRandomInt(no2Range.min, no2Range.max);
    let newAns = newNo1 * newNo2;
    setAdderState({
      ...adderState,
      no1: newNo1,
      no2: newNo2,
      ans: newAns,
      showAns: false,
    });
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function handleShowAns() {
    setAdderState({ ...adderState, showAns: true });
  }

  return (
    <div className="cont-main">
      <label htmlFor="no1min">No 1 min range</label>
      <input
        type="number"
        name="no1min"
        value={adderState.no1Range.min}
        onChange={handleNo1RangeMin}
      />
      <label htmlFor="no1max">No 1 max range</label>
      <input
        type="number"
        name="no1max"
        value={adderState.no1Range.max}
        onChange={handleNo1RangeMax}
      />
      {/* ================================================================================ */}
      <br />
      <label htmlFor="no2min">No 2 min range</label>
      <input
        type="number"
        name="no2min"
        value={adderState.no2Range.min}
        onChange={handleNo2RangeMin}
      />
      <label htmlFor="no2max">No 2 max range</label>
      <input
        type="number"
        name="no2max"
        value={adderState.no2Range.max}
        onChange={handleNo2RangeMax}
      />
      <br />
      <button onClick={() => generateRandomNumbers(adderState)}>
        Generate
      </button>
      <button onClick={handleShowAns}>show ans</button>
      {adderState.no1 > 0 && <h3>no1 {adderState.no1}</h3>}
      {adderState.no2 > 0 && <h3>no2 {adderState.no2}</h3>}
      {adderState.ans > 0 && <h3>===========</h3>}
      {adderState.showAns && <h3>ans {adderState.ans}</h3>}
    </div>
  );
}
