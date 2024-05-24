import SectionTitle from "../../SectionTitle";

export default function PortfolioIntro() {
  return (
    <div className=" ">
      <div className=" mt-32 mb-20">
        <SectionTitle title="作品介紹" />
      </div>

      <div
        className=" flex"
        style={{
          backgroundImage: "url('homeBlockBG1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full m-auto md:w-6/12">
          <img className=" mt-9" src="homepage-work1.png" />
        </div>

        <div className="hidden md:block  md:w-6/12">
          <div className="   lg:bg-black lg:opacity-50  top-10 rounded-2xl ">
            <h2 className=" text-3xl font-bold text-black mt-20 ml-10">
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
              <button className="btn btn-black mb-14 w-32  ">
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

      {/*   Block */}
      <MobileBlockCard
        title="星際旅行訂票平台"
        tags={["網頁設計", "響應式設計", "Bootstrap"]}
        description="悠遊宇宙的夢想，從這裡開始實現"
      />

      <div
        style={{
          backgroundImage: "url('work-image2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full flex    ">
          <div className=" hidden  md:w-6/12  bg-black bg-opacity-50 ">
            <div className="   opacity-10 bg-white text-black   bottom-24  rounded-2xl ">
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
                <button className="btn btn-black mb-14 w-32">
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
          <div className="w-full md:w-6/12 h-full">
            <img className=" mt-9" src="work-image2.png" />
          </div>
        </div>
      </div>

      <MobileBlockCard
        title="理財APP"
        tags={["APP設計", "iOS", "React"]}
        description="連動帳戶與行動支付，讓 AI 提供您最好的理財建議"
      />

      <div
        className="flex"
        style={{
          backgroundImage: "url('homeBlockBG3.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full md:w-6/12">
          <img src="homepage-work3.png" />
        </div>

        <div className=" hidden md:w-6/12">
          <div className="lg:opacity-50 top-10 rounded-2xl">
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
              <button className="btn btn-black mb-14 w-32">
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

      <MobileBlockCard
        title="醫美診所官網"
        tags={["網頁設計", "響應式設計", "ＷordPress"]}
        description="永保青春的秘密，從粹究開始"
      />
    </div>
  );
}

interface MobileBlockCardProps {
  title: string;
  description: string;
  tags: string[];
}

function MobileBlockCard({ title, description, tags }: MobileBlockCardProps) {
  return (
    <div className=" block md:hidden text-center">
      <h2 className=" text-3xl font-bold text-black mt-20 ml-10">{title}</h2>
      <p className="ml-10 text-[#5B5B5B] font-normal text-base mt-2 mb-4">
        {description}
      </p>
      <ul className="flex gap-4 mt-6 justify-center items-center">
        {tags.map((item) => (
          <li className=" rounded-2xl py-1 px-3 bg-[#F1F1F1]    ">{item}</li>
        ))}
      </ul>
      <hr className=" my-10 mx-10" />
      <div className=" mx-44">
        <button className="btn btn-black mb-14 w-32 text-white  ">
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
  );
}
