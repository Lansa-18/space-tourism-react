import { TechnologyArr } from "./TechnologyDetails";

type TechnologyButtonListProps = {
  technology: TechnologyArr;
  displayTechnology: number;
  switchTechnology: (technologyIndex: number) => void;
};

export default function TechnologyButtonList({
  technology,
  displayTechnology,
  switchTechnology,
}: TechnologyButtonListProps) {
  console.log(technology);

  return technology.map((_, index) => (
    <button
      onClick={() => switchTechnology(index)}
      key={index}
      className={
        index === displayTechnology
          ? "bg-white h-[6.5rem] w-[6.5rem] rounded-full cursor-pointer"
          : "border border-opaque-white text-white h-[6.5rem] w-[6.5rem] rounded-full cursor-pointer"
      }
    >
        {index + 1}
    </button>
  ));
}

<button className=" bg-white rounded-full">1</button>
