import SectionTitle from "../../SectionTitle";
import icon1 from "../../../../public/article-image1.png";
import icon2 from "../../../../public/article-image2.png";
import icon3 from "../../../../public/article-image3.png";

interface ArticleItemProp {
  title: string;
  imgSrc: string;
  tag: string;
  dateStr: string;
}

export default function Article() {
  const serviceItmes: Array<ArticleItemProp> = [
    {
      title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
      imgSrc: icon1 as unknown as string,
      tag: "UI/UX 新知",
      dateStr: "2024/02/10",
    },
    {
      title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",
      imgSrc: icon2 as unknown as string,
      tag: "UI/UX 新知",
      dateStr: "2023/11/20",
    },
    {
      title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",
      imgSrc: icon3 as unknown as string,
      tag: "UI/UX 新知",
      dateStr: "2023/10/18",
    },
  ];

  return (
    <div>
      <div className=" mb-20 mt-32">
        <SectionTitle title="精選文章" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 mb-44">
        {serviceItmes.map((item, index) => (
          <div key={`item-${index}`} className=" mx-6">
            <img className=" rounded-lg" src={item.imgSrc} alt="" />
            <div className=" my-4">
              <h2>{item.title}</h2>
            </div>
            <div className=" flex justify-between items-center">
              <span className=" py-1 px-3 rounded-xl text-[#3B3B3B] bg-[#F1F1F1] ">
                {item.tag}
              </span>
              <span>{item.dateStr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
