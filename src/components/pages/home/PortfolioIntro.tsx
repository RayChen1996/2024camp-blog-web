import SectionTitle from "../../SectionTitle";
import work1 from "../../../../public/homeBlockBG1.png";
import work4 from "../../../../public/homepage-work1.png";

import work2 from "../../../../public/work-image2.png";
import work3 from "../../../../public/homeBlockBG3.png";

export default function PortfolioIntro() {
  return (
    <div className=" ">
      <div className=" mt-32 mb-20">
        <SectionTitle title="作品介紹" />
      </div>
      <div className="flex flex-col relative h-full">
        <img src={work1} alt="" className=" h-screen" />
        <img src={work4} className=" absolute top-0" alt="" />
        <div className=" absolute right-20 bg-black opacity-50     top-10 rounded-2xl ">
          <h2 className=" text-3xl font-bold text-white mt-20 ml-10">
            星際旅行訂票平台
          </h2>
          <p className="ml-10">悠遊宇宙的夢想，從這裡開始實現</p>
          <ul className="flex gap-4 mt-6 mx-10">
            <li className=" rounded-xl my-1 mx-3 bg-white ">網頁設計</li>
            <li className=" rounded-xl my-1 mx-3 bg-white ">響應式設計</li>
            <li className=" rounded-xl my-1 mx-3 bg-white ">Bootstrap</li>
          </ul>
          <hr className=" my-10 mx-10" />
          <div className=" mx-44">
            <button className="btn btn-black mb-14 ">
              完整介紹
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.175 9.00011H1C0.716667 9.00011 0.479167 8.90428 0.2875 8.71261C0.0958333 8.52094 0 8.28344 0 8.00011C0 7.71678 0.0958333 7.47928 0.2875 7.28761C0.479167 7.09594 0.716667 7.00011 1 7.00011H12.175L7.275 2.10011C7.075 1.90011 6.97917 1.66678 6.9875 1.40011C6.99583 1.13344 7.1 0.900109 7.3 0.700109C7.5 0.516776 7.73333 0.420943 8 0.412609C8.26667 0.404276 8.5 0.500109 8.7 0.700109L15.3 7.30011C15.4 7.40011 15.4708 7.50844 15.5125 7.62511C15.5542 7.74178 15.575 7.86678 15.575 8.00011C15.575 8.13344 15.5542 8.25844 15.5125 8.37511C15.4708 8.49178 15.4 8.60011 15.3 8.70011L8.7 15.3001C8.51667 15.4834 8.2875 15.5751 8.0125 15.5751C7.7375 15.5751 7.5 15.4834 7.3 15.3001C7.1 15.1001 7 14.8626 7 14.5876C7 14.3126 7.1 14.0751 7.3 13.8751L12.175 9.00011Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className=" relative">
        <img src={work2} className="w-full" alt="" />
        <div className=" absolute left-20 bg-black opacity-50   bottom-24  rounded-2xl ">
          <h2 className=" text-3xl font-bold text-white mt-20 ml-10">
            理財APP
          </h2>
          <p className="ml-10">
            連動帳戶與行動支付，讓 AI 提供您最好的理財建議
          </p>
          <ul className="flex gap-4 mt-6 mx-10">
            <li className=" rounded-xl my-1 mx-3 bg-white ">APP設計</li>
            <li className=" rounded-xl my-1 mx-3 bg-white ">iOS</li>
            <li className=" rounded-xl my-1 mx-3 bg-white ">React</li>
          </ul>
          <hr className=" my-10 mx-10" />
          <div className=" mx-44">
            <button className="btn btn-black mb-14 ">
              完整介紹
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.175 9.00011H1C0.716667 9.00011 0.479167 8.90428 0.2875 8.71261C0.0958333 8.52094 0 8.28344 0 8.00011C0 7.71678 0.0958333 7.47928 0.2875 7.28761C0.479167 7.09594 0.716667 7.00011 1 7.00011H12.175L7.275 2.10011C7.075 1.90011 6.97917 1.66678 6.9875 1.40011C6.99583 1.13344 7.1 0.900109 7.3 0.700109C7.5 0.516776 7.73333 0.420943 8 0.412609C8.26667 0.404276 8.5 0.500109 8.7 0.700109L15.3 7.30011C15.4 7.40011 15.4708 7.50844 15.5125 7.62511C15.5542 7.74178 15.575 7.86678 15.575 8.00011C15.575 8.13344 15.5542 8.25844 15.5125 8.37511C15.4708 8.49178 15.4 8.60011 15.3 8.70011L8.7 15.3001C8.51667 15.4834 8.2875 15.5751 8.0125 15.5751C7.7375 15.5751 7.5 15.4834 7.3 15.3001C7.1 15.1001 7 14.8626 7 14.5876C7 14.3126 7.1 14.0751 7.3 13.8751L12.175 9.00011Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" relative">
        <img src={work3} className="w-full" alt="" />
        <div className=" absolute right-20 bg-black opacity-50     top-10 rounded-2xl ">
          <h2 className=" text-3xl font-bold text-white mt-20 ml-10">
            醫美診所官網
          </h2>
          <p className="ml-10">永保青春的秘密，從粹究開始</p>
          <ul className="flex gap-4 mt-6 mx-10">
            <li className=" rounded-xl my-1 mx-3 bg-white ">網頁設計</li>
            <li className=" rounded-xl my-1 mx-3 bg-white ">響應式設計</li>
            <li className=" rounded-xl my-1 mx-3 bg-white ">ＷordPress</li>
          </ul>
          <hr className=" my-10 mx-10" />
          <div className=" mx-44">
            <button className="btn btn-black mb-14 ">
              完整介紹
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.175 9.00011H1C0.716667 9.00011 0.479167 8.90428 0.2875 8.71261C0.0958333 8.52094 0 8.28344 0 8.00011C0 7.71678 0.0958333 7.47928 0.2875 7.28761C0.479167 7.09594 0.716667 7.00011 1 7.00011H12.175L7.275 2.10011C7.075 1.90011 6.97917 1.66678 6.9875 1.40011C6.99583 1.13344 7.1 0.900109 7.3 0.700109C7.5 0.516776 7.73333 0.420943 8 0.412609C8.26667 0.404276 8.5 0.500109 8.7 0.700109L15.3 7.30011C15.4 7.40011 15.4708 7.50844 15.5125 7.62511C15.5542 7.74178 15.575 7.86678 15.575 8.00011C15.575 8.13344 15.5542 8.25844 15.5125 8.37511C15.4708 8.49178 15.4 8.60011 15.3 8.70011L8.7 15.3001C8.51667 15.4834 8.2875 15.5751 8.0125 15.5751C7.7375 15.5751 7.5 15.4834 7.3 15.3001C7.1 15.1001 7 14.8626 7 14.5876C7 14.3126 7.1 14.0751 7.3 13.8751L12.175 9.00011Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
