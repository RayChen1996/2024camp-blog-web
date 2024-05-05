import SectionTitle from "../SectionTitle";
interface QaProps {
  title: string;
  description: string;
}
/** - 常見問題 */
export default function Faq() {
  const data: Array<QaProps> = [
    {
      title: "時程很趕的話可以加快作業嗎？",
      description:
        "每提早一天，只要支付總報價的 5%，我們即會視為急件為您趕工！",
    },
    {
      title: "白天可以開會討論嗎？",
      description: "每週一三五的白天，可以約定開會時間！",
    },
    {
      title: "有實際開發的網站可以參考嗎？",
      description:
        "請填寫表單或來信索取，部分合作有簽保密協定，無法於網路上公開喔。",
    },
    {
      title: "提供比稿服務嗎？",
      description:
        "只要支付費用，設計提供比稿服務，但切版與前端開發恕不提供該服務內容。",
    },
  ];
  return (
    <div>
      <SectionTitle title="常見問題" />
      <div className=" mt-20 mb-32">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
          {data.map((item, idx) => (
            <div
              key={`QA-${idx}`}
              className=" border-[#F7F7F7] border rounded-md"
            >
              <h2 className=" text-2xl text-[#3B3B3Bi] font-bold my-4">
                {item.title}
              </h2>
              <p className=" text-[#5B5B5B]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
