import React from "react";
// get our fontawesome imports
import {
  faMedal,
  faEnvelopeOpenText,
  faMusic
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.css";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
const Menu = props => {
  const { changePageStore } = props;
  return (
    <div>
      <div className={style.topbar}>
        <div className={style.pointercurserLeft}>
          <FontAwesomeIcon icon={faMedal} className={style.TopAnimate} />
        </div>
        <div
          className={style.pointercurserLeft}
          onClick={() => {
            changePageStore.changeState(0);
          }}
        >
          {props.name}
        </div>
        <div className={style.pointercurserRight}>
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            onClick={() => changePageStore.changeState(1)}
          />
        </div>
        <div className={style.pointercurserRight}>
          <FontAwesomeIcon
            icon={faMusic}
            onClick={() => changePageStore.changeState(2)}
          />
        </div>

        <div className={style.clear} />
        <div
          className={style.meterleft}
          style={{ width: changePageStore.scrollyValue + "%" }}
        />
        <div
          className={style.meterright}
          style={{ width: 100 - changePageStore.scrollyValue + "%" }}
        />
        <div className={style.clear} />
      </div>
      <div className={style.topblock} />
    </div>
  );
};
Menu.propTypes = {
  // An object taking on a particular shape
  changePageStore: PropTypes.shape({
    showPage: PropTypes.number,
    page: PropTypes.number,
    changeState: PropTypes.func
  }),
  name: PropTypes.string
};
export default inject("changePageStore")(observer(Menu));
