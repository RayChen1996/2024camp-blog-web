import SectionTitle from "../SectionTitle";
interface ServiceItemProps {
  imagSrc: string;
  title: string;
  description: string[];
}
export default function ServiceFlow() {
  const data: ServiceItemProps[] = [
    {
      title: "初步接洽",
      description: [
        "透過表單或其他社群軟體與我聯絡 ",
        "根據難易度與複雜度，後續可能需要電話/線上討論",
      ],
      imagSrc: "1.svg",
    },
    {
      title: "需求釐清",
      description: ["透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議"],
      imagSrc: "2.svg",
    },
    {
      title: "委託簽約",
      description: [
        "合約雙方用印後，即正式開始合作",
        "可提供發票或勞務報酬單，須支付 20% 訂金",
      ],
      imagSrc: "3.svg",
    },
    {
      title: "版本呈現",
      description: ["根據合約內容進行設計或開發"],
      imagSrc: "4.svg",
    },
    {
      title: "來回修正",
      description: ["依據合約規定之修正次數進行，次數計算以 mail 為準"],
      imagSrc: "5.svg",
    },
    {
      title: "終版確認",
      description: ["雙方同意後即為最終版"],
      imagSrc: "6.svg",
    },
    {
      title: "結案",
      description: ["客戶簽署驗收單，並於約定日期支付尾款"],
      imagSrc: "7.svg",
    },
  ];
  return (
    <div>
      <div className=" mt-32 ">
        <SectionTitle title="服務流程" />
      </div>

      <div className=" mt-20 w-2/6 m-auto">
        {data.map((item, idx) => (
          <div
            className=" bg-[#3B3B3B] mb-16 flex gap-2 items-center p-8 rounded-md   border-[1px] border-[#919191] "
            key={`item-${idx}`}
          >
            <div className=" w-1/6">
              <img src={item.imagSrc} alt="" />
            </div>
            <div className=" text-left  w-2/3">
              <div>
                <h2 className=" text-2xl font-bold">{item.title}</h2>
              </div>
              <p className=" text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
