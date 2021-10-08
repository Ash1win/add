import React, { useState } from "react";
import adder from "./adderModel";

export default function mainContainer() {
  const [adderState, setAdderState] = useState<adder>({
    ans: 0,
    showAns: false,
    no1: 0,
    no2: 0,
    no1Range: {
      max: 11,
      min: 20,
    },
    no2Range: {
      max: 2,
      min: 9,
    },
  });

  const [isMenuHidden, setIsMenuHidden] = useState(true);

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

  function toggleHideMenu() {
    if (isMenuHidden) {
      setIsMenuHidden(false);
    } else {
      setIsMenuHidden(true);
    }
  }

  return (
    <div className="cont-main">
      <div className={`range-container ${isMenuHidden ? "hide" : ""}`}>
        <div className="no-range">
          <label htmlFor="no1min">No 1 range</label>
          <input
            type="number"
            name="no1min"
            value={adderState.no1Range.min}
            onChange={handleNo1RangeMin}
          />
          <input
            type="number"
            name="no1max"
            value={adderState.no1Range.max}
            onChange={handleNo1RangeMax}
          />
        </div>
        <div className="no-range">
          <label htmlFor="no2min">No 2 range</label>
          <input
            type="number"
            name="no2min"
            value={adderState.no2Range.min}
            onChange={handleNo2RangeMin}
          />
          <input
            type="number"
            name="no2max"
            value={adderState.no2Range.max}
            onChange={handleNo2RangeMax}
          />
        </div>
      </div>
      <button className="menu-btn" onClick={toggleHideMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="add-container">
        <div>
          <div className="multi">{adderState.no1 > 0 && <h3>X</h3>}</div>
          <div>
            {adderState.no1 > 0 && <h3> {adderState.no1}</h3>}
            {adderState.no2 > 0 && <h3> {adderState.no2}</h3>}
          </div>
        </div>
        {adderState.ans > 0 && <hr />}
        {adderState.showAns && <h3> {adderState.ans}</h3>}
      </div>

      <div className="functional-btn-group">
        <button onClick={() => generateRandomNumbers(adderState)}>
          Generate
        </button>
        <button onClick={handleShowAns}>show ans</button>
      </div>
    </div>
  );
}
