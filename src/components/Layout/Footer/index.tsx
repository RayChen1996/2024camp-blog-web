export default function Footer() {
  return (
    <footer
      className="flex justify-around items-center text-lg mx-auto bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/footer-bg-lg.png?raw=true)",
      }}
    >
      <div className="my-28 text-lg">
        <img
          className="pb-6"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/logo.svg"
          alt=""
        />
        <h1 className="leading-8 text-gray-800">
          若有數位產品設計和開發相關問題
        </h1>
        <h1 className="leading-8 text-gray-800">
          歡迎填寫表單，或直接與我聯絡！
        </h1>
        <p className="pt-6 text-gray-500">service@hexschool.com</p>
      </div>
      <div className="flex flex-col pb-4">
        <a
          href="#"
          className="b1 flex items-center bg-black text-white w-76 h-18 mb-6 px-6 text-lg rounded-lg border border-gray-300"
        >
          <img
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/list.svg"
            alt="填寫表單"
          />
          填寫表單
        </a>
        <a
          href="#"
          className="flex items-center w-76 h-18 mb-6 px-6 text-lg bg-white rounded-lg border border-gray-300 text-gray-800"
        >
          <img
            className="pr-2"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/instagram.svg"
            alt="hexschool_demo"
          />
          hexschool_demo
        </a>
        <a
          href="#"
          className="flex items-center w-76 h-18 px-6 text-lg bg-white rounded-lg border border-gray-300 text-gray-800"
        >
          <img
            className="pr-2"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/facebook.svg"
            alt="hexschoolTW"
          />
          hexschoolTW
        </a>
      </div>
    </footer>
  );
}
