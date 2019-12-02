import React from "react";
import style from "./index.css";
import KalimbaStore from "../../../store/KalimbaStore";
const KalimbaContent = () => {
  const kalimbaStore = new KalimbaStore();
  function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array(
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    );
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
  return IsPC() ? (
    <div className={style.kalimbaContainer}>
      <div className={style.kalimbaBlack}></div>
      <div
        id="D6"
        className={`${style.kalimbaBtn} ${style.kalimbaD6}`}
        onMouseDown={() => kalimbaStore.mouseDown("D6")}
        onMouseUp={() => kalimbaStore.mouseUp("D6")}
      >
        <p>。</p>
        <p>。</p>2
      </div>
      <div
        id="B5"
        className={`${style.kalimbaBtn} ${style.kalimbaB5}`}
        onMouseDown={() => kalimbaStore.mouseDown("B5")}
        onMouseUp={() => kalimbaStore.mouseUp("B5")}
      >
        <p>　</p>
        <p>。</p>7
      </div>
      <div
        id="G5"
        className={`${style.kalimbaBtn} ${style.kalimbaG5}`}
        onMouseDown={() => kalimbaStore.mouseDown("G5")}
        onMouseUp={() => kalimbaStore.mouseUp("G5")}
      >
        <p>　</p>
        <p>。</p>5
      </div>
      <div
        id="E5"
        className={`${style.kalimbaBtn} ${style.kalimbaE5}`}
        onMouseDown={() => kalimbaStore.mouseDown("E5")}
        onMouseUp={() => kalimbaStore.mouseUp("E5")}
      >
        <p>　</p>
        <p>。</p>3
      </div>
      <div
        id="C5"
        className={`${style.kalimbaBtn} ${style.kalimbaC5}`}
        onMouseDown={() => kalimbaStore.mouseDown("C5")}
        onMouseUp={() => kalimbaStore.mouseUp("C5")}
      >
        <p>　</p>
        <p>。</p>1
      </div>
      <div
        id="A4"
        className={`${style.kalimbaBtn} ${style.kalimbaA4}`}
        onMouseDown={() => kalimbaStore.mouseDown("A4")}
        onMouseUp={() => kalimbaStore.mouseUp("A4")}
      >
        <p>　</p>
        <p>　</p>6
      </div>
      <div
        id="F4"
        className={`${style.kalimbaBtn} ${style.kalimbaF4}`}
        onMouseDown={() => kalimbaStore.mouseDown("F4")}
        onMouseUp={() => kalimbaStore.mouseUp("F4")}
      >
        <p>　</p>
        <p>　</p>4
      </div>
      <div
        id="D4"
        className={`${style.kalimbaBtn} ${style.kalimbaD4}`}
        onMouseDown={() => kalimbaStore.mouseDown("D4")}
        onMouseUp={() => kalimbaStore.mouseUp("D4")}
      >
        <p>　</p>
        <p>　</p>2
      </div>
      <div
        id="C4"
        className={`${style.kalimbaBtn} ${style.kalimbaC4}`}
        onMouseDown={() => kalimbaStore.mouseDown("C4")}
        onMouseUp={() => kalimbaStore.mouseUp("C4")}
      >
        <p>　</p>
        <p>　</p>1
      </div>
      <div
        id="E4"
        className={`${style.kalimbaBtn} ${style.kalimbaE4}`}
        onMouseDown={() => kalimbaStore.mouseDown("E4")}
        onMouseUp={() => kalimbaStore.mouseUp("E4")}
      >
        <p>　</p>
        <p>　</p>3
      </div>
      <div
        id="G4"
        className={`${style.kalimbaBtn} ${style.kalimbaG4}`}
        onMouseDown={() => kalimbaStore.mouseDown("G4")}
        onMouseUp={() => kalimbaStore.mouseUp("G4")}
      >
        <p>　</p>
        <p>　</p>5
      </div>
      <div
        id="B4"
        className={`${style.kalimbaBtn} ${style.kalimbaB4}`}
        onMouseDown={() => kalimbaStore.mouseDown("B4")}
        onMouseUp={() => kalimbaStore.mouseUp("B4")}
      >
        <p>　</p>
        <p>　</p>7
      </div>
      <div
        id="D5"
        className={`${style.kalimbaBtn} ${style.kalimbaD5}`}
        onMouseDown={() => kalimbaStore.mouseDown("D5")}
        onMouseUp={() => kalimbaStore.mouseUp("D5")}
      >
        <p>　</p>
        <p>。</p>2
      </div>
      <div
        id="F5"
        className={`${style.kalimbaBtn} ${style.kalimbaF5}`}
        onMouseDown={() => kalimbaStore.mouseDown("F5")}
        onMouseUp={() => kalimbaStore.mouseUp("F5")}
      >
        <p>　</p>
        <p>。</p>4
      </div>
      <div
        id="A5"
        className={`${style.kalimbaBtn} ${style.kalimbaA5}`}
        onMouseDown={() => kalimbaStore.mouseDown("A5")}
        onMouseUp={() => kalimbaStore.mouseUp("A5")}
      >
        <p>　</p>
        <p>。</p>6
      </div>
      <div
        id="C6"
        className={`${style.kalimbaBtn} ${style.kalimbaC6}`}
        onMouseDown={() => kalimbaStore.mouseDown("C6")}
        onMouseUp={() => kalimbaStore.mouseUp("C6")}
      >
        <p>。</p>
        <p>。</p>1
      </div>
      <div
        id="E6"
        className={`${style.kalimbaBtn} ${style.kalimbaE6}`}
        onMouseDown={() => kalimbaStore.mouseDown("E6")}
        onMouseUp={() => kalimbaStore.mouseUp("E6")}
      >
        <p>。</p>
        <p>。</p>3
      </div>
    </div>
  ) : (
    <div className={style.kalimbaContainer}>
      <div className={style.kalimbaBlack}></div>
      <div
        id="D6"
        className={`${style.kalimbaBtn} ${style.kalimbaD6}`}
        onTouchStart={() => kalimbaStore.mouseDown("D6")}
        onTouchEnd={() => kalimbaStore.mouseUp("D6")}
      >
        <p>。</p>
        <p>。</p>2
      </div>
      <div
        id="B5"
        className={`${style.kalimbaBtn} ${style.kalimbaB5}`}
        onTouchStart={() => kalimbaStore.mouseDown("B5")}
        onTouchEnd={() => kalimbaStore.mouseUp("B5")}
      >
        <p>　</p>
        <p>。</p>7
      </div>
      <div
        id="G5"
        className={`${style.kalimbaBtn} ${style.kalimbaG5}`}
        onTouchStart={() => kalimbaStore.mouseDown("G5")}
        onTouchEnd={() => kalimbaStore.mouseUp("G5")}
      >
        <p>　</p>
        <p>。</p>5
      </div>
      <div
        id="E5"
        className={`${style.kalimbaBtn} ${style.kalimbaE5}`}
        onTouchStart={() => kalimbaStore.mouseDown("E5")}
        onTouchEnd={() => kalimbaStore.mouseUp("E5")}
      >
        <p>　</p>
        <p>。</p>3
      </div>
      <div
        id="C5"
        className={`${style.kalimbaBtn} ${style.kalimbaC5}`}
        onTouchStart={() => kalimbaStore.mouseDown("C5")}
        onTouchEnd={() => kalimbaStore.mouseUp("C5")}
      >
        <p>　</p>
        <p>。</p>1
      </div>
      <div
        id="A4"
        className={`${style.kalimbaBtn} ${style.kalimbaA4}`}
        onTouchStart={() => kalimbaStore.mouseDown("A4")}
        onTouchEnd={() => kalimbaStore.mouseUp("A4")}
      >
        <p>　</p>
        <p>　</p>6
      </div>
      <div
        id="F4"
        className={`${style.kalimbaBtn} ${style.kalimbaF4}`}
        onTouchStart={() => kalimbaStore.mouseDown("F4")}
        onTouchEnd={() => kalimbaStore.mouseUp("F4")}
      >
        <p>　</p>
        <p>　</p>4
      </div>
      <div
        id="D4"
        className={`${style.kalimbaBtn} ${style.kalimbaD4}`}
        onTouchStart={() => kalimbaStore.mouseDown("D4")}
        onTouchEnd={() => kalimbaStore.mouseUp("D4")}
      >
        <p>　</p>
        <p>　</p>2
      </div>
      <div
        id="C4"
        className={`${style.kalimbaBtn} ${style.kalimbaC4}`}
        onTouchStart={() => kalimbaStore.mouseDown("C4")}
        onTouchEnd={() => kalimbaStore.mouseUp("C4")}
      >
        <p>　</p>
        <p>　</p>1
      </div>
      <div
        id="E4"
        className={`${style.kalimbaBtn} ${style.kalimbaE4}`}
        onTouchStart={() => kalimbaStore.mouseDown("E4")}
        onTouchEnd={() => kalimbaStore.mouseUp("E4")}
      >
        <p>　</p>
        <p>　</p>3
      </div>
      <div
        id="G4"
        className={`${style.kalimbaBtn} ${style.kalimbaG4}`}
        onTouchStart={() => kalimbaStore.mouseDown("G4")}
        onTouchEnd={() => kalimbaStore.mouseUp("G4")}
      >
        <p>　</p>
        <p>　</p>5
      </div>
      <div
        id="B4"
        className={`${style.kalimbaBtn} ${style.kalimbaB4}`}
        onTouchStart={() => kalimbaStore.mouseDown("B4")}
        onTouchEnd={() => kalimbaStore.mouseUp("B4")}
      >
        <p>　</p>
        <p>　</p>7
      </div>
      <div
        id="D5"
        className={`${style.kalimbaBtn} ${style.kalimbaD5}`}
        onTouchStart={() => kalimbaStore.mouseDown("D5")}
        onTouchEnd={() => kalimbaStore.mouseUp("D5")}
      >
        <p>　</p>
        <p>。</p>2
      </div>
      <div
        id="F5"
        className={`${style.kalimbaBtn} ${style.kalimbaF5}`}
        onTouchStart={() => kalimbaStore.mouseDown("F5")}
        onTouchEnd={() => kalimbaStore.mouseUp("F5")}
      >
        <p>　</p>
        <p>。</p>4
      </div>
      <div
        id="A5"
        className={`${style.kalimbaBtn} ${style.kalimbaA5}`}
        onTouchStart={() => kalimbaStore.mouseDown("A5")}
        onTouchEnd={() => kalimbaStore.mouseUp("A5")}
      >
        <p>　</p>
        <p>。</p>6
      </div>
      <div
        id="C6"
        className={`${style.kalimbaBtn} ${style.kalimbaC6}`}
        onTouchStart={() => kalimbaStore.mouseDown("C6")}
        onTouchEnd={() => kalimbaStore.mouseUp("C6")}
      >
        <p>。</p>
        <p>。</p>1
      </div>
      <div
        id="E6"
        className={`${style.kalimbaBtn} ${style.kalimbaE6}`}
        onTouchStart={() => kalimbaStore.mouseDown("E6")}
        onTouchEnd={() => kalimbaStore.mouseUp("E6")}
      >
        <p>。</p>
        <p>。</p>3
      </div>
    </div>
  );
};
export default KalimbaContent;
