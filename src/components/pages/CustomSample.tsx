import SectionTitle from "../SectionTitle";
interface CardProps {
  imagSrc: string;
  title: string;
  description: string;
  hashTags: string[];
}
/** - 客戶案例 */
export default function CustomSample() {
  const data: Array<CardProps> = [
    {
      imagSrc: "work-image4.png",
      title: "美美美早餐店 POS 機 UI Design",
      description: "訂單送單一目瞭然，自動報表分析好輕鬆",
      hashTags: ["UI 設計", "前端開發", "Wix"],
    },
    {
      imagSrc: "work-image6.png",
      title: "巧克巧克形象官網設計",
      description: "三步驟完成訂票，電腦手機都支援",
      hashTags: ["UI設計", "設計系統", "網路電商"],
    },
    {
      imagSrc: "work-image5.png",
      title: "電影院訂票系統",
      description: "三步驟完成訂票，電腦手機都支援",
      hashTags: ["前端開發", "後端支援", "Vue"],
    },
    {
      imagSrc: "work-image7.png",
      title: "2023 餉茶坊飲料旗艦店活動官網設計",
      description: "主打水果主題，冰鎮夏天暑氣",
      hashTags: ["網頁設計", "切版服務", "Javascript"],
    },
  ];

  return (
    <div>
      <div className=" mt-32">
        <SectionTitle title="客戶案例" />
      </div>

      <div className=" mt-20 grid grid-cols-1 md:grid-cols-2">
        {data.map((item, idx) => (
          <div
            key={`cardItem-${idx}`}
            className="card ml-6 mb-20 cursor-pointer  "
          >
            <figure>
              <img src={item.imagSrc} alt="" />
            </figure>
            <div className=" text-left">
              <h2 className=" text-black font-bold mt-4 mb-2 text-[28px]">
                {item.title}
              </h2>
              <p className="text-[#919191] mb-6">{item.description}</p>
              <div className="card-actions  ">
                {item.hashTags.map((item, idx) => (
                  <button
                    key={idx}
                    className="btn border-none text-black  bg-[#F1F1F1] rounded-full mr-4"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
