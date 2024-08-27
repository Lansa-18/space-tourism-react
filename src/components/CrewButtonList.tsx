import { CrewMember } from "./CrewDetails"

type CrewButtonListProps = {
    crew: CrewMember[],
}

export default function CrewButtonList({crew}: CrewButtonListProps) {
  return (
    crew.map((crewMember, index) => <button key={index} className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button> )
  )
}

{/* <button className="bg-white opacity-[0.174363] active-pagination-button h-[2rem] w-[2rem] rounded-full"></button>
<button className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button>
<button className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button>
<button className="bg-white opacity-[0.174363] h-[2rem] w-[2rem] rounded-full"></button> */}
