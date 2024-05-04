import SectionTitle from "../../SectionTitle";
import work1 from "../../../../public/work-image1.png";
import work2 from "../../../../public/work-image2.png";
import work3 from "../../../../public/work-image3.png";

export default function PortfolioIntro() {
  return (
    <div className=" ">
      <SectionTitle title="作品介紹" />
      <img src={work1} className="w-full" alt="" />
      <img src={work2} className="w-full" alt="" />
      <img src={work3} className="w-full" alt="" />
    </div>
  );
}
