type pageTextProps = {
  pageNumber: number;
  pageText: string;
};

export default function PageText({ pageNumber, pageText }: pageTextProps) {
  return (
    <div className="flex text-white gap-[2.4rem] text-[2.8rem] uppercase font-barlow-condensed mt-[4.8rem] ml-[11%]">
      <span className="opacity-[0.25] font-bold tracking-[4.725px]">0{pageNumber}</span>
      <p className="tracking-[.4rem]">{pageText}</p>
    </div>
  );
}
