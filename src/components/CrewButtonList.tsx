import { useCrew } from "../context/CrewContext";

export default function CrewButtonList() {
  const { crew, displayCrew, crewSwitch } = useCrew();
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
