import React, { Suspense } from "react";
import GameCardStore from "../../../store/GameCardStore";
import SectionContent from "../SectionContent";
import AnimationBanner from "../animationBanner/BannerStyle1";
import AnimationBanner2 from "../animationBanner/BannerStyle2";
import BadgeText from "../../common/BadgeText";
import PicGallery from "../PicGallery";
import GameCard from "../GameCard";
import banner01 from "../../../../assets/images/banner01.png";
import draw00 from "../../../../assets/images/draw00.png";
import draw01 from "../../../../assets/images/draw01.png";
import draw02 from "../../../../assets/images/draw02.png";
import draw03 from "../../../../assets/images/draw03.png";
import draw04 from "../../../../assets/images/draw04.png";
import draw05 from "../../../../assets/images/draw05.png";
import draw06 from "../../../../assets/images/draw06.png";
import draw07 from "../../../../assets/images/draw07.png";
import draw08 from "../../../../assets/images/draw08.png";
import draw09 from "../../../../assets/images/draw09.png";
import draw10 from "../../../../assets/images/draw10.png";
import draw11 from "../../../../assets/images/draw11.png";
import draw12 from "../../../../assets/images/draw12.png";
import draw13 from "../../../../assets/images/draw13.png";
import draw14 from "../../../../assets/images/draw14.png";
import web01 from "../../../../assets/images/web01.png";
import web02 from "../../../../assets/images/web02.png";
import web03 from "../../../../assets/images/web03.png";
// import web04 from "../../../assets/images/web04.png";
import web05 from "../../../../assets/images/web05.png";
import web06 from "../../../../assets/images/web06.png";
import web07 from "../../../../assets/images/web07.png";
import web08 from "../../../../assets/images/web08.png";
import web09 from "../../../../assets/images/web09.png";
import web10 from "../../../../assets/images/web10.png";
import web11 from "../../../../assets/images/web11.png";
import web12 from "../../../../assets/images/web12.png";
// import game01 from "../../../../assets/images/game01.png";
import award01 from "../../../../assets/images/award01.png";
import award02 from "../../../../assets/images/award02.png";
import award03 from "../../../../assets/images/award03.png";
import ico_Balsamiq from "../../../../assets/images/ico_Balsamiq.png";
import ico_csharp from "../../../../assets/images/ico_csharp.png";
import ico_sai from "../../../../assets/images/ico_sai.png";
import ico_jest from "../../../../assets/images/ico_jest.png";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faAdobe,
  faBootstrap,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const gameCardStore = new GameCardStore();
const MainContent = () => {
  return (
    <div>
      <PicGallery pics={[banner01]} picStyle={1} />
      <div className="wd80 ml10">
        <SectionContent
          TextCss="text_pink_"
          Title="I Am A Coder Programmer I Write Code"
        >
          <div>
            <AnimationBanner2 />
            <br />
            Whenever somebody asks what I do I tell them I’m a front-end
            developer (answer could change based on the person asking). A two
            ago it was pretty clear what my job entails. I would write HTML, CSS
            and some Javascript for interaction purposes. Even though I spent
            most of my early career doing C# WinForm and Graghic Design work I
            still prefer to be perceived as such (more on the relevance of this
            information later). Around early 2010 this started to change.
            Javascript became a thing — a very big thing. Early last year I
            started meeting more front-end developers and I realize something.
            Front-end developers are no longer the front-end developers I
            traditionally knew.
          </div>
        </SectionContent>
        <SectionContent TextCss="text_orange" Title="My Skills">
          <BadgeText
            color="red"
            title={<FontAwesomeIcon icon={faHtml5} />}
            text="Html5"
          />
          <BadgeText
            color="orange"
            title={<FontAwesomeIcon icon={faCss3} />}
            text="Css3"
          />
          <BadgeText
            color="yellow"
            title={<FontAwesomeIcon icon={faBootstrap} />}
            text="Bootstrap"
          />
          <BadgeText
            color="green"
            title={<FontAwesomeIcon icon={faJs} />}
            text="Javascript"
          />
          <BadgeText
            color="blue"
            title={<FontAwesomeIcon icon={faMicrosoft} />}
            text="C#"
          />
          <BadgeText
            color="cyan"
            title={<FontAwesomeIcon icon={faReact} />}
            text="React"
          />
          <BadgeText
            color="purple"
            title={<FontAwesomeIcon icon={faVuejs} />}
            text="Vue"
          />
          <BadgeText
            color="gray"
            title={<img src={ico_jest} style={{ width: 1 + "em" }} />}
            text="Jest"
          />
          <BadgeText
            color="red"
            title={<img src={ico_sai} style={{ width: 1 + "em" }} />}
            text="Sai"
          />
          <BadgeText
            color="orange"
            title={<img src={ico_Balsamiq} style={{ width: 1 + "em" }} />}
            text="Balsamiq"
          />
          <BadgeText
            color="yellow"
            title={<FontAwesomeIcon icon={faAdobe} />}
            text="Illustrator、Photoshop"
          />
        </SectionContent>
        <SectionContent TextCss="text_green" Title="My Works">
          <div>
            <AnimationBanner />
            <div className="fr">
              <FontAwesomeIcon icon={faAngleUp} />
              　css animation
            </div>
            <br />
            <div className="darkgray">Web Design：</div>
            <PicGallery pics={[web01, web02]} picStyle={2} />
            <PicGallery pics={[web03]} picStyle={2} />
            <PicGallery pics={[web05, web06]} picStyle={4} />
            <PicGallery
              pics={[web07, web08, web09, web10, web11, web12]}
              picStyle={2}
            />
          </div>
          <br />
          <div className="darkgray">Graphic Design：</div>
          <br />
          <PicGallery
            pics={[
              draw00,
              draw01,
              draw02,
              draw03,
              draw04,
              draw05,
              draw06,
              draw07,
              draw08,
              draw09,
              draw10,
              draw11,
              draw12,
              draw13,
              draw14
            ]}
            picStyle={4}
          />
          <br />
          <div className="darkgray">Game Design：</div>
          <br />
          <div>
            Memory Game ( React )　
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
          <GameCard gameCardStore={gameCardStore} />
          <br />
        </SectionContent>
        <SectionContent TextCss="text_blue" Title="Awards">
          <PicGallery pics={[award01, award02]} picStyle={3} />
          <PicGallery pics={[award03]} picStyle={4} />
        </SectionContent>
      </div>
    </div>
  );
};
export default MainContent;
