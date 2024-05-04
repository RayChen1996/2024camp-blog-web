interface SectionTitleProps {
  title: string;
}
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <section className="flex w-full   h-full  items-center  justify-center">
      <span className=" rounded-full w-2 h-2 bg-[#C1C1C1]"></span>
      <div className="w-16 h-[1px] bg-[#C1C1C1]" />
      <label className=" leading-8 font-bold  text-3xl mx-4 text-[#3B3B3B]">
        {title}
      </label>

      <div className="w-16 h-[1px] bg-[#C1C1C1]" />
      <span className=" rounded-full w-2 h-2 bg-[#C1C1C1]"></span>
    </section>
  );
}
