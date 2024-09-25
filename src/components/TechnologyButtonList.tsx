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
  return technology.map((_, index) => (
    <button
      onClick={() => switchTechnology(index)}
      key={index}
      className={`h-[6.5rem] w-[6.5rem] rounded-full cursor-pointer border border-opaque-white hover:border-white ease-in-out duration-300 ${
        index === displayTechnology ? "bg-white text-black" : "text-white"
      }`}
    >
      {index + 1}
    </button>
  ));
}

<button className=" bg-white rounded-full">1</button>;
