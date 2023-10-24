import React, { useRef, useState } from "react";
import "./scss/counter.scss";

function Counter() {
  const [number, setNumber] = useState(100);
  let $h2 = useRef();


  const increase = () => {
    setNumber(number + 1);
    changeRandomColor($h2.current);
  };

  const decrease = () => {
    setNumber(number - 1);
    changeRandomColor($h2.current);
  };

  function changeRandomColor($el) {
    const randomColor = Math.round(Math.random() * 0xffffff).toString(16);
    $el.style.color = "#" + randomColor;
  }

  return (
    <div className="product-count">
      <div className="inner">
        <h2 ref={$h2}>사용 품목의 수량은?</h2>
        <p>사용 품목 : {number}</p>
        <div className="countBtn">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
