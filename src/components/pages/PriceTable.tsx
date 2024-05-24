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
      imgSrc: "service-item.svg",
      price: "6,000",
      title: "平面設計",
    },
    {
      imgSrc: "service-item2.svg",
      price: "15,000",
      title: "UI 設計",
    },
    {
      imgSrc: "service-item3.svg",
      price: "22,000",
      title: "前端開發",
    },
  ];
  return (
    <div>
      <div className=" mt-[120px] mb-20">
        <SectionTitle title="價格表" />
      </div>

      <div className=" container   ">
        <div className="flex gap-6">
          {data.map((item) => (
            <div className="  shadow-md bg-[#FAFAFA] border px-8 flex items-center  ">
              <img src={item.imgSrc} alt="" />
              <h3 className=" font-semibold text-[28px]">{item.title}</h3>
              <span className=" w-6 inline-block h-1 "></span>
              <span className=" font-bold text-[32px] text-[#1E1E1E]">
                {item.price}
              </span>
              <span className=" text-base flex items-end justify-center">
                <span>起</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
