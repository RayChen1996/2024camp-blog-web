export interface CardProps {
  imagSrc: string;
  title: string;
  description: string;
  hashTags: string[];
}

export function Case({ title, description, hashTags, imagSrc }: CardProps) {
  return (
    <div key={`cardItem`} className="card">
      <figure>
        <img src={imagSrc} alt="" />
      </figure>
      <div className="">
        <h2 className="">{title}</h2>
        <p className="text-[#919191]">{description}</p>
        <div className="card-actions  ">
          {hashTags.map((item) => (
            <button className="btn  bg-[#F1F1F1] rounded-full">{item}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
