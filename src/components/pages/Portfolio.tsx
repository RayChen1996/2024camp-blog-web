import modalimage1 from "../../../public/modal-image1.png";
import modalimage2 from "../../../public/modal-image2.png";
import close from "../../../public/close.svg";

interface CardProps {
  imagSrc: string;
  title: string;
  description: string;
  hashTags: string[];
}
export default function Portfolio() {
  const data: Array<CardProps> = [
    {
      imagSrc: "story1.png",
      title: "星際旅行訂票平台",
      description: "悠遊宇宙的夢想，從這裡開始實現",
      hashTags: ["網頁設計", "響應式設計", "Bootstrap"],
    },
    {
      imagSrc: "story2.png",
      title: "理財App",
      description: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
      hashTags: ["APP設計", "iOS", "React"],
    },
    {
      imagSrc: "story3.png",
      title: "醫美診所官網",
      description: "永保青春的秘密，從粹究開始",
      hashTags: ["網頁設計", "響應式設計", "ＷordPress"],
    },
    {
      imagSrc: "story4.png",
      title: "美美美早餐店 POS 機 UI Design",
      description: "訂單送單一目瞭然，自動報表分析好輕鬆",
      hashTags: ["UI 設計", "前端開發", "Wix"],
    },
    {
      imagSrc: "story5.png",
      title: "電影院訂票系統",
      description: "三步驟完成訂票，電腦手機都支援",
      hashTags: ["前端開發", "後端支援", "Vue"],
    },
    {
      imagSrc: "story6.png",
      title: "巧克巧克形象官網設計",
      description: "三步驟完成訂票，電腦手機都支援",
      hashTags: ["UI設計", "設計系統", "網路電商"],
    },
  ];

  function ModalClickOpen() {
    const dialog = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (dialog) {
      dialog.showModal(); // 确保类型正确，调用 showModal
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.map((item, idx) => (
          <div
            onClick={() => ModalClickOpen()}
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

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className=" ">
                <img src={close} alt="" />
              </button>
            </form>
          </div>
          <h3 className="font-bold text-lg">星際旅行訂票平台</h3>
          <p>悠遊宇宙的夢想，從這裡開始實現</p>

          <div>
            <p>
              STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。
              主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
            </p>
            <div>
              <p>設計原則：宇宙旅行、深色背景、強烈視覺效果</p>
              <p>開發方式：Bootstrap、Javascript、RWD</p>
            </div>
          </div>

          <img src={modalimage1} alt="" />

          <h3 className="font-bold text-lg">主視覺</h3>
          <p>可直接設定日期、起迄星球、張數，快速查詢可購買的票券。</p>
          <img src={modalimage2} alt="" />
        </div>
      </dialog>
    </>
  );
}
