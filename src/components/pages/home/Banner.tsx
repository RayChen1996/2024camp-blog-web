import BgIndex from "../../../../public/h.png";
import YT from "../../../../public/YT.svg";
import FACEBOOK from "../../../../public/FACEBOOK.svg";
import IG from "../../../../public/IG.svg";
import FontEffect from "../../../../public/fontEffect.svg";

export default function Banner() {
  return (
    <div className=" bg-white h-full lg:flex flex-row-reverse">
      <div className=" w-10/12">
        <img src={BgIndex} alt="" />
      </div>

      <IntroCard />
    </div>
  );
}

function IntroCard() {
  return (
    <div className=" lg:w-3/12 m-auto">
      <h1>Hi！我是 Noel</h1>
      <p>具有 10 年經驗的</p>

      <CustomFont title="資深 UI 設計師" />

      <span>兼</span>

      <CustomFont title="前端工程師" />
      <div>技術雙修並行，熱衷於優化使用者的網頁體驗</div>
      <div>WEB DEVELOPMENT / BRANDING / UI / UX / APP DESIGN</div>

      <div className="flex items-center gap-5">
        <span>
          <img src={IG} alt="" />
        </span>
        <span>
          <img src={FACEBOOK} alt="" />
        </span>
        <span>
          <img src={YT} alt="" />
        </span>
      </div>
    </div>
  );
}

interface CustomFontProp {
  title: string;
}
function CustomFont({ title }: CustomFontProp) {
  return (
    <span className=" relative inline-block">
      <span className="z-20 mx-3">{title}</span>
      <img className=" z-10 absolute bottom-1" src={FontEffect} alt="" />
    </span>
  );
}
