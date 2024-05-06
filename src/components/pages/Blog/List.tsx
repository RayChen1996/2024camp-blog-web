import SectionTitle from "../../SectionTitle";

interface ListProp {
  imagSrc: string;
  title: string;
  tag: string;
  dateStr: string;
  description: string;
}

/** - 部落格列表 */
export default function List() {
  const data: Array<ListProp> = [
    {
      imagSrc: "article-image1.png",
      title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
      description: "",
      tag: "UI/UX 新知",
      dateStr: "2024/02/10",
    },
    {
      imagSrc: "article-image2.png",
      title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",
      dateStr: "2023/11/20",
      description:
        "延續上一篇針對 Dev Mode 這一篇要說的就是最複雜的「右側面板」啦 右側面板預設有兩個分頁：Inspect（偵測）, Plugins（外掛），預設開啟 Inspect。 右",
      tag: "UI/UX 新知",
    },
    {
      imagSrc: "article-image3.png",
      title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
      description: "",
      tag: "UI/UX 新知",
      dateStr: "2023/10/18",
    },
    {
      imagSrc: "article-image4.png",
      title: "虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究",
      description:
        "在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供",
      tag: "數位產品設計",
      dateStr: "2023/09/20",
    },
    {
      imagSrc: "article-image5.png",
      title: "想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！",
      description:
        "一個準備完整的案主，會在發案之前，先準備好這個設計案的目標、受眾、主",
      tag: "數位產品設計",
      dateStr: "2023/08/10",
    },
    {
      imagSrc: "article-image6.png",
      title: "React vs. Vue，哪種前端框架比較好用？從三大面向談起",
      description:
        "在當今快速發展的前端開發領域中，React和Vue被廣泛認為是兩個最受歡迎和強大的前端",
      tag: "前端開發",
      dateStr: "2023/07/03",
    },
  ];

  return (
    <div>
      <div className=" mt-32">
        <SectionTitle title="部落格" />
      </div>

      <p className=" mt-6 mb-20 text-center">不定期分享技術文章</p>

      <div className=" lg:flex lg:flex-row-reverse">
        <div className=" w-1/3">
          <ul className=" flex lg:flex-col ">
            <li className=" mb-8">全部文章</li>
            <li className=" mb-8">UI/UX 新知</li>
            <li className=" mb-8">數位產品設計</li>
            <li className=" mb-8">平面設計</li>
            <li className=" mb-8">前端開發</li>
          </ul>
        </div>

        <div>
          {data.map((item, idx) => (
            <div key={`item-${idx}`} className=" flex mb-16 gap-4">
              <div className=" w-1/3">
                <img src={item.imagSrc} alt="" />
              </div>
              <div className=" w-2/3 text-left">
                <div className=" flex gap-2 items-center">
                  <span>{item.dateStr}</span>
                  <span className=" rounded-full bg-[#F1F1F1] p-3">
                    {item.tag}
                  </span>
                </div>
                <h2 className="my-4 text-xl font-bold text-[#3B3B3B] ">
                  {item.title}
                </h2>
                <p className=" text-[#3B3B3B]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
