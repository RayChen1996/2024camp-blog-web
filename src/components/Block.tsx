export default function Block() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" mt-20 mb-10 text-xl  font-bold text-[#3B3B3B]">
        想要合作或瞭解更多？
      </div>

      <button className=" btn btn-[#000] text-white font-semibold text-xl">
        詳細內容與合作流程
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
}
