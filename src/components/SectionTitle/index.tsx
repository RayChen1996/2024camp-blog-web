interface SectionTitleProps {
  title: string;
}
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex">
      <div></div>
      {title}
    </div>
  );
}
