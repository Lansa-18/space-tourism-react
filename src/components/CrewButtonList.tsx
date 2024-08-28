import { CrewMember } from "./CrewDetails";

type CrewButtonListProps = {
  crew: CrewMember[];
  displayCrew: number;
  crewSwitch: (index: number) => void;
};

export default function CrewButtonList({
  crew,
  displayCrew,
  crewSwitch,
}: CrewButtonListProps) {
  return crew.map((_, index) => (
    <button
      onClick={() => crewSwitch(index)}
      key={index}
      className={
        index === displayCrew
          ? "bg-white h-[2rem] w-[2rem] rounded-full cursor-pointer"
          : "bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full cursor-pointer"
      }
    ></button>
  ));
}

{
  /* <button className="bg-white opacity-[0.174363] active-pagination-button h-[2rem] w-[2rem] rounded-full"></button>
<button className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button>
<button className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button>
<button className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button> */
}
