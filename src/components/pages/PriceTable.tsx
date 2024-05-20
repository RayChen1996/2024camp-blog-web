import SectionTitle from "../SectionTitle";
interface PriceItemProps {
  imgSrc: string;
  title: string;
  price: string;
}
/** - 價格表 */
export default function PriceTable() {
  const data: PriceItemProps[] = [
    {
      imgSrc: "design2D.svg",
      price: "6,000",
      title: "平面設計",
    },
    {
      imgSrc: "UIDesign.svg",
      price: "15,000",
      title: "UI 設計",
    },
    {
      imgSrc: "f2edev.svg",
      price: "22,000",
      title: "前端開發",
    },
  ];
  return (
    <div>
      <SectionTitle title="價格表" />
      <div className=" container   ">
        <div className=" lg:flex gap-6">
          {data.map((item) => (
            <div className="flex  items-end  gap-2 bg-[#FAFAFA] shadow-md rounded-md py-9 px-8">
              <img src={item.imgSrc} alt="" />
              <h3>{item.title}</h3>
              <span className=" w-6 h-1"></span>
              <span className=" font-bold text-[32px] text-[#1E1E1E]">
                {item.price}
              </span>
              <span className=" text-base">起</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
