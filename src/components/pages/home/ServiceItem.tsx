import SectionTitle from "../../SectionTitle";
import icon1 from "../../../../public/design2D.svg";
import icon2 from "../../../../public/UIDesign.svg";
import icon3 from "../../../../public/layoutService.svg";
import icon4 from "../../../../public/f2edev.svg";

interface ServiceItemProp {
  title: string;
  svg: string;
}
export default function ServiceItem() {
  const serviceItmes: Array<ServiceItemProp> = [
    {
      title: "平面設計",
      svg: icon1 as unknown as string,
    },
    {
      title: "UI 設計",
      svg: icon2 as unknown as string,
    },
    {
      title: "切版服務",
      svg: icon3 as unknown as string,
    },
    {
      title: "前端開發",
      svg: icon4 as unknown as string,
    },
  ];
  return (
    <div className=" mx-8 mt-32  flex flex-col justify-center items-center">
      <SectionTitle title="服務項目" />
      <div className="w-full mt-20 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {serviceItmes.map((item, idx) => (
          <div
            key={`Item-${idx}`}
            className=" rounded-lg bg-black flex justify-center items-center flex-col  w-12/12 h-60    "
          >
            <img className=" mb-[34px]" src={item.svg} alt="" />
            <label className=" font-bold text-white text-xl" htmlFor="">
              {item.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
